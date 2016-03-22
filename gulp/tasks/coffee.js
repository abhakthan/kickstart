var gulp = require('gulp'),
  gulpif = require('gulp-if'),
  uglify = require('gulp-uglify'),
  coffee = require('gulp-coffee'),
  babel  = require('gulp-babel');

gulp.task('coffee', function() {
  // Regular JS copying
  gulp.src(['./lib/js/**/*.js'])
    .pipe(babel())
    .pipe(gulp.dest('./lib/js-temp'))
  // Use this space to compile one-off coffeescript files instead of using require.
});
