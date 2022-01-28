module.exports = {
    roots: ['<rootDir>/tests'],
    setupFiles: ['<rootDir>/.jest/setEnvVars.js'],
    testMatch: [
        '**/__tests__/**/*.+(ts|tsx|js)',
        '**/?(*.)+(spec|test).+(ts|tsx|js)',
    ],
    transform: {
        '^.+\\.(ts|tsx)$': 'ts-jest',
    },
};
