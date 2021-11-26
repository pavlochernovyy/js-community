//Example implements building assets

const { join } = require('path');

const gulp = require('gulp');
const debug = require('gulp-debug');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const clean = require('gulp-clean');
const count = require('gulp-count');
const uglify = require('gulp-uglify');
const order = require('gulp-order');

const ASSET_FOLDER_LOCATION = join('.', 'public');
const BUILD_FOLDER_LOCATION = join(ASSET_FOLDER_LOCATION, 'dist');

gulp.task('scss', () => {
  return gulp
    .src(join(ASSET_FOLDER_LOCATION, 'scss', '**', '*.scss'))
    .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(order(['vendor/*.css', 'common.css', 'components/*.css']))
    .pipe(debug())
    .pipe(concat('main.css'))
    .pipe(gulp.dest(BUILD_FOLDER_LOCATION));
});

gulp.task('js', () => {
  return gulp
    .src(join(ASSET_FOLDER_LOCATION, '*.js'))
    .pipe(uglify())
    .pipe(gulp.dest(BUILD_FOLDER_LOCATION));
});

gulp.task('favicon', () => {
  return gulp
    .src(join(ASSET_FOLDER_LOCATION, 'favicon.ico'))
    .pipe(gulp.dest(BUILD_FOLDER_LOCATION));
});

gulp.task('fonts', () => {
  return gulp
    .src(join(ASSET_FOLDER_LOCATION, 'fonts', '**'))
    .pipe(gulp.dest(join(BUILD_FOLDER_LOCATION, 'fonts')));
});

gulp.task('img', () => {
  return gulp
    .src(join(ASSET_FOLDER_LOCATION, 'img', '**'))
    .pipe(gulp.dest(join(BUILD_FOLDER_LOCATION, 'img')));
});

gulp.task('clean', () => {
  return gulp
    .src(BUILD_FOLDER_LOCATION, { read: false, allowEmpty: true })
    .pipe(clean());
});

gulp.task('count', () => {
  return gulp
    .src(join(BUILD_FOLDER_LOCATION, '**'))
    .pipe(count('====> ## build files ready to deploy'));
});

gulp.task('watch:scss', () => {
  return gulp.watch(
    [join(ASSET_FOLDER_LOCATION, 'scss', '**', '*.scss')],
    gulp.series(['scss'])
  );
});

gulp.task('watch:js', () => {
  return gulp.watch([join(ASSET_FOLDER_LOCATION, '*.js')], gulp.series(['js']));
});

gulp.task(
  'default',
  gulp.series(['clean', 'scss', 'js', 'fonts', 'img', 'favicon', 'count'])
);
