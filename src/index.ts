import 'dotenv/config';
import './database';

import { WhereOptions } from 'sequelize/types';
import { FilterQuery } from 'mongoose';
import { error } from './utils/logger/logger';

import { connectMongoDB } from './config/database/mongoDb/index';

import Queue from './models/postgres/Queue/Queue';
import Load from './models/postgres/Load/Load';
import Contact from './models/postgres/Contact/Contact';

import LoadInfo from './models/mongoDb/LoadInfo/LoadInfo';
import LoadStatus from './models/mongoDb/LoadStatus/LoadStatus';
import QueueContact from './models/mongoDb/QueueContact/QueueContact';

import {
  ICreateQueue,
  IUpdateQueue,
  IDeleteQueue,
  IGetQueue,
  IQueueReturn,
  ICreateLoad,
  IUpdateLoad,
  IDeleteLoad,
  IGetLoad,
  ILoadReturn,
  ICreateContact,
  IUpdateContact,
  IDeleteContact,
  IContactGetData,
  IContactReturn,
  ICreateLoadInfo,
  IUpdateLoadInfo,
  IDeleteLoadInfo,
  IGetLoadInfo,
  ICreateLoadStatus,
  IUpdateLoadStatus,
  IDeleteLoadStatus,
  IGetLoadStatus,
  ICreateQueueContact,
  IUpdateQueueContact,
  IDeleteQueueContact,
  IGetQueueContact,
} from './interfaces/index';

export default class OrchyBase {
  private queue: ICreateQueue;
  private updatedQueues: object;
  private deletedQueues: number;
  private queues: IQueueReturn[];

  private load: ICreateLoad;
  private updatedLoads: object;
  private deletedLoads: number;
  private loads: ILoadReturn[];

  private contact: ICreateContact;
  private updatedContacts: object;
  private deletedContacts: number;
  private contacts: IContactReturn[];

  private loadInfo: ICreateLoadInfo;
  private updatedLoadInfo: IUpdateLoadInfo | null;
  private deletedLoadInfo: IDeleteLoadInfo | null;
  private loadInfos: IGetLoadInfo[];

  private loadStatus: ICreateLoadStatus;
  private updatedLoadStatus: IUpdateLoadStatus | null;
  private deletedLoadStatus: IDeleteLoadStatus | null;
  private loadStatuses: IGetLoadStatus[];

  private queueContact: ICreateQueueContact;
  private updatedQueueContact: IUpdateQueueContact | null;
  private deletedQueueContact: IDeleteQueueContact | null;
  private queueContacts: IGetQueueContact[];

  constructor() {
    connectMongoDB();
  }

  // Postgres
  // Queue methods
  async createQueue(queueData: ICreateQueue): Promise<ICreateQueue> {
    try {
      const localNewQueue = await Queue.create(queueData);
      this.queue = localNewQueue.get();
    } catch (err) {
      error(err);
    }
    return this.queue;
  }

  async updateQueue(
    where: WhereOptions<IUpdateQueue>,
    queueDataToUpdate: IUpdateQueue,
  ): Promise<object> {
    try {
      const updatedQueue = await Queue.update(queueDataToUpdate, {
        where,
      });

      this.updatedQueues = updatedQueue;
    } catch (err) {
      error(err);
    }
    return this.updatedQueues;
  }

  async deleteQueue(where: WhereOptions<IDeleteQueue>): Promise<number> {
    try {
      const destroyedQueue: number = await Queue.destroy({
        where,
      });

      this.deletedQueues = destroyedQueue;
    } catch (err) {
      error(err);
    }

    return this.deletedQueues;
  }

  async getQueue(where: WhereOptions<IGetQueue>): Promise<ICreateQueue> {
    try {
      const queue = await Queue.findOne({
        where,
        include: { association: 'load' },
      });

      this.queue = { ...queue.get(), load: queue.get().load.get() };
    } catch (err) {
      error(err);
    }

    return this.queue;
  }

