const {
  series,
  src,
  dest,
  watch,
  parallel
} = require('gulp');
const {
  exec
} = require('child_process');
const path = require('path');
const DIST_DIR = path.resolve(__dirname, 'build');
const concatCSS = require('gulp-concat-css');
const minifyCSS = require('gulp-clean-css');
const htmlReplace = require('gulp-html-replace');
const rename = require('gulp-rename');


function buildPolymer() {
  return exec('polymer build');
}

function buildCSS() {
  return src(`elements/*.css`)
    .pipe(concatCSS(`ox.min.css`))
    .pipe(minifyCSS())
    .pipe(dest(`${DIST_DIR}/prod`));
}

function renameJS() {
  return src(`${DIST_DIR}/prod/index.js`)
    .pipe(rename(`ox.min.js`))
    .pipe(dest(`${DIST_DIR}/prod`));
}

function removeUselessFiles() {
  return exec('rm -rf build/prod/index.js');
}

function replaceHTML() {
  return src(`${DIST_DIR}/prod/index.html`)
    .pipe(htmlReplace({
      'css': 'ox.min.css',
      'js': {
        src: [
          ['ox.min.js']
        ],
        tpl: '<script src="%s" type="module"></script>'
      }
    }))
    .pipe(dest(`${DIST_DIR}/prod`))
}

exports.build = series(buildPolymer, renameJS, buildCSS, replaceHTML, removeUselessFiles);