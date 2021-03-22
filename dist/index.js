"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("dotenv/config");

require("./database");

var _logger = require("./utils/logger/logger");

var _index = require("./utils/generators/index");

var _index2 = require("./config/database/mongoDb/index");

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
    (0, _index2.connectMongoDB)();
  } // Postgres
  // Queue methods


  async createQueue(queueData) {
    try {
      const localNewQueue = await _Queue.default.create(queueData);
      this.queue = localNewQueue.get();
    } catch (err) {
      (0, _logger.error)(err);
    }

    return this.queue;
  }

  async updateQueue(where, queueDataToUpdate) {
    try {
      const toUpdateData = (0, _index.generateUpdateQueueObject)(queueDataToUpdate);
      const updatedQueue = await _Queue.default.update(toUpdateData, {
        where
      });
      this.queue = updatedQueue;
    } catch (err) {
      (0, _logger.error)(err);
    }

    return this.queue;
  }

  async deleteQueue(where) {
    try {
      const destroyedQueue = await _Queue.default.destroy({
        where
      });
      this.queue = destroyedQueue;
    } catch (err) {
      (0, _logger.error)(err);
    }

    return this.queue;
  }

  async getQueue(where) {
    try {
      const queue = await _Queue.default.findOne({
        where
      });
      this.queue = queue.get();
    } catch (err) {
      (0, _logger.error)(err);
    }

    return this.queue;
  }

  async getQueues(where) {
    try {
      let queues;

      if (!where) {
        queues = await _Queue.default.findAll();
      } else {
        queues = await _Queue.default.findAll({
          where
        });
      }

      const mapedQueues = queues.map(queue => queue.get());
      this.queue = mapedQueues;
    } catch (err) {
      (0, _logger.error)(err);
    }

    return this.queue;
  } // Load methods


  async createLoad(loadData) {
    try {
      const localNewLoad = await _Load.default.create(loadData);
      this.load = localNewLoad.get();
    } catch (err) {
      (0, _logger.error)(err);
    }

    return this.load;
  }

  async updateLoad(where, loadDataToUpdate) {
    try {
      const toUpdateData = (0, _index.generateUpdateLoadObject)(loadDataToUpdate);
      const updatedLoad = await _Load.default.update(toUpdateData, {
        where
      });
      this.load = updatedLoad;
    } catch (err) {
      (0, _logger.error)(err);
    }

    return this.load;
  }

  async deleteLoad(where) {
    try {
      const destroyedLoad = await _Load.default.destroy({
        where
      });
      this.load = destroyedLoad;
    } catch (err) {
      (0, _logger.error)(err);
    }

    return this.load;
  }

  async getLoad(where) {
    try {
      const load = await _Load.default.findOne({
        where
      });
      this.load = load.get();
    } catch (err) {
      (0, _logger.error)(err);
    }

    return this.load;
  }

  async getLoads(where) {
    try {
      let loads;

      if (!where) {
        loads = await _Load.default.findAll();
      } else {
        loads = await _Load.default.findAll({
          where
        });
      }

      const mapedLoads = loads.map(load => load.get());
      this.load = mapedLoads;
    } catch (err) {
      (0, _logger.error)(err);
    }

    return this.load;
  } // Contact methods


  async createContact(contactData) {
    try {
      const localNewContact = await _Contact.default.create(contactData);
      this.contact = localNewContact.get();
    } catch (err) {
      (0, _logger.error)(err);
    }

    return this.contact;
  }

  async updateContact(where, contactDataToUpdate) {
    try {
      const toUpdateData = (0, _index.generateUpdateContactObject)(contactDataToUpdate);
      const updatedContact = await _Contact.default.update(toUpdateData, {
        where
      });
      this.contact = updatedContact;
    } catch (err) {
      (0, _logger.error)(err);
    }

    return this.contact;
  }

  async deleteContact(where) {
    try {
      const destroyedContact = await _Contact.default.destroy({
        where
      });
      this.contact = destroyedContact;
    } catch (err) {
      (0, _logger.error)(err);
    }

    return this.contact;
  }

  async getContact(where) {
    try {
      const contact = await _Contact.default.findOne({
        where
      });
      this.contact = contact.get();
    } catch (err) {
      (0, _logger.error)(err);
    }

    return this.contact;
  }

  async getContacts(where) {
    try {
      let contacts;

      if (!where) {
        console.log('entrou aqui');
        contacts = await _Contact.default.findAll({
          include: [{
            required: false,
            model: _ContactData.default,
            as: 'contact_data',
            attributes: ['contact_data', 'data_type', 'status']
          }]
        });
      } else {
        contacts = await _Contact.default.findAll({
          where
        });
      }

      const mapedContacts = contacts.map(contact => contact.get());
      this.contact = mapedContacts;
    } catch (err) {
      (0, _logger.error)(err);
    }

    return this.contact;
  } // Contact Data methods


  async createContactData(contactDataData) {
    try {
      const localNewContactData = await _ContactData.default.create(contactDataData);
      this.contactData = localNewContactData.get();
    } catch (err) {
      (0, _logger.error)(err);
    }

    return this.contactData;
  }

  async updateContactData(where, contactDataToUpdate) {
    try {
      const toUpdateData = (0, _index.generateUpdateContactDataObject)(contactDataToUpdate);
      const updatedContactData = await _ContactData.default.update(toUpdateData, {
        where
      });
      this.contactData = updatedContactData;
    } catch (err) {
      (0, _logger.error)(err);
    }

    return this.contactData;
  }

  async deleteContactData(where) {
    try {
      const destroyedContactData = await _ContactData.default.destroy({
        where
      });
      this.contactData = destroyedContactData;
    } catch (err) {
      (0, _logger.error)(err);
    }

    return this.contactData;
  }

  async getContactData(where) {
    try {
      const contactData = await _Contact.default.findOne({
        where
      });
      this.contactData = contactData.get();
    } catch (err) {
      (0, _logger.error)(err);
    }

    return this.contactData;
  }

  async getContactsData(where) {
    try {
      let contactsData;

      if (!where) {
        contactsData = await _Contact.default.findAll();
      } else {
        contactsData = await _Contact.default.findAll({
          where
        });
      }

      const mapedContactsData = contactsData.map(contactData => contactData.get);
      this.contactData = mapedContactsData;
    } catch (err) {
      (0, _logger.error)(err);
    }

    return this.contactData;
  } // MongoDB
  // Load Info methods


  async createLoadInfo(loadInfoData) {
    try {
      const newLoadInfo = new _LoadInfo.default(loadInfoData);
      this.loadInfo = await newLoadInfo.save();
    } catch (err) {
      (0, _logger.error)(err);
    }

    return this.loadInfo;
  }

  async updateLoadInfo(where, loadInfoDataToUpdate) {
    try {
      const toUpdateData = (0, _index.generateUpdateLoadInfoDataObject)(loadInfoDataToUpdate);
      const updatedLoadInfo = await _LoadInfo.default.findOneAndUpdate(where, toUpdateData, {
        runValidators: true
      });
      this.loadInfo = updatedLoadInfo;
    } catch (err) {
      (0, _logger.error)(err);
    }

    this.loadInfo;
  }

  async deleteLoadInfo(where) {
    try {
      const destroyedLoadInfo = await _LoadInfo.default.findOneAndDelete(where);
      this.loadInfo = destroyedLoadInfo;
    } catch (err) {
      (0, _logger.error)(err);
    }

    return this.loadInfo;
  }

  async getLoadInfo(where) {
    try {
      const loadInfo = await _LoadInfo.default.findOne(where);
      this.loadInfo = loadInfo;
    } catch (err) {
      (0, _logger.error)(err);
    }

    return this.loadInfo;
  }

  async getLoadInfosData(where) {
    try {
      let loadInfosData;

      if (!where) {
        loadInfosData = await _LoadInfo.default.find();
      } else {
        loadInfosData = await _LoadInfo.default.find(where);
      }

      this.loadInfo = loadInfosData;
    } catch (err) {
      (0, _logger.error)(err);
    }

    return this.loadInfo;
  } // Load Status methods


  async createLoadStatus(loadStatusData) {
    try {
      const newLoadStatus = new _LoadStatus.default(loadStatusData);
      this.loadStatus = await newLoadStatus.save();
    } catch (err) {
      (0, _logger.error)(err);
    }

    return this.loadStatus;
  }

  async updateLoadStatus(where, loadStatusDataToUpdate) {
    try {
      const toUpdateData = (0, _index.generateUpdateLoadStatusDataObject)(loadStatusDataToUpdate);
      const updatedLoadStatus = await _LoadInfo.default.findOneAndUpdate(where, toUpdateData, {
        runValidators: true
      });
      this.loadStatus = updatedLoadStatus;
    } catch (err) {
      (0, _logger.error)(err);
    }

    this.loadStatus;
  }

  async deleteLoadStatus(where) {
    try {
      const destroyedLoadStatus = await _LoadStatus.default.findOneAndDelete(where);
      this.loadStatus = destroyedLoadStatus;
    } catch (err) {
      (0, _logger.error)(err);
    }

    return this.loadStatus;
  }

  async getLoadStatus(where) {
    try {
      const loadStatus = await _LoadInfo.default.findOne(where);
      this.loadStatus = loadStatus;
    } catch (err) {
      (0, _logger.error)(err);
    }

    return this.loadStatus;
  }

  async getLoadStatuses(where) {
    try {
      let loadStatusesData;

      if (!where) {
        loadStatusesData = await _LoadInfo.default.find();
      } else {
        loadStatusesData = await _LoadInfo.default.find(where);
      }

      this.loadStatus = loadStatusesData;
    } catch (err) {
      (0, _logger.error)(err);
    }

    return this.loadStatus;
  } // Queue Contact methods


  async createQueueContact(queueContactData) {
    try {
      const newQueueContact = new _QueueContact.default(queueContactData);
      this.queueContact = await newQueueContact.save();
    } catch (err) {
      (0, _logger.error)(err);
    }

    return this.queueContact;
  }

  async updateQueueContact(where, queueContactDataToUpdate) {
    try {
      const toUpdateData = (0, _index.generateUpdateQueueContactDataObject)(queueContactDataToUpdate);
      const updatedQueueContact = await _QueueContact.default.findOneAndUpdate(where, toUpdateData, {
        runValidators: true
      });
      this.queueContact = updatedQueueContact;
    } catch (err) {
      (0, _logger.error)(err);
    }

    this.queueContact;
  }

  async deleteQueueContact(where) {
    try {
      const destroyedQueueContact = await _QueueContact.default.findOneAndDelete(where);
      this.queueContact = destroyedQueueContact;
    } catch (err) {
      (0, _logger.error)(err);
    }

    return this.queueContact;
  }

  async getQueueContact(where) {
    try {
      const queueContact = await _QueueContact.default.findOne(where);
      this.queueContact = queueContact;
    } catch (err) {
      (0, _logger.error)(err);
    }

    return this.queueContact;
  }

  async getQueueContacts(where) {
    try {
      let queueContactsData;

      if (!where) {
        queueContactsData = await _QueueContact.default.find();
      } else {
        queueContactsData = await _QueueContact.default.find(where);
      }

      this.queueContact = queueContactsData;
    } catch (err) {
      (0, _logger.error)(err);
    }

    return this.queueContact;
  }

}

exports.default = OrchyBase;