module.exports = {
    ...require('./jest-common'),
    testEnvironment: 'jest-environment-jsdom', //'jest-environment-node',
    // after jest is loaded
    setupTestFrameworkScriptFile: require.resolve('./setup-tests.js'),
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
    watchPlugins: [
        'jest-watch-typeahead/filename',
        'jest-watch-typeahead/testname',
    ]
}