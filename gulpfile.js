const {
  series,
  src,
  dest,
  watch,
  parallel
} = require('gulp');

const path = require('path');
const webpack = require('webpack-stream');
const webpeckConfig = require('./webpack.config');
const less = require('gulp-less');
const concatCSS = require('gulp-concat-css');
const minifyCSS = require('gulp-clean-css');

const DIST_DIR = path.resolve(__dirname, 'dist');

function buildCSS() {
  return src('./elements/*.css')
    // .pipe(less())
    .pipe(concatCSS(`ox.min.css`))
    .pipe(minifyCSS())
    .pipe(dest(DIST_DIR));
}

function buildWithWebpack() {
  return src('./index.js')
    .pipe(webpack(webpeckConfig))
    .pipe(dest(DIST_DIR));
}

exports.webpack = parallel(buildCSS, buildWithWebpack);