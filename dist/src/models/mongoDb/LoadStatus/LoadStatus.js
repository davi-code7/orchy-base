"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const LoadStatusSchema = new mongoose_1.default.Schema({
    id_flow: {
        type: String,
        required: true,
    },
    id_load: {
        type: Number,
        required: true,
    },
    api_key: {
        type: String,
        required: true,
    },
    start: {
        type: Date,
        required: true,
    },
    finish: {
        type: Date,
        required: true,
    },
    total: {
        type: Number,
        required: true,
    },
    contact_total: {
        type: Number,
        required: true,
    },
    telephone_total: {
        type: Number,
        required: true,
    },
    email_total: {
        type: Number,
        required: true,
    },
    contact_processed: {
        type: Number,
        required: true,
    },
    telephone_processed: {
        type: Number,
        required: true,
    },
    email_processed: {
        type: Number,
        required: true,
    },
    created_at: {
        type: Date,
        default: Date.now,
    },
    updated_at: {
        type: Date,
        required: false,
        default: null,
    },
});
const LoadStatus = mongoose_1.default.model('LoadStatus', LoadStatusSchema);
exports.default = LoadStatus;
