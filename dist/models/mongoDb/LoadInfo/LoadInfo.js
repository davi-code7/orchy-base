"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const LoadInfoSchema = new _mongoose.default.Schema({
  id_flow: {
    type: String,
    required: true
  },
  id_load: {
    type: String,
    required: true
  },
  id_org: {
    type: String,
    required: true
  },
  start: {
    type: Date,
    required: true
  },
  finish: {
    type: Date,
    required: true
  },
  schedule: {
    type: Date,
    required: true
  },
  contacts: {
    type: String,
    required: true
  },
  telephones: {
    type: String,
    required: true
  },
  telephones_ddd: {
    type: [String],
    required: true
  },
  email: {
    type: String,
    required: true
  },
  created_at: {
    type: Date,
    default: Date.now
  },
  updated_at: {
    type: Date,
    required: false,
    default: null
  }
});

const LoadInfo = _mongoose.default.model('LoadInfo', LoadInfoSchema);

var _default = LoadInfo;
exports.default = _default;