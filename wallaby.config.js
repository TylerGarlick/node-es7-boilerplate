'use strict';

const Fs = require('fs');
const Path = require('path');

const babelConfiguration = JSON.parse(Fs.readFileSync(Path.join(__dirname, '.babelrc')));
babelConfiguration.babel = require('babel-core');

module.exports = (wallaby) => {
  return {
    files: [
      'lib/**/*',
      //'plugins/**/*',
      'test/**/*',
      { pattern: '**/*.tests.js', ignore: true }
    ],
    tests: [
      '**/*.tests.js'
    ],
    env: {
      type: 'node',
      //params: {
      //  env: 'NODE_ENV=katon;'
      //}
    },
    bootstrap: () => {
      require('./test/helper');
    },
    compilers: {
      '**/*.js': wallaby.compilers.babel(babelConfiguration)
    }
  }
};
