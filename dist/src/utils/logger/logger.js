"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.warning = exports.error = exports.success = void 0;
const chalk_1 = __importDefault(require("chalk"));
const success = (succesLog) => {
    if (process.env.NODE_ENV === 'development') {
        console.log(`[${chalk_1.default.green('OK')}] > ${succesLog}`);
    }
    else {
        console.log(`[OK] > ${succesLog}`);
    }
};
exports.success = success;
const error = (errorLog) => {
    if (process.env.NODE_END === 'development') {
        console.log(`[${chalk_1.default.red('ERROR')}] > ${errorLog}`);
    }
    else {
        console.log(`[ERROR] > ${errorLog}`);
    }
};
exports.error = error;
const warning = (warningLog) => {
    if (process.env.NODE_END === 'development') {
        console.log(`[${chalk_1.default.hex('#ff9900').italic('WARNING')}] > ${warningLog}`);
    }
    else {
        console.log(`[WARNING] > ${warningLog}`);
    }
};
exports.warning = warning;
