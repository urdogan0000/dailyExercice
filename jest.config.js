module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    roots: Array.from({ length: 30 }, (_, i) => `<rootDir>/day${String(i + 1).padStart(2, '0')}`),
    testMatch: ['**/__tests__/**/*.ts', '**/?(*.)+(spec|test).ts'],
    transform: {
        '^.+\\.ts$': 'ts-jest',
    },
    collectCoverageFrom: [
        'day*/**/*.ts',
        '!day*/**/*.d.ts',
        '!day*/**/node_modules/**',
    ],
};
