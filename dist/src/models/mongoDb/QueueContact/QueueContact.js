"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const QueueContactSchema = new mongoose_1.default.Schema({
    id_contact_data: {
        type: Number,
        required: true,
    },
    schedule: {
        type: Date,
        required: true,
    },
    event_type: {
        type: String,
        required: true,
    },
    data_type: {
        type: String,
        required: true,
    },
    contact_data: {
        type: String,
        required: true,
    },
    status: {
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
const QueueContact = mongoose_1.default.model('QueueContact', QueueContactSchema);
exports.default = QueueContact;
