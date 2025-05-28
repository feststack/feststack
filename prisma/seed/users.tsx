import { PrismaClient } from '../../lib/generated';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

export async function seedUsers() {
  const usersData = [
    {
      userFirstName: 'root',
      userLastName: 'admin',
      userCode: 'RTEN001',
      email: 'root@admin.en',
      password: 'rootroot',
      languageCode: 'en',
      isActive: true,
      groupMatrix: [
        { family: 'admin', rights: ['create', 'read'] },
      ],
    },
    {
      userFirstName: 'master',
      userLastName: 'admin',
      userCode: 'RTEN002',
      email: 'master@admin.en',
      password: 'rootroot',
      languageCode: 'en',
      isActive: true,
      groupMatrix: [
        { family: 'admin', rights: ['create', 'read', 'update', 'delete'] },
      ],
    },
    {
      userFirstName: 'root',
      userLastName: 'default',
      userCode: 'RTEN003',
      email: 'root@default.en',
      password: 'rootroot',
      languageCode: 'en',
      isActive: true,
      groupMatrix: [
        { family: 'default', rights: ['create', 'read', 'update'] },
      ],
    },
    {
      userFirstName: 'inactive',
      userLastName: 'default',
      userCode: 'RTEN004',
      email: 'inactive@default.en',
      password: 'rootroot',
      languageCode: 'en',
      isActive: false,
      groupMatrix: [
        { family: 'default', rights: ['read'] },
      ],
    },
  ];

  for (const u of usersData) {
    const language = await prisma.languages.findFirst({
      where: { languageCode: u.languageCode },
    });

    if (!language) {
      console.warn(`⚠️ Language not found for code: ${u.languageCode}. User "${u.userCode}" skipped.`);
      continue;
    }

    const hashedPassword = await bcrypt.hash(u.password, 10);

    try {
      await prisma.$transaction(async (tx) => {
        const existingUser = await tx.users.findFirst({
          where: { userCode: u.userCode },
          include: { auth: true, userGroups: true },
        });

        let userId: number;

        if (existingUser) {
          await tx.users.update({
            where: { userId: existingUser.userId },
            data: {
              userFirstName: u.userFirstName,
              userLastName: u.userLastName,
              languageId: language.languageId,
              isDeleted: false,
              isActive: u.isActive,
            },
          });

          userId = existingUser.userId;

          if (existingUser.auth) {
            await tx.usersAuth.update({
              where: { userAuthId: existingUser.auth.userAuthId },
              data: {
                email: u.email,
                password: hashedPassword,
                isDeleted: false,
              },
            });
          } else {
            await tx.usersAuth.create({
              data: {
                email: u.email,
                password: hashedPassword,
                userId,
                createdBy: 'SYSTEM - SEED',
                isDeleted: false,
              },
            });
          }

          await tx.usersAdGroups.deleteMany({
            where: { userId },
          });
        } else {
          const newUser = await tx.users.create({
            data: {
              userFirstName: u.userFirstName,
              userLastName: u.userLastName,
              userCode: u.userCode,
              languageId: language.languageId,
              createdBy: 'SYSTEM - SEED',
              isDeleted: false,
              isActive: u.isActive,
            },
          });

          userId = newUser.userId;

          await tx.usersAuth.create({
            data: {
              email: u.email,
              password: hashedPassword,
              userId,
              createdBy: 'SYSTEM - SEED',
              isDeleted: false,
            },
          });
        }

        for (const group of u.groupMatrix || []) {
          for (const rightName of group.rights) {
            const adGroup = await tx.adGroups.findFirst({
              where: {
                adGroupFamily: { adGroupFamilyName: group.family },
                adGroupRight: { adGroupRightName: rightName },
              },
              include: {
                adGroupFamily: true,
                adGroupRight: true,
              },
            });

            if (!adGroup) {
              throw new Error(`❌ AdGroup not found for family="${group.family}" and right="${rightName}".`);
            }

            await tx.usersAdGroups.create({
              data: {
                userId,
                adGroupId: adGroup.adGroupId,
                createdBy: 'SYSTEM - SEED',
                isDeleted: false,
              },
            });
          }
        }
      });

      const groupDesc = u.groupMatrix?.map(g => `${g.family}: ${g.rights.join(',')}`).join(' | ') || 'none';
      console.log(`✅ User "${u.userCode}" created or updated and assigned to: ${groupDesc}`);
    } catch (error) {
      console.error(`❌ Error processing user "${u.userCode}":`, error);
    }
  }
}
