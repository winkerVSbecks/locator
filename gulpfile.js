var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var connect = require('gulp-connect');
var watch = require('gulp-watch');
var colors = require('colors');
var html2js = require('gulp-html2js');

gulp.task('css', function() {
  return gulp.src('./src/*.css')
    .pipe(gulp.dest('./dist/'));
});

gulp.task('js', function() {
  return gulp.src('./src/js/*.js')
    .pipe(concat('locator.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./dist/'));
});

gulp.task('html2js', function() {
  return gulp.src('./src/*.html')
    .pipe(html2js({
      outputModuleName: 'locator',
      useStrict: true,
      base: 'src'
    }))
    .pipe(concat('locator-tpl.js'))
    .pipe(gulp.dest('./dist/'));
});

gulp.task('example', function() {
  return gulp.src('./dist/*.*')
    .pipe(gulp.dest('./example/locator'))
    .pipe(connect.reload());
});

gulp.task('build', ['js', 'html2js', 'css', 'example']);

gulp.task('dev', function() {
  // Start a server
  connect.server({
    root: '',
    port: 3000,
    livereload: true
  });
  console.log('[CONNECT] Listening on port 3000'.yellow.inverse);

  // Watch HTML files for changes
  console.log('[CONNECT] Watching HTML, JS and CSS files for live-reload'.blue);
  watch({
    glob: ['./example/**/*.*', './example/*.*']
  })
    .pipe(connect.reload());

	// Watch src files to rebuild
  gulp.watch('./src/**/*.*', ['build']);
});