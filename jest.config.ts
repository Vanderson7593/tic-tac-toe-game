export default {
  clearMocks: true,
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: [
    "<rootDir>/setupTest.ts"
  ],
  preset: 'ts-jest',
  transform: {
    '^.+\\.(ts|tsx)$': 'babel-jest',
  },
  testMatch: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[tj]s?(x)'],
}
