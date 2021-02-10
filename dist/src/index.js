"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
require("./database");
const index_1 = require("./config/database/mongoDb/index");
const Queue_1 = __importDefault(require("./models/postgres/Queue/Queue"));
const Load_1 = __importDefault(require("./models/postgres/Load/Load"));
const ContactData_1 = __importDefault(require("./models/postgres/ContactData/ContactData"));
const Contact_1 = __importDefault(require("./models/postgres/Contact/Contact"));
const LoadInfo_1 = __importDefault(require("./models/mongoDb/LoadInfo/LoadInfo"));
const LoadStatus_1 = __importDefault(require("./models/mongoDb/LoadStatus/LoadStatus"));
const QueueContact_1 = __importDefault(require("./models/mongoDb/QueueContact/QueueContact"));
class OrchyBase {
    constructor() {
        index_1.connectMongoDB();
    }
    async createQueue(queueData) {
        try {
            const localNewQueue = await Queue_1.default.create(queueData);
            this.newQueue = localNewQueue.get();
        }
        catch (err) {
            console.log(err);
        }
        return this.newQueue;
    }
    async createLoad(loadData) {
        try {
            const localNewLoad = await Load_1.default.create(loadData);
            this.newLoad = localNewLoad.get();
        }
        catch (err) {
            console.log(err);
        }
        return this.newLoad;
    }
    async createContact(contactData) {
        try {
            const localNewContact = await Contact_1.default.create(contactData);
            this.newContact = localNewContact.get();
        }
        catch (err) {
            console.log(err);
        }
        return this.newContact;
    }
    async createContactData(contactDataData) {
        try {
            const localNewContactData = await ContactData_1.default.create(contactDataData);
            this.newContactData = localNewContactData.get();
        }
        catch (err) {
            console.log(err);
        }
        return this.newContactData;
    }
    async createLoadInfo(loadInfoData) {
        try {
            const newLoadInfo = new LoadInfo_1.default(loadInfoData);
            this.newLoadInfo = await newLoadInfo.save();
        }
        catch (err) {
            console.log(err);
        }
        return this.newLoadInfo;
    }
    async createLoadStatus(loadStatusData) {
        try {
            const newLoadStatus = new LoadStatus_1.default(loadStatusData);
            this.newLoadStatus = await newLoadStatus.save();
        }
        catch (err) {
            console.log(err);
        }
        return this.newLoadStatus;
    }
    async createQueueContact(queueContactData) {
        try {
            const newQueueContact = new QueueContact_1.default(queueContactData);
            this.newQueueContact = await newQueueContact.save();
        }
        catch (err) {
            console.log(err);
        }
        return this.newQueueContact;
    }
}
exports.default = OrchyBase;
