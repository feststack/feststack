import { PrismaClient } from '../../lib/generated'

const prisma = new PrismaClient()

export async function seedAdGroups() {
  const families = ['default', 'admin', 'manager']
  const rights = ['create', 'read', 'update', 'delete']

  // Préparer les droits globaux (communs à toutes les familles)
  const rightMap: { [key: string]: number } = {}

  for (const rightName of rights) {
    let right = await prisma.adGroupsRights.findFirst({
      where: { adGroupRightName: rightName },
    })

    if (!right) {
      right = await prisma.adGroupsRights.create({
        data: {
          adGroupRightName: rightName,
          createdBy: 'SYSTEM - SEED',
          isDeleted: false,
        },
      })
      console.log(`✅ Right '${rightName}' created`)
    } else {
      console.log(`ℹ️ Right '${rightName}' already exists`)
    }

    // Stocker pour associer aux groupes ensuite
    rightMap[rightName] = right.adGroupRightId
  }

  // Seed des familles et groupes
  for (const familyName of families) {
    let family = await prisma.adGroupsFamilies.findFirst({
      where: { adGroupFamilyName: familyName },
    })

    if (!family) {
      family = await prisma.adGroupsFamilies.create({
        data: {
          adGroupFamilyName: familyName,
          createdBy: 'SYSTEM - SEED',
          isDeleted: false,
        },
      })
      console.log(`✅ Ad groupd family '${familyName}' creaed`)
    } else {
      console.log(`ℹ️ Ad groupd family '${familyName}' allready exist`)
    }

    // Créer les groupes liés à cette famille avec le bon droit
    for (const rightName of rights) {

      const exists = await prisma.adGroups.findFirst({
        where: { adGroupFamilyId: family.adGroupFamilyId, adGroupRightId: rightMap[rightName] },
      })

      if (!exists) {
        await prisma.adGroups.create({
          data: {
            adGroupFamilyId: family.adGroupFamilyId,
            adGroupRightId: rightMap[rightName],
            createdBy: 'SYSTEM - SEED',
            isDeleted: false,
          },
        })
        console.log(`✅ AdGroup '${familyName}' with '${rightName}' created`)
      } else {
        console.log(`ℹ️ AdGroup '${familyName}' with '${rightName}' allready exist`)
      }
    }
  }

  console.log('🎉 Seed terminé pour les AdGroups, familles et droits')
}
