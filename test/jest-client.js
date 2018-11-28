module.exports = {
    ...require('./jest-common'),
    displayName: 'dom',
    testEnvironment: 'jest-environment-jsdom', //'jest-environment-node',
    // after jest is loaded
    setupTestFrameworkScriptFile: require.resolve('./setup-tests.js'),
}