  async getQueues(
    limit: number | null,
    where?: WhereOptions<IGetQueue>,
  ): Promise<IQueueReturn[]> {
    try {
      console.log('where:', where);
      let queues: any;

      if (!where) {
        if (limit) {
          queues = await Queue.findAll({
            include: { association: 'load' },
            limit,
          });
        } else {
          queues = await Queue.findAll({
            include: { association: 'load' },
          });
        }
      } else if (limit) {
        queues = await Queue.findAll({
          where,
          include: { association: 'load' },
          limit,
        });
      } else {
        queues = await Queue.findAll({
          where,
          include: { association: 'load' },
        });
      }

      const mapedQueues: IQueueReturn[] = queues.map((queue) => ({
        ...queue.get(),
        load: queue.get().load.get(),
      }));

      this.queues = mapedQueues;
    } catch (err) {
      error(err);
    }

    return this.queues;
  }

  // Load methods
  async createLoad(loadData: ICreateLoad): Promise<ICreateLoad> {
    try {
      const localNewLoad = await Load.create(loadData);
      this.load = localNewLoad.get();
    } catch (err) {
      error(err);
    }
    return this.load;
  }

  async updateLoad(
    where: WhereOptions<IUpdateLoad>,
    loadDataToUpdate: IUpdateLoad,
  ): Promise<object> {
    try {
      const updatedLoad: object = await Load.update(loadDataToUpdate, {
        where,
      });

      this.updatedLoads = updatedLoad;
    } catch (err) {
      error(err);
    }
    return this.updatedLoads;
  }

  async deleteLoad(where: WhereOptions<IDeleteLoad>): Promise<number> {
    try {
      const destroyedLoad: number = await Load.destroy({
        where,
      });

      this.deletedLoads = destroyedLoad;
    } catch (err) {
      error(err);
    }

    return this.deletedLoads;
  }

  async getLoad(where: WhereOptions<IGetLoad>): Promise<ICreateLoad> {
    try {
      const load = await Load.findOne({
        where,
      });

      this.load = load.get();
    } catch (err) {
      error(err);
    }

    return this.load;
  }

  async getLoads(
    limit: number | null,
    where?: WhereOptions<IGetLoad>,
  ): Promise<ILoadReturn[]> {
    try {
      let loads: any;

      if (!where) {
        if (limit) {
          loads = await Load.findAll({ limit });
        } else {
          loads = await Load.findAll();
        }
      } else if (limit) {
        loads = await Load.findAll({
          where,
          limit,
        });
      } else {
        loads = await Load.findAll({
          where,
        });
      }

      const mapedLoads: ILoadReturn[] = loads.map((load) => ({
        ...load.get(),
      }));

      this.loads = mapedLoads;
    } catch (err) {
      error(err);
    }

    return this.loads;
  }

  // Contact Complement methods

  // Contact Email methods

  // Contact Phone methods

  // Contact methods
  async createContact(contactData: ICreateContact): Promise<ICreateContact> {
    try {
      const localNewContact = await Contact.create(contactData);
      this.contact = localNewContact.get();
    } catch (err) {
      error(err);
    }
    return this.contact;
  }

  async updateContact(
    where: WhereOptions<IUpdateContact>,
    contactDataToUpdate: IUpdateContact,
  ): Promise<object> {
    try {
      const updatedContact: object = await Contact.update(contactDataToUpdate, {
        where,
      });

      this.updatedContacts = updatedContact;
    } catch (err) {
      error(err);
    }
    return this.updatedContacts;
  }

  async deleteContact(where: WhereOptions<IDeleteContact>): Promise<number> {
    try {
      const destroyedContact: number = await Contact.destroy({
        where,
      });

      this.deletedContacts = destroyedContact;
    } catch (err) {
      error(err);
    }

    return this.deletedContacts;
  }

  async getContact(
    where: WhereOptions<IContactGetData>,
  ): Promise<ICreateContact> {
    try {
      const contact = await Contact.findOne({
        where,
        include: [
          {
            required: false,
            model: Contact,
            as: 'contact_data',
            attributes: ['contact_data', 'data_type', 'status'],
          },
          { association: 'load' },
        ],
      });

      this.contact = contact.get();
    } catch (err) {
      error(err);
    }

    return this.contact;
  }

