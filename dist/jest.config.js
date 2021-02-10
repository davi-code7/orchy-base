const { pathsToModuleNameMapper } = require('ts-jest/utils');
const { compilerOptions } = require('./tsconfig.json');
module.exports = {
    clearMocks: true,
    collectCoverageFrom: ['src/**/*.ts'],
    coverageDirectory: '__test__/coverage',
    coverageReporters: ['json', 'lcov'],
    moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
        prefix: '<rootDir>',
    }),
    preset: 'ts-jest',
    setupFiles: ['dotenv/config'],
    testEnvironment: 'node',
    testMatch: ['<rootDir>/__tests__/**/*.spec.ts'],
    transform: {
        '^.+\\.ts$': 'babel-jest',
    },
};
