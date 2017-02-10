exports.config = {
    specs: ['specs/expSpec.js'],
    suites: {
        full: ["specs/expSpec.js","specs/fieldGlass.js"],
        another: "specs/expSpecTwo.js"
    },
    capabilities: {
    browserName: 'chrome',
    shardTestFiles: true,
    maxInstances: 5
  }

};