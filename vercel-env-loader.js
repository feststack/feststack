import fs from 'fs';

const branch = process.env.VERCEL_GIT_COMMIT_REF;

const envMap = {
  preprod: '.env.preprod',
  qualif: '.env.qualif',
  prod: '.env.prod',
};

const envFile = envMap[branch];

if (envFile && fs.existsSync(envFile)) {
  fs.copyFileSync(envFile, '.env');
  console.log(`✅ Loaded ${envFile} as .env`);
} else {
  console.warn(`⚠️ No specific env file found for branch "${branch}". Using default .env`);
}
