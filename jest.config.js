module.exports = {
    collectCoverage: true,
    collectCoverageFrom: [
        '<rootDir>/src/*.js',
    ],
    moduleFileExtensions: ['js', 'jsx', 'json'],
    transform: {
        '^.+\\.jsx?$': 'babel-jest',
    },
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/src/$1',
    },
    coveragePathIgnorePatterns: [
        '<rootDir>/test/*.js',
        '<rootDir>/test/.*.js',
        '<rootDir>/test/*/*.js',
    ],
    testURL: 'http://localhost/',
};
