//Example uses simple tasks and env arguments

const gulp = require('gulp');
const argv = require('yargs').argv;

function basicTask(next) {
  console.log('running default task');
  next();
}

function buildTask(next) {
  console.log('running build task');
  next();
}

function runDeploy(next) {
  console.log('=== deploying ===');
  next();
}

const tasksList = [buildTask];

if (process.env.TEST) {
  tasksList.push(basicTask);
}

if (argv.deploy) {
  tasksList.push(runDeploy);
}

exports.default = gulp.series(tasksList);
