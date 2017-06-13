exports.config = {

    baseUrl: 'https://www.angularjs.org/',

    // https://github.com/angular/protractor/blob/master/docs/timeouts.md
    allScriptsTimeout: 110000,

    framework: 'custom',
    frameworkPath: require.resolve('serenity-js'),

    specs: [ 'features/**/*.feature' ],

    cucumberOpts: {
        require:    [ 'features/**/*.ts' ],
        format:     'pretty',
        compiler:   'ts:ts-node/register'
    },

    capabilities: {
        browserName: 'chrome',

        chromeOptions: {
            args: [
                '--disable-infobars',
                // "--headless",
                // "--disable-gpu",
                // "--window-size=1024x768"
            ]
        }
    }
};