//Example uses preprocessor to inject data in static content

const gulp = require('gulp');
const preprocess = require('gulp-preprocess');

gulp.task('html', () => {
  const context = { NODE_ENV: 'production', DEBUG: true };
  return gulp
    .src('./app/*.html')
    .pipe(preprocess({ context })) // To set environment variables in-line
    .pipe(gulp.dest('./dist/'));
});

gulp.task('scripts', () => {
  return gulp.src(['./app/*.js']).pipe(preprocess()).pipe(gulp.dest('./dist/'));
});

exports.default = gulp.parallel(['html', 'scripts']);
