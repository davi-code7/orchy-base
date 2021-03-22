"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _sequelize = require("sequelize");

const connection = new _sequelize.Sequelize(process.env.ORCHYBASE_POSTGRES_DATABASE, process.env.ORCHYBASE_POSTGRES_USERNAME, process.env.ORCHYBASE_POSTGRES_PASSWORD, {
  host: process.env.ORCHYBASE_POSTGRES_HOST,
  port: 5432,
  dialect: 'postgres',
  // dialectOptions: {
  //   ssl: 'Amazon RDS',
  // },
  // pool: { max: 5, idle: 30 },
  // ssl: true,
  define: {
    timestamps: false,
    underscored: true
  },
  retry: {
    match: [/ETIMEDOUT/, /EHOSTUNREACH/, /ECONNRESET/, /ECONNREFUSED/, /ETIMEDOUT/, /ESOCKETTIMEDOUT/, /EHOSTUNREACH/, /EPIPE/, /EAI_AGAIN/, /SequelizeConnectionError/, /SequelizeConnectionRefusedError/, /SequelizeHostNotFoundError/, /SequelizeHostNotReachableError/, /SequelizeInvalidConnectionError/, /SequelizeConnectionTimedOutError/],
    max: 5
  }
});
var _default = connection;
exports.default = _default;