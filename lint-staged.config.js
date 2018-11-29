module.exports = {
    linters: [
        '**/*.js': ['jest --findRelatedTests'] // any file which jest find related tests found will be added to the lint-staged
    ]
}