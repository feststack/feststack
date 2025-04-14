/** @type {import('ts-jest').JestConfigWithTsJest} */
export default {
  preset: 'ts-jest',
  testEnvironment: 'node',

  // Utilise ts-jest pour .ts et .tsx
  transform: {
    '^.+\\.tsx?$': ['ts-jest', {}],
  },

  // Gère les alias importés comme "@/lib/..."
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',
  },

  // Cherche uniquement les vrais fichiers de test
  testMatch: ['**/__tests__/**/*.test.ts', '**/?(*.)+(spec|test).ts'],

  // Ignore node_modules et lib (fichiers d’implémentation, pas de test)
  testPathIgnorePatterns: ['/node_modules/', '/lib/'],

  // Extensions de fichiers reconnues
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],

  // Supprime les warnings de collectCoverageFrom si tu l’actives un jour
  collectCoverageFrom: ['**/*.{ts,tsx}', '!**/node_modules/**', '!**/lib/**'],
};