  async getContacts(
    limit: number | null,
    where?: WhereOptions<IContactGetData>,
  ): Promise<IContactReturn[]> {
    try {
      let contacts: any;

      if (!where) {
        if (limit) {
          contacts = await Contact.findAll({
            limit,
            include: [
              {
                required: false,
                model: Contact,
                as: 'contact_data',
                attributes: ['contact_data', 'data_type', 'status'],
              },
              { association: 'load' },
            ],
          });
        } else {
          contacts = await Contact.findAll({
            include: [
              {
                required: false,
                model: Contact,
                as: 'contact_data',
                attributes: ['contact_data', 'data_type', 'status'],
              },
              { association: 'load' },
            ],
          });
        }
      } else if (limit) {
        contacts = await Contact.findAll({
          where,
          limit,
          include: [
            {
              required: false,
              model: Contact,
              as: 'contact_data',
              attributes: ['contact_data', 'data_type', 'status'],
            },
            { association: 'load' },
          ],
        });
      } else {
        contacts = await Contact.findAll({
          where,
          include: [
            {
              required: false,
              model: Contact,
              as: 'contact_data',
              attributes: ['contact_data', 'data_type', 'status'],
            },
            { association: 'load' },
          ],
        });
      }

      const mapedContacts: IContactReturn[] = contacts.map((contact) => {
        const mapedContactData = contact.contact_data.map((contactData) => ({
          ...contactData.get(),
        }));

        return {
          ...contact.get(),
          contact_data: mapedContactData,
          load: contact.get().load.get(),
        };
      });

      this.contacts = mapedContacts;
    } catch (err) {
      error(err);
    }

    return this.contacts;
  }

  // MongoDB
  // Load Info methods
  async createLoadInfo(
    loadInfoData: ICreateLoadInfo,
  ): Promise<ICreateLoadInfo> {
    try {
      const newLoadInfo = new LoadInfo(loadInfoData);

      this.loadInfo = await newLoadInfo.save();
    } catch (err) {
      error(err);
    }
    return this.loadInfo;
  }

  async updateLoadInfo(
    where: FilterQuery<IUpdateLoadInfo>,
    loadInfoDataToUpdate: IUpdateLoadInfo,
  ): Promise<IUpdateLoadInfo | null> {
    try {
      const updatedLoadInfo: IUpdateLoadInfo = await LoadInfo.findOneAndUpdate(
        where,
        loadInfoDataToUpdate,
        { runValidators: true },
      );

      this.updatedLoadInfo = updatedLoadInfo;
    } catch (err) {
      error(err);
    }

    return this.updatedLoadInfo;
  }

  async deleteLoadInfo(
    where: FilterQuery<IDeleteLoadInfo>,
  ): Promise<IDeleteLoadInfo | null> {
    try {
      const deletedLoadInfo: IDeleteLoadInfo = await LoadInfo.findOneAndDelete(
        where,
      );

      this.deletedLoadInfo = deletedLoadInfo;
    } catch (err) {
      error(err);
    }

    return this.deletedLoadInfo;
  }

  async getLoadInfo(where: IGetLoadInfo): Promise<IGetLoadInfo> {
    try {
      const loadInfo: IGetLoadInfo = await LoadInfo.findOne(where);

      this.loadInfo = loadInfo;
    } catch (err) {
      error(err);
    }

    return this.loadInfo;
  }

  async getLoadInfosData(
    limit: number | null,
    where?: IGetLoadInfo,
  ): Promise<IGetLoadInfo[]> {
    try {
      let loadInfosData: IGetLoadInfo[];

      if (limit) {
        if (!where) {
          loadInfosData = await LoadInfo.find().limit(limit);
        } else {
          loadInfosData = await LoadInfo.find(where).limit(limit);
        }
      } else if (!where) {
        loadInfosData = await LoadInfo.find();
      } else {
        loadInfosData = await LoadInfo.find(where);
      }

      this.loadInfos = loadInfosData;
    } catch (err) {
      error(err);
    }

    return this.loadInfos;
  }

  // Load Status methods
  async createLoadStatus(
    loadStatusData: ICreateLoadStatus,
  ): Promise<ICreateLoadStatus> {
    try {
      const newLoadStatus = new LoadStatus(loadStatusData);

      this.loadStatus = await newLoadStatus.save();
    } catch (err) {
      error(err);
    }
    return this.loadStatus;
  }

