var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var connect = require('gulp-connect');
var watch = require('gulp-watch');
var colors = require('colors');
var html2js = require('gulp-html2js');
var karma = require('gulp-karma');
var mocha = require('gulp-mocha');


var testFiles = [
  // Vendor
  'bower_components/angular/angular.js',
  'bower_components/angular-mocks/angular-mocks.js',
  // App
  'src/locator-module.js',
  'src/**/*.js'
];

gulp.task('karma-run', function () {
  return gulp.src(testFiles)
          .pipe(karma({
            configFile: './testing/karma.conf.js',
            action: 'run'
          }))
          .on('error', function(err) {
            // Make sure failed tests cause gulp to exit non-zero
            throw err;
          });
});


gulp.task('karma-watch', function () {
  return gulp.src(testFiles)
          .pipe(karma({
            configFile: './testing/karma.conf.js',
            action: 'watch'
          }))
          .on('error', function(err) {
            // Make sure failed tests cause gulp to exit non-zero
            throw err;
          });
});


// Combine and minify JS
gulp.task('js', function() {
  return gulp.src(['./src/**/*.js', '!./src/**/*.test.js'])
          .pipe(concat('locator.min.js'))
          .pipe(uglify())
          .pipe(gulp.dest('./dist/'))
          .pipe(gulp.dest('./example/locator'));
});


// Convert partials to templateCache
gulp.task('html2js', function() {
  return gulp.src(['./src/location-lookup/location-lookup.html',
            './src/location-picker/location-picker.html'])
          .pipe(html2js({
            outputModuleName: 'locator',
            useStrict: true,
            base: 'src'
          }))
          .pipe(concat('locator-tpl.js'))
          .pipe(gulp.dest('./dist/'))
          .pipe(gulp.dest('./example/locator'))
          .pipe(connect.reload());
});


gulp.task('server', function() {
  // Start a server
  connect.server({
    root: 'example',
    port: 3000,
    livereload: true
  });
  console.log('[CONNECT] Listening on port 3000'.yellow.inverse);

  // Watch HTML files for changes
  console.log('[CONNECT] Watching HTML, JS and CSS files for live-reload'.blue);
  watch({ glob: './example/**/*.*'})
    .pipe(connect.reload());

	// Watch src files to rebuild
  gulp.watch('./src/**/*.*', ['build']);
});


gulp.task('build', ['karma-run', 'js', 'html2js']);

gulp.task('dev', ['server', 'karma-watch']);