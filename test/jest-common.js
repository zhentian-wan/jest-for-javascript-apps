const path = require('path');

module.exports = {
    rootDir: path.join(__dirname, '..'), // find tests in src folder
    moduleDirectories: [
        'node_modules', 
        path.join(__dirname, '../src'), 
        'shared',
        __dirname,
    ],
    moduleNameMapper: {
        '\\.module\\.css$': 'identity-obj-proxy',
        '\\.css$': require.resolve('./style-mock.js')
    }, 
    snapshotSerializers: ['jest-serializer-path'],
    collectCoverageFrom: ['**/src/**/*.js'],
}