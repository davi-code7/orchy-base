"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const LoadStatusSchema = new _mongoose.default.Schema({
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
  total: {
    type: String,
    required: true
  },
  contact_total: {
    type: String,
    required: true
  },
  telephone_total: {
    type: String,
    required: true
  },
  email_total: {
    type: String,
    required: true
  },
  contact_processed: {
    type: String,
    required: true
  },
  telephone_processed: {
    type: String,
    required: true
  },
  email_processed: {
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

const LoadStatus = _mongoose.default.model('LoadStatus', LoadStatusSchema);

var _default = LoadStatus;
exports.default = _default;