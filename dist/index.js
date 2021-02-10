"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("dotenv/config");

require("./database");

var _index = require("./config/database/mongoDb/index");

var _Queue = _interopRequireDefault(require("./models/postgres/Queue/Queue"));

var _Load = _interopRequireDefault(require("./models/postgres/Load/Load"));

var _ContactData = _interopRequireDefault(require("./models/postgres/ContactData/ContactData"));

var _Contact = _interopRequireDefault(require("./models/postgres/Contact/Contact"));

var _LoadInfo = _interopRequireDefault(require("./models/mongoDb/LoadInfo/LoadInfo"));

var _LoadStatus = _interopRequireDefault(require("./models/mongoDb/LoadStatus/LoadStatus"));

var _QueueContact = _interopRequireDefault(require("./models/mongoDb/QueueContact/QueueContact"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class OrchyBase {
  constructor() {
    (0, _index.connectMongoDB)();
  } // Create methods
  // Postgres


  async createQueue(queueData) {
    try {
      const localNewQueue = await _Queue.default.create(queueData);
      this.newQueue = localNewQueue.get();
    } catch (err) {
      console.log(err);
    }

    return this.newQueue;
  }

  async createLoad(loadData) {
    try {
      const localNewLoad = await _Load.default.create(loadData);
      this.newLoad = localNewLoad.get();
    } catch (err) {
      console.log(err);
    }

    return this.newLoad;
  }

  async createContact(contactData) {
    try {
      const localNewContact = await _Contact.default.create(contactData);
      this.newContact = localNewContact.get();
    } catch (err) {
      console.log(err);
    }

    return this.newContact;
  }

  async createContactData(contactDataData) {
    try {
      const localNewContactData = await _ContactData.default.create(contactDataData);
      this.newContactData = localNewContactData.get();
    } catch (err) {
      console.log(err);
    }

    return this.newContactData;
  } // MongoDB


  async createLoadInfo(loadInfoData) {
    try {
      const newLoadInfo = new _LoadInfo.default(loadInfoData);
      this.newLoadInfo = await newLoadInfo.save();
    } catch (err) {
      console.log(err);
    }

    return this.newLoadInfo;
  }

  async createLoadStatus(loadStatusData) {
    try {
      const newLoadStatus = new _LoadStatus.default(loadStatusData);
      this.newLoadStatus = await newLoadStatus.save();
    } catch (err) {
      console.log(err);
    }

    return this.newLoadStatus;
  }

  async createQueueContact(queueContactData) {
    try {
      const newQueueContact = new _QueueContact.default(queueContactData);
      this.newQueueContact = await newQueueContact.save();
    } catch (err) {
      console.log(err);
    }

    return this.newQueueContact;
  }

}

exports.default = OrchyBase;