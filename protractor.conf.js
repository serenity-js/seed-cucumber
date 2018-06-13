const isCI = () => process.env.CI && process.env.CI === 'true';

/**
 * To learn more about the protractor.conf.js check out:
 * https://github.com/angular/protractor/blob/master/lib/config.ts
 */
exports.config = {

    baseUrl: 'https://www.angularjs.org/',

    directConnect: true,

    // https://github.com/angular/protractor/blob/master/docs/timeouts.md
    allScriptsTimeout: 110000,

    // Load Serenity/JS
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
                '--headless',
                '--disable-gpu',
                '--window-size=800,600'
            ].

            // Required on Travis CI when running the build without sudo
            // https://developers.google.com/web/updates/2017/06/headless-karma-mocha-chai#running_it_all_on_travis_ci
            concat(isCI() ? ['--no-sandbox'] : [])
        }
    }
};
