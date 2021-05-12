const SpecReporter = require('jasmine-spec-reporter').SpecReporter

exports.config = {
    framework: 'jasmine2',
    jasmineNodeOpts: {
        showColors: true,
        silent: true,
        defaultTimeoutInterval: 360000,
    },

    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['protractor-spec.js'],
    capabilities: {
        'browserName': 'chrome',
        'chromeOptions': {
            'args': ['--start-maximized']
        }
    },

    onPrepare () {
        jasmine.getEnv().addReporter(
          new SpecReporter({
            spec: {
              displayStacktrace: true,
            },
            summary: {
              displayDuration: false,
            },
          })
        )
      },
}