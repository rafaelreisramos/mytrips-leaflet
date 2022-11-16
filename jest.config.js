// eslint-disable-next-line @typescript-eslint/no-var-requires
const nextJest = require('next/jest')

const esModules = ['react-leaflet', '@react-leaflet']

const createJestConfig = nextJest({
  dir: './',
})

/** @type {import('jest').Config} */
const customJestConfig = {
  moduleDirectories: ['node_modules', '<rootDir>/'],
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
  transformIgnorePatterns: [`/node_modules/(?!(${esModules.join('|')})/)`],
  testEnvironment: 'jest-environment-jsdom',
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.ts(x)'],
  setupFilesAfterEnv: ['<rootDir>/.jest/jest.setup.ts'],
}

module.exports = async () => {
  const jestConfig = await createJestConfig(customJestConfig)()

  return {
    ...jestConfig,
    transformIgnorePatterns: jestConfig.transformIgnorePatterns.filter(
      (ptn) => ptn !== '/node_modules/'
    ),
  }
}
