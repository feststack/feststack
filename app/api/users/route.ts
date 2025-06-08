import { PrismaClient } from '../../../generated/prisma';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

const CORS_HEADERS = {
  'Access-Control-Allow-Origin': '*', // En prod, remplace par ton domaine exact
  'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
};

type PrismaKnownError = {
  code: string;
  meta?: {
    target?: string[];
  };
};

export async function OPTIONS() {
  // Réponse pré-vol CORS
  return new Response(null, {
    status: 204,
    headers: CORS_HEADERS,
  });
}

export async function POST(request: Request) {
  try {
    const { email, password, clientAppId } = await request.json();

    if (!email || !password || !clientAppId) {
      return new Response(
        JSON.stringify({ error: 'Email, password and clientAppId are required.' }),
        {
          status: 400,
          headers: CORS_HEADERS,
        }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await prisma.usersAuth.create({
      data: {
        email,
        password: hashedPassword,
        usersRootings: {
          create: { clientAppId },
        },
      },
      include: {
        usersRootings: true,
      },
    });

    return new Response(JSON.stringify({ user: newUser }), {
      status: 201,
      headers: CORS_HEADERS,
    });
  } catch (error: unknown) {
    if (
      typeof error === 'object' &&
      error !== null &&
      'code' in error &&
      (error as PrismaKnownError).code === 'P2002' &&
      'meta' in error &&
      Array.isArray((error as PrismaKnownError).meta?.target) &&
      (error as PrismaKnownError).meta!.target!.includes('email')
    ) {
      return new Response(JSON.stringify({ error: 'Email already exists.' }), {
        status: 409,
        headers: CORS_HEADERS,
      });
    }

    if (error instanceof Error) {
      console.error('Error creating user:', error);
    } else {
      console.error('Unknown error:', error);
    }

    return new Response(JSON.stringify({ error: 'Internal server error.' }), {
      status: 500,
      headers: CORS_HEADERS,
    });
  }
}

export async function GET() {
  try {
    const users = await prisma.usersAuth.findMany({
      include: { usersRootings: true },
    });
    return new Response(JSON.stringify(users), {
      status: 200,
      headers: CORS_HEADERS,
    });
  } catch (error) {
    console.error('Error fetching users:', error);
    return new Response(JSON.stringify({ error: 'Internal server error.' }), {
      status: 500,
      headers: CORS_HEADERS,
    });
  }
}
