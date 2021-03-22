"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.connectMongoDB = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

var _logger = require("../../../utils/logger/logger");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const connectMongoDB = async () => {
  try {
    const dbURI = process.env.ORCHYBASE_MONGO_URI;
    const conn = await _mongoose.default.connect(dbURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false
    });
    (0, _logger.success)(`MongoDB connected: ${conn.connection.host}`);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

exports.connectMongoDB = connectMongoDB;