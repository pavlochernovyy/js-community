//Example uses custom plugin

const gulp = require('gulp');

function buildTask(next) {
  console.log('** build task proceed **\n');
  next();
}

function runCustomPlugin() {
  const plugin = require('./custom-plugin');
  return gulp
    .src('*.js')
    .pipe(plugin('no options'))
    .pipe(plugin('no other options'));
}

exports.default = gulp.series(runCustomPlugin, buildTask);
