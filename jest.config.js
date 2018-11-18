const path = require('path');

module.exports = {
    testEnvironment: 'jest-environment-jsdom', //'jest-environment-node',
    moduleDirectories: [
        'node_modules', 
        path.join(__dirname, 'src'), 
        'shared',
        path.join(__dirname, 'test'),
    ],
    moduleNameMapper: {
        '\\.module\\.css$': 'identity-obj-proxy',
        '\\.css$': require.resolve('./test/style-mock.js')
    }, 
    snapshotSerializers: ['jest-serializer-path'],
    // after jest is loaded
    setupTestFrameworkScriptFile: require.resolve('./test/setup-tests.js')
}