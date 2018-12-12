const {
  series,
  src,
  dest,
  watch,
  parallel
} = require('gulp');

const path = require('path');
const DIST_DIR = path.resolve(__dirname, 'dist');


exports.dev = parallel();