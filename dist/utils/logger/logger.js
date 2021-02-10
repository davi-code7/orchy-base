"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.warning = exports.error = exports.success = void 0;

var _chalk = _interopRequireDefault(require("chalk"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const success = succesLog => {
  if (process.env.NODE_ENV === 'development') {
    console.log(`[${_chalk.default.green('OK')}] > ${succesLog}`);
  } else {
    console.log(`[OK] > ${succesLog}`);
  }
};

exports.success = success;

const error = errorLog => {
  if (process.env.NODE_END === 'development') {
    console.log(`[${_chalk.default.red('ERROR')}] > ${errorLog}`);
  } else {
    console.log(`[ERROR] > ${errorLog}`);
  }
};

exports.error = error;

const warning = warningLog => {
  if (process.env.NODE_END === 'development') {
    console.log(`[${_chalk.default.hex('#ff9900').italic('WARNING')}] > ${warningLog}`);
  } else {
    console.log(`[WARNING] > ${warningLog}`);
  }
};

exports.warning = warning;