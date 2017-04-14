// custom-transformer.js
'use strict';

const babel = require('babel-core');
const jestPreset = require('babel-preset-jest');

module.exports = {
  process(src, filename) {
    if (filename.endsWith('js.flow')) {
      return babel.transform(src, {
        filename,
        presets: [jestPreset],
        retainLines: true,
      }).code;
    }
    return src;
  },
};
