// Karma configuration
// Generated on Mon Aug 27 2018 15:38:00 GMT+0800 (CST)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    // frameworks: ['jasmine'],
    frameworks: ['mocha'],


    // list of files / patterns to load in the browser
    files: [
      // './src/第一周.JavaScript语言新发展/作业/js/*.js',
      // './src/第一周.JavaScript语言新发展/作业/unit/*.spec.js',
      // './src/第二周.大话NodeJS72般变化/作业/controllers/*.js',
      './src/第二周.大话NodeJS72般变化/作业/test/*.spec.js'
    ],


    // list of files / patterns to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      // './src/第一周.JavaScript语言新发展/作业/js/*.js': ['babel', 'coverage'],
      // './src/第一周.JavaScript语言新发展/作业/unit/*.spec.js': ['babel']
      // './src/第二周.大话NodeJS72般变化/作业/controllers/*.js': ['babel', 'coverage'],
      './src/第二周.大话NodeJS72般变化/作业/test/*.spec.js': ['babel']
    },

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress', 'coverage'],

    // optionally, configure the reporter
    coverageReporter: {
      type : 'html',
      dir : './src/第一周.JavaScript语言新发展/作业/coverage/'
    },

    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}
