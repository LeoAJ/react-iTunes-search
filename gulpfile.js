/*global require */

'use strict';

var gulp = require('gulp'),
    webpack = require('webpack-stream'),
    eslint = require('gulp-eslint'),
    open = require('gulp-open');

gulp.task('lint', function () {
  return gulp.src(['js/**/*.js'])
              .pipe(eslint('./.eslintrc'))
              .pipe(eslint.format())
              .pipe(eslint.failOnError());
});

gulp.task('webpack', function () {
  return gulp.src('js/app.js')
    .pipe(webpack(require('./webpack.config.js')))
    .pipe(gulp.dest('dist/'));
});

gulp.task('open', function () {
  gulp.src('./index.html')
      .pipe(open());
});

gulp.task('build', ['lint'], function () {
  gulp.start('webpack');
});

gulp.task('start', ['webpack'], function () {
  gulp.start('open');
});

gulp.task('default', ['lint'], function () {
  gulp.start('start');
});
