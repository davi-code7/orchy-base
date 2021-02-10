"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection = new sequelize_1.Sequelize(process.env.ORCHYBASE_POSTGRES_DATABASE, process.env.ORCHYBASE_POSTGRES_USERNAME, process.env.ORCHYBASE_POSTGRES_PASSWORD, {
    host: process.env.ORCHYBASE_POSTGRES_HOST,
    port: 5432,
    dialect: 'postgres',
    define: {
        timestamps: false,
        underscored: true,
    },
    retry: {
        match: [
            /ETIMEDOUT/,
            /EHOSTUNREACH/,
            /ECONNRESET/,
            /ECONNREFUSED/,
            /ETIMEDOUT/,
            /ESOCKETTIMEDOUT/,
            /EHOSTUNREACH/,
            /EPIPE/,
            /EAI_AGAIN/,
            /SequelizeConnectionError/,
            /SequelizeConnectionRefusedError/,
            /SequelizeHostNotFoundError/,
            /SequelizeHostNotReachableError/,
            /SequelizeInvalidConnectionError/,
            /SequelizeConnectionTimedOutError/,
        ],
        max: 5,
    },
});
exports.default = connection;
