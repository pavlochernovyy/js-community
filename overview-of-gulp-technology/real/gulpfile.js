const path = require('path');
const gulp = require('gulp');
const process = require('gulp-preprocess');
const webpack = require('webpack-stream');

const JS_PATH = path.resolve('public', 'src', 'index.js');
const JS_DIST = path.resolve('dist');

gulp.task('bundle:js', () => {
  const config = {
    mode: 'production',
    entry: JS_PATH,
    output: {
      path: JS_DIST,
      filename: 'bundle.js',
    },
  };
  return gulp.src(JS_PATH).pipe(webpack(config)).pipe(gulp.dest('dist/'));
});

gulp.task('process:env', () => {
  const context = require('./config.json');
  return gulp
    .src('dist/bundle.js')
    .pipe(process({ context }))
    .pipe(gulp.dest(JS_DIST));
});

gulp.task('move:html', () => {
  return gulp.src('public/*.html').pipe(gulp.dest(JS_DIST));
});

gulp.task('default', gulp.series(['bundle:js', 'process:env', 'move:html']));
