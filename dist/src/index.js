"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
require("./database");
const logger_1 = require("./utils/logger/logger");
const index_1 = require("./utils/generators/index");
const index_2 = require("./config/database/mongoDb/index");
const Queue_1 = __importDefault(require("./models/postgres/Queue/Queue"));
const Load_1 = __importDefault(require("./models/postgres/Load/Load"));
const ContactData_1 = __importDefault(require("./models/postgres/ContactData/ContactData"));
const Contact_1 = __importDefault(require("./models/postgres/Contact/Contact"));
const LoadInfo_1 = __importDefault(require("./models/mongoDb/LoadInfo/LoadInfo"));
const LoadStatus_1 = __importDefault(require("./models/mongoDb/LoadStatus/LoadStatus"));
const QueueContact_1 = __importDefault(require("./models/mongoDb/QueueContact/QueueContact"));
class OrchyBase {
    constructor() {
        index_2.connectMongoDB();
    }
    async createQueue(queueData) {
        try {
            const localNewQueue = await Queue_1.default.create(queueData);
            this.queue = localNewQueue.get();
        }
        catch (err) {
            logger_1.error(err);
        }
        return this.queue;
    }
    async updateQueue(where, queueDataToUpdate) {
        try {
            const toUpdateData = index_1.generateUpdateQueueObject(queueDataToUpdate);
            const updatedQueue = await Queue_1.default.update(toUpdateData, {
                where,
            });
            this.queue = updatedQueue;
        }
        catch (err) {
            logger_1.error(err);
        }
        return this.queue;
    }
    async deleteQueue(where) {
        try {
            const destroyedQueue = await Queue_1.default.destroy({
                where,
            });
            this.queue = destroyedQueue;
        }
        catch (err) {
            logger_1.error(err);
        }
        return this.queue;
    }
    async getQueue(where) {
        try {
            const queue = await Queue_1.default.findOne({
                where,
            });
            this.queue = queue.get();
        }
        catch (err) {
            logger_1.error(err);
        }
        return this.queue;
    }
    async getQueues(where) {
        try {
            let queues;
            if (!where) {
                queues = await Queue_1.default.findAll();
            }
            else {
                queues = await Queue_1.default.findAll({
                    where,
                });
            }
            const mapedQueues = queues.map((queue) => queue.get());
            this.queue = mapedQueues;
        }
        catch (err) {
            logger_1.error(err);
        }
        return this.queue;
    }
    async createLoad(loadData) {
        try {
            const localNewLoad = await Load_1.default.create(loadData);
            this.load = localNewLoad.get();
        }
        catch (err) {
            logger_1.error(err);
        }
        return this.load;
    }
    async updateLoad(where, loadDataToUpdate) {
        try {
            const toUpdateData = index_1.generateUpdateLoadObject(loadDataToUpdate);
            const updatedLoad = await Load_1.default.update(toUpdateData, {
                where,
            });
            this.load = updatedLoad;
        }
        catch (err) {
            logger_1.error(err);
        }
        return this.load;
    }
    async deleteLoad(where) {
        try {
            const destroyedLoad = await Load_1.default.destroy({
                where,
            });
            this.load = destroyedLoad;
        }
        catch (err) {
            logger_1.error(err);
        }
        return this.load;
    }
    async getLoad(where) {
        try {
            const load = await Load_1.default.findOne({
                where,
            });
            this.load = load.get();
        }
        catch (err) {
            logger_1.error(err);
        }
        return this.load;
    }
    async getLoads(where) {
        try {
            let loads;
            if (!where) {
                loads = await Load_1.default.findAll();
            }
            else {
                loads = await Load_1.default.findAll({
                    where,
                });
            }
            const mapedLoads = loads.map((load) => load.get());
            this.load = mapedLoads;
        }
        catch (err) {
            logger_1.error(err);
        }
        return this.load;
    }
    async createContact(contactData) {
        try {
            const localNewContact = await Contact_1.default.create(contactData);
            this.contact = localNewContact.get();
        }
        catch (err) {
            logger_1.error(err);
        }
        return this.contact;
    }
    async updateContact(where, contactDataToUpdate) {
        try {
            const toUpdateData = index_1.generateUpdateContactObject(contactDataToUpdate);
            const updatedContact = await Contact_1.default.update(toUpdateData, {
                where,
            });
            this.contact = updatedContact;
        }
        catch (err) {
            logger_1.error(err);
        }
        return this.contact;
    }
    async deleteContact(where) {
        try {
            const destroyedContact = await Contact_1.default.destroy({
                where,
            });
            this.contact = destroyedContact;
        }
        catch (err) {
            logger_1.error(err);
        }
        return this.contact;
    }
    async getContact(where) {
        try {
            const contact = await Contact_1.default.findOne({
                where,
            });
            this.contact = contact.get();
        }
        catch (err) {
            logger_1.error(err);
        }
        return this.contact;
    }
    async getContacts(where) {
        try {
            let contacts;
            if (!where) {
                contacts = await Contact_1.default.findAll();
            }
            else {
                contacts = await Contact_1.default.findAll({
                    where,
                });
            }
            const mapedContacts = contacts.map((contact) => contact.get());
            this.contact = mapedContacts;
        }
        catch (err) {
            logger_1.error(err);
        }
        return this.contact;
    }
    async createContactData(contactDataData) {
        try {
            const localNewContactData = await ContactData_1.default.create(contactDataData);
            this.contactData = localNewContactData.get();
        }
        catch (err) {
            logger_1.error(err);
        }
        return this.contactData;
    }
    async updateContactData(where, contactDataToUpdate) {
        try {
            const toUpdateData = index_1.generateUpdateContactDataObject(contactDataToUpdate);
            const updatedContactData = await ContactData_1.default.update(toUpdateData, {
                where,
            });
            this.contactData = updatedContactData;
        }
        catch (err) {
            logger_1.error(err);
        }
        return this.contactData;
    }
    async deleteContactData(where) {
        try {
            const destroyedContactData = await ContactData_1.default.destroy({
                where,
            });
            this.contactData = destroyedContactData;
        }
        catch (err) {
            logger_1.error(err);
        }
        return this.contactData;
    }
    async getContactData(where) {
        try {
            const contactData = await Contact_1.default.findOne({
                where,
            });
            this.contactData = contactData.get();
        }
        catch (err) {
            logger_1.error(err);
        }
        return this.contactData;
    }
    async getContactsData(where) {
        try {
            let contactsData;
            if (!where) {
                contactsData = await Contact_1.default.findAll();
            }
            else {
                contactsData = await Contact_1.default.findAll({
                    where,
                });
            }
            const mapedContactsData = contactsData.map((contactData) => contactData.get);
            this.contactData = mapedContactsData;
        }
        catch (err) {
            logger_1.error(err);
        }
        return this.contactData;
    }
    async createLoadInfo(loadInfoData) {
        try {
            const newLoadInfo = new LoadInfo_1.default(loadInfoData);
            this.loadInfo = await newLoadInfo.save();
        }
        catch (err) {
            logger_1.error(err);
        }
        return this.loadInfo;
    }
    async updateLoadInfo(where, loadInfoDataToUpdate) {
        try {
            const toUpdateData = index_1.generateUpdateLoadInfoDataObject(loadInfoDataToUpdate);
            const updatedLoadInfo = await LoadInfo_1.default.findOneAndUpdate(where, toUpdateData, { runValidators: true });
            this.loadInfo = updatedLoadInfo;
        }
        catch (err) {
            logger_1.error(err);
        }
        this.loadInfo;
    }
    async deleteLoadInfo(where) {
        try {
            const destroyedLoadInfo = await LoadInfo_1.default.findOneAndDelete(where);
            this.loadInfo = destroyedLoadInfo;
        }
        catch (err) {
            logger_1.error(err);
        }
        return this.loadInfo;
    }
    async getLoadInfo(where) {
        try {
            const loadInfo = await LoadInfo_1.default.findOne(where);
            this.loadInfo = loadInfo;
        }
        catch (err) {
            logger_1.error(err);
        }
        return this.loadInfo;
    }
    async getLoadInfosData(where) {
        try {
            let loadInfosData;
            if (!where) {
                loadInfosData = await LoadInfo_1.default.find();
            }
            else {
                loadInfosData = await LoadInfo_1.default.find(where);
            }
            this.loadInfo = loadInfosData;
        }
        catch (err) {
            logger_1.error(err);
        }
        return this.loadInfo;
    }
    async createLoadStatus(loadStatusData) {
        try {
            const newLoadStatus = new LoadStatus_1.default(loadStatusData);
            this.loadStatus = await newLoadStatus.save();
        }
        catch (err) {
            logger_1.error(err);
        }
        return this.loadStatus;
    }
    async updateLoadStatus(where, loadStatusDataToUpdate) {
        try {
            const toUpdateData = index_1.generateUpdateLoadStatusDataObject(loadStatusDataToUpdate);
            const updatedLoadStatus = await LoadInfo_1.default.findOneAndUpdate(where, toUpdateData, { runValidators: true });
            this.loadStatus = updatedLoadStatus;
        }
        catch (err) {
            logger_1.error(err);
        }
        this.loadStatus;
    }
    async deleteLoadStatus(where) {
        try {
            const destroyedLoadStatus = await LoadStatus_1.default.findOneAndDelete(where);
            this.loadStatus = destroyedLoadStatus;
        }
        catch (err) {
            logger_1.error(err);
        }
        return this.loadStatus;
    }
    async getLoadStatus(where) {
        try {
            const loadStatus = await LoadInfo_1.default.findOne(where);
            this.loadStatus = loadStatus;
        }
        catch (err) {
            logger_1.error(err);
        }
        return this.loadStatus;
    }
    async getLoadStatuses(where) {
        try {
            let loadStatusesData;
            if (!where) {
                loadStatusesData = await LoadInfo_1.default.find();
            }
            else {
                loadStatusesData = await LoadInfo_1.default.find(where);
            }
            this.loadStatus = loadStatusesData;
        }
        catch (err) {
            logger_1.error(err);
        }
        return this.loadStatus;
    }
    async createQueueContact(queueContactData) {
        try {
            const newQueueContact = new QueueContact_1.default(queueContactData);
            this.queueContact = await newQueueContact.save();
        }
        catch (err) {
            logger_1.error(err);
        }
        return this.queueContact;
    }
    async updateQueueContact(where, queueContactDataToUpdate) {
        try {
            const toUpdateData = index_1.generateUpdateQueueContactDataObject(queueContactDataToUpdate);
            const updatedQueueContact = await QueueContact_1.default.findOneAndUpdate(where, toUpdateData, { runValidators: true });
            this.queueContact = updatedQueueContact;
        }
        catch (err) {
            logger_1.error(err);
        }
        this.queueContact;
    }
    async deleteQueueContact(where) {
        try {
            const destroyedQueueContact = await QueueContact_1.default.findOneAndDelete(where);
            this.queueContact = destroyedQueueContact;
        }
        catch (err) {
            logger_1.error(err);
        }
        return this.queueContact;
    }
    async getQueueContact(where) {
        try {
            const queueContact = await QueueContact_1.default.findOne(where);
            this.queueContact = queueContact;
        }
        catch (err) {
            logger_1.error(err);
        }
        return this.queueContact;
    }
    async getQueueContacts(where) {
        try {
            let queueContactsData;
            if (!where) {
                queueContactsData = await QueueContact_1.default.find();
            }
            else {
                queueContactsData = await QueueContact_1.default.find(where);
            }
            this.queueContact = queueContactsData;
        }
        catch (err) {
            logger_1.error(err);
        }
        return this.queueContact;
    }
}
exports.default = OrchyBase;
const orchybase = new OrchyBase();
async function test(num) {
    orchybase.updateQueueContact({ _id: '6022db65bdca0399642f9737' }, { updated_at: Date.now() });
}
for (let i = 0; i < 2; i += 1) {
    test(i);
}
