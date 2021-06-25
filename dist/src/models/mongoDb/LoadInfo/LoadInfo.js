"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const LoadInfoSchema = new mongoose_1.default.Schema({
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
    schedule: {
        type: Date,
        required: true,
    },
    contacts: {
        type: Number,
        required: true,
    },
    telephones: {
        type: Number,
        required: true,
    },
    emails: {
        type: Number,
        required: true,
    },
    telephones_ddd: [
        {
            ddd: {
                type: Number,
                required: true,
            },
            quantity: {
                type: Number,
                required: true,
            },
        },
    ],
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
const LoadInfo = mongoose_1.default.model('LoadInfo', LoadInfoSchema);
exports.default = LoadInfo;
