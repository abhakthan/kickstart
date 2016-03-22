var gulp = require('gulp'),
    clean     = require('gulp-clean');

gulp.task('clean', ['browserify', 'minify'], function() {
  gulp.src(['./lib/js-temp'], {read: false}).pipe(clean());
});
