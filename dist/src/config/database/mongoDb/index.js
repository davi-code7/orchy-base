"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectMongoDB = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const logger_1 = require("../../../utils/logger/logger");
const connectMongoDB = async () => {
    try {
        const dbURI = process.env.ORCHYBASE_MONGO_URI;
        const conn = await mongoose_1.default.connect(dbURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
        });
        logger_1.success(`MongoDB connected: ${conn.connection.host}`);
    }
    catch (err) {
        console.error(err);
        process.exit(1);
    }
};
exports.connectMongoDB = connectMongoDB;
