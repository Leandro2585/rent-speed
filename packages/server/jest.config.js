const { pathsToModuleNameMapper } = require('ts-jest/utils')
const { compilerOptions } = require('./tsconfig.json')

module.exports = {
  roots: ['<rootDir>/src'],
  collectCoverageFrom: [
    '<rooDir>/packages/server/src/**/*.ts',
    '!<rooDir>/packages/server/src/main/**'
  ],
  coverageDirectory: 'coverage',
  moduleNameMapper: pathsToModuleNameMapper(
    compilerOptions.paths, { prefix: '<rootDir>/packages/server/src/' }
  ),
  testEnvironment: 'node',
  transform: {
    '.+\\.ts$': 'ts-jest'
  }
};