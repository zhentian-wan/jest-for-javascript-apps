module.exports = {
    testEnvironment: 'jest-environment-jsdom', //'jest-environment-node',
    moduleNameMapper: {
        '\\.module\\.css$': 'identity-obj-proxy',
        '\\.css$': require.resolve('./test/style-mock.js')
    }, 
    snapshotSerializers: ['jest-serializer-path'],
    // after jest is loaded
    setupTestFrameworkScriptFile: require.resolve('./test/setup-tests.js')
}