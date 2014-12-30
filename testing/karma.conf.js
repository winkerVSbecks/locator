module.exports = function (config) {
  config.set({
    basePath: '/',
    frameworks: ['mocha', 'chai', 'sinon'],
    exclude: ['bower_components/*', 'dist/**/*', 'example/**/*'],
    reporters: ['nyan'],
    port: 9999,
    colors: true,
    logLevel: config.LOG_ERROR,
    autoWatch: false,
    browsers: ['PhantomJS'], // Alternatively: 'Chrome'
    captureTimeout: 6000,
    singleRun: true
  });
};