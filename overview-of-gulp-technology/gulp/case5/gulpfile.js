const path = require('path');
const gulp = require('gulp');
const webpack = require('webpack-stream');
const minifyHTML = require('gulp-minify-html');

gulp.task('bundle:js', () => {
  const config = {
    mode: 'production',
    entry: './src/index.js',
    output: {
      path: path.resolve(__dirname, 'dist/js'),
      filename: 'bundle.js',
    },
  };
  return gulp
    .src('src/index.js')
    .pipe(webpack(config))
    .pipe(gulp.dest('dist/'));
});

gulp.task('move:html', () => {
  return gulp.src('public/*.html').pipe(minifyHTML()).pipe(gulp.dest('dist'));
});

gulp.task('watch:js', () => {
  return gulp.watch(['src/*.js'], gulp.series(['bundle:js', 'move:html']));
});

gulp.task('default', gulp.series(['bundle:js', 'move:html']));
