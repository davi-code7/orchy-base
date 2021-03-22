"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const QueueContactSchema = new _mongoose.default.Schema({
  id_contact_data: {
    type: Number,
    required: true
  },
  schedule: {
    type: Date,
    required: true
  },
  event_type: {
    type: String,
    required: true
  },
  data_type: {
    type: String,
    required: true
  },
  contact_data: {
    type: String,
    required: true
  },
  status: {
    type: Number,
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

const QueueContact = _mongoose.default.model('QueueContact', QueueContactSchema);

var _default = QueueContact;
exports.default = _default;