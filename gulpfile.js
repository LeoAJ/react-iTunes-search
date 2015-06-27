'use strict';

var gulp = require('gulp'),
    webpack = require('gulp-webpack'),
    open = require('gulp-open');

gulp.task('webpack', function () {
  return gulp.src('js/app.js')
    .pipe(webpack(require('./webpack.config.js')))
    .pipe(gulp.dest('dist/'));
});

gulp.task('open', function () {
  gulp.src('./index.html')
      .pipe(open());
});

gulp.task('default', ['webpack'], function () {
  gulp.start('open');
});