  async updateLoadStatus(
    where: FilterQuery<IUpdateLoadStatus>,
    loadStatusDataToUpdate: IUpdateLoadStatus,
  ): Promise<IUpdateLoadStatus | null> {
    try {
      const updatedLoadStatus: IUpdateLoadStatus = await LoadInfo.findOneAndUpdate(
        where,
        loadStatusDataToUpdate,
        { runValidators: true },
      );

      this.updatedLoadStatus = updatedLoadStatus;
    } catch (err) {
      error(err);
    }

    return this.updatedLoadStatus;
  }

  async deleteLoadStatus(
    where: FilterQuery<IDeleteLoadStatus>,
  ): Promise<IDeleteLoadStatus | null> {
    try {
      const destroyedLoadStatus: IDeleteLoadStatus = await LoadStatus.findOneAndDelete(
        where,
      );

      this.deletedLoadStatus = destroyedLoadStatus;
    } catch (err) {
      error(err);
    }

    return this.deletedLoadStatus;
  }

  async getLoadStatus(
    where: FilterQuery<IGetLoadStatus>,
  ): Promise<IGetLoadStatus> {
    try {
      const loadStatus: IGetLoadStatus = await LoadInfo.findOne(where);

      this.loadStatus = loadStatus;
    } catch (err) {
      error(err);
    }

    return this.loadStatus;
  }

  async getLoadStatuses(
    limit: number | null,
    where?: FilterQuery<IGetLoadStatus>,
  ): Promise<IGetLoadStatus[] | null> {
    try {
      let loadStatusesData: any;

      if (limit) {
        if (!where) {
          loadStatusesData = await LoadInfo.find().limit(limit);
        } else {
          loadStatusesData = await LoadInfo.find(where).limit(limit);
        }
      } else if (!where) {
        loadStatusesData = await LoadInfo.find();
      } else {
        loadStatusesData = await LoadInfo.find(where);
      }

      this.loadStatus = loadStatusesData;
    } catch (err) {
      error(err);
    }

    return this.loadStatuses;
  }

  // Queue Contact methods
  async createQueueContact(
    queueContactData: ICreateQueueContact,
  ): Promise<ICreateQueueContact> {
    try {
      const newQueueContact = new QueueContact(queueContactData);

      this.queueContact = await newQueueContact.save();
    } catch (err) {
      error(err);
    }
    return this.queueContact;
  }

  async updateQueueContact(
    where: FilterQuery<IUpdateQueueContact>,
    queueContactDataToUpdate: IUpdateQueueContact,
  ): Promise<IUpdateQueueContact> {
    try {
      const updatedQueueContact: IUpdateQueueContact = await QueueContact.findOneAndUpdate(
        where,
        queueContactDataToUpdate,
        { runValidators: true },
      );

      this.updatedQueueContact = updatedQueueContact;
    } catch (err) {
      error(err);
    }

    return this.updatedQueueContact;
  }

  async deleteQueueContact(
    where: FilterQuery<IDeleteQueueContact>,
  ): Promise<IDeleteQueueContact> {
    try {
      const destroyedQueueContact: IDeleteQueueContact = await QueueContact.findOneAndDelete(
        where,
      );

      this.deletedQueueContact = destroyedQueueContact;
    } catch (err) {
      error(err);
    }

    return this.deletedQueueContact;
  }

  async getQueueContact(
    where: ICreateQueueContact,
  ): Promise<ICreateQueueContact> {
    try {
      const queueContact = await QueueContact.findOne(where);

      this.queueContact = queueContact;
    } catch (err) {
      error(err);
    }

    return this.queueContact;
  }

  async getQueueContacts(
    limit: number | null,
    where?: FilterQuery<IGetQueueContact>,
  ): Promise<IGetQueueContact[]> {
    try {
      let queueContactsData: any;

      if (limit) {
        if (!where) {
          queueContactsData = await QueueContact.find().limit(limit);
        } else {
          queueContactsData = await QueueContact.find(where).limit(limit);
        }
      } else if (!where) {
        queueContactsData = await QueueContact.find();
      } else {
        queueContactsData = await QueueContact.find(where);
      }

      this.queueContacts = queueContactsData;
    } catch (err) {
      error(err);
    }

    return this.queueContacts;
  }
}
