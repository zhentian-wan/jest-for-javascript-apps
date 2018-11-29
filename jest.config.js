module.exports = {
    ...require('./test/jest-common'),
    projects: ['./test/jest-lint.js', './test/jest-client.js', './test/jest-server.js'],
    coverageThreshold: {
        global: {
            statements: 80,
            branchs: 80,
            lines: 80,
            functions: 80,
        },
        './src/shared/utils.js': {
            statements: 100,
            branchs: 80,
            lines: 100,
            functions: 100,
        }
    },
    collectCoverageFrom: ['**/src/**/*.js'],
}