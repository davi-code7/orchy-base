"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("../config/database/postgres/index"));
const Contact_1 = __importDefault(require("../models/postgres/Contact/Contact"));
const ContactData_1 = __importDefault(require("../models/postgres/ContactData/ContactData"));
const Load_1 = __importDefault(require("../models/postgres/Load/Load"));
const Queue_1 = __importDefault(require("../models/postgres/Queue/Queue"));
Contact_1.default.init(index_1.default);
ContactData_1.default.init(index_1.default);
Load_1.default.init(index_1.default);
Queue_1.default.init(index_1.default);
Contact_1.default.associate(index_1.default.models);
ContactData_1.default.associate(index_1.default.models);
Load_1.default.associate(index_1.default.models);
Queue_1.default.associate(index_1.default.models);
exports.default = index_1.default;
