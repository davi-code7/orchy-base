import 'dotenv/config';
import './database';

import { WhereOptions } from 'sequelize/types';
import { error } from './utils/logger/logger';
import {
  generateUpdateQueueObject,
  generateUpdateLoadObject,
  generateUpdateContactObject,
  generateUpdateContactDataObject,
  generateUpdateLoadInfoDataObject,
  generateUpdateLoadStatusDataObject,
  generateUpdateQueueContactDataObject,
} from './utils/generators/index';
import { connectMongoDB } from './config/database/mongoDb/index';

import Queue from './models/postgres/Queue/Queue';
import Load from './models/postgres/Load/Load';
import ContactData from './models/postgres/ContactData/ContactData';
import Contact from './models/postgres/Contact/Contact';

import LoadInfo from './models/mongoDb/LoadInfo/LoadInfo';
import LoadStatus from './models/mongoDb/LoadStatus/LoadStatus';
import QueueContact from './models/mongoDb/QueueContact/QueueContact';

import {
  IQueueData,
  IQueueUpdateData,
  IQueueDestroyData,
  IQueueGetData,
  IQueueReturn,
  ILoadData,
  ILoadUpdateData,
  ILoadDestroyData,
  ILoadGetData,
  ILoadDataReturn,
  IContactData,
  IContactUpdateData,
  IContactDestroyData,
  IContactGetData,
  IContactDataReturn,
  IContactDataData,
  IContactDataUpdateData,
  IContactDataDestroyData,
  IContactDataGetData,
  IContactDataDataReturn,
  ILoadInfoData,
  ILoadInfoUpdateData,
  ILoadInfoDestroyData,
  ILoadInfoGetData,
  ILoadInfoDataReturn,
  ILoadStatusData,
  ILoadStatusUpdateData,
  ILoadStatusDestroyData,
  ILoadStatusGetData,
  ILoadStatusDataReturn,
  IQueueContactData,
  IQueueContactUpdateData,
  IQueueContactDestroyData,
  IQueueContactGetData,
  IQueueContactDataReturn,
} from './interfaces/index';
import { getConfigFileParsingDiagnostics } from 'typescript';

export default class OrchyBase {
  private queue: IQueueReturn | object | number | IQueueReturn[];
  private queues: IQueueReturn[];
  private load: ILoadDataReturn | object | number | ILoadDataReturn[];
  private contact: IContactDataReturn | object | number | IContactDataReturn[];
  private contactData:
    | IContactDataDataReturn
    | object
    | number
    | IContactDataDataReturn[];

  private loadInfo:
    | ILoadInfoDataReturn
    | object
    | ILoadInfoDataReturn
    | ILoadInfoDataReturn
    | ILoadInfoDataReturn[];
  private loadStatus:
    | ILoadStatusDataReturn
    | ILoadStatusUpdateData
    | object
    | ILoadStatusGetData[];
  private queueContact:
    | object
    | IQueueContactDataReturn
    | IQueueContactDataReturn[];

  constructor() {
    connectMongoDB();
  }

  // Postgres
  // Queue methods
  async createQueue(
    queueData: IQueueData,
  ): Promise<IQueueReturn | object | number | IQueueReturn[]> {
    try {
      const localNewQueue = await Queue.create(queueData);
      this.queue = localNewQueue.get();
    } catch (err) {
      error(err);
    }
    return this.queue;
  }

  async updateQueue(
    where: WhereOptions<IQueueUpdateData>,
    queueDataToUpdate: IQueueUpdateData,
  ): Promise<IQueueReturn | object | number | IQueueReturn[]> {
    try {
      const toUpdateData: IQueueUpdateData = generateUpdateQueueObject(
        queueDataToUpdate,
      );

      const updatedQueue = await Queue.update(toUpdateData, {
        where,
      });

      this.queue = updatedQueue;
    } catch (err) {
      error(err);
    }
    return this.queue;
  }

  async deleteQueue(
    where: WhereOptions<IQueueDestroyData>,
  ): Promise<IQueueReturn | object | number | IQueueReturn[]> {
    try {
      const destroyedQueue: number = await Queue.destroy({
        where,
      });

      this.queue = destroyedQueue;
    } catch (err) {
      error(err);
    }

    return this.queue;
  }

  async getQueue(
    where: WhereOptions<IQueueGetData>,
  ): Promise<IQueueReturn | object | number | IQueueReturn[]> {
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
    where?: WhereOptions<IQueueGetData>,
  ): Promise<IQueueReturn[]> {
    try {
      let queues: any;

      if (!where) {
        queues = await Queue.findAll({ include: { association: 'load' } });
      } else {
        queues = await Queue.findAll({
          where,
          include: { association: 'load' },
        });
      }

      let mapedQueues: IQueueReturn[] = [];

      if (limit) {
        if (limit <= queues.length) {
          for (let i = 0; i < limit; i += 1) {
            mapedQueues.push({
              ...queues[i].get(),
              load: queues[i].get().load.get(),
            });
          }
        } else {
          throw Error('The number of entries is less than the set limit.');
        }
      } else {
        mapedQueues = queues.map((queue) => ({
          ...queue.get(),
          load: queue.get().load.get(),
        }));
      }

      this.queues = mapedQueues;
    } catch (err) {
      error(err);
    }

    return this.queues;
  }

  // Load methods
  async createLoad(
    loadData: ILoadData,
  ): Promise<ILoadDataReturn | object | number | ILoadDataReturn[]> {
    try {
      const localNewLoad = await Load.create(loadData);
      this.load = localNewLoad.get();
    } catch (err) {
      error(err);
    }
    return this.load;
  }

  async updateLoad(
    where: WhereOptions<ILoadUpdateData>,
    loadDataToUpdate: ILoadUpdateData,
  ): Promise<ILoadDataReturn | object | number | ILoadDataReturn[]> {
    try {
      const toUpdateData: ILoadUpdateData = generateUpdateLoadObject(
        loadDataToUpdate,
      );

      const updatedLoad: object = await Load.update(toUpdateData, {
        where,
      });

      this.load = updatedLoad;
    } catch (err) {
      error(err);
    }
    return this.load;
  }

  async deleteLoad(
    where: WhereOptions<ILoadDestroyData>,
  ): Promise<ILoadDataReturn | object | number | ILoadDataReturn[]> {
    try {
      const destroyedLoad: number = await Load.destroy({
        where,
      });

      this.load = destroyedLoad;
    } catch (err) {
      error(err);
    }

    return this.load;
  }

  async getLoad(
    where: WhereOptions<ILoadGetData>,
  ): Promise<ILoadDataReturn | object | number | ILoadDataReturn[]> {
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
    where?: WhereOptions<ILoadGetData>,
  ): Promise<ILoadDataReturn | object | number | ILoadDataReturn[]> {
    try {
      let loads: any;

      if (!where) {
        loads = await Load.findAll();
      } else {
        loads = await Load.findAll({
          where,
        });
      }

      let mapedLoads: ILoadDataReturn[] = [];

      if (limit) {
        if (limit <= loads.length) {
          for (let i = 0; i < limit; i += 1) {
            mapedLoads.push({
              ...loads[i].get(),
            });
          }
        } else {
          throw Error('The number of entries is less than the set limit.');
        }
      } else {
        mapedLoads = loads.map((load) => ({
          ...load.get(),
        }));
      }

      this.load = mapedLoads;
    } catch (err) {
      error(err);
    }

    return this.load;
  }

  // Contact methods
  async createContact(
    contactData: IContactData,
  ): Promise<IContactDataReturn | object | number | IContactDataReturn[]> {
    try {
      const localNewContact = await Contact.create(contactData);
      this.contact = localNewContact.get();
    } catch (err) {
      error(err);
    }
    return this.contact;
  }

  async updateContact(
    where: WhereOptions<IContactUpdateData>,
    contactDataToUpdate: IContactUpdateData,
  ): Promise<IContactDataReturn | object | number | IContactDataReturn[]> {
    try {
      const toUpdateData: IContactUpdateData = generateUpdateContactObject(
        contactDataToUpdate,
      );

      const updatedContact: object = await Contact.update(toUpdateData, {
        where,
      });

      this.contact = updatedContact;
    } catch (err) {
      error(err);
    }
    return this.contact;
  }

  async deleteContact(
    where: WhereOptions<IContactDestroyData>,
  ): Promise<IContactDataReturn | object | number | IContactDataReturn[]> {
    try {
      const destroyedContact: number = await Contact.destroy({
        where,
      });

      this.contact = destroyedContact;
    } catch (err) {
      error(err);
    }

    return this.contact;
  }

  async getContact(
    where: WhereOptions<IContactGetData>,
  ): Promise<IContactDataReturn | object | number | IContactDataReturn[]> {
    try {
      const contact = await Contact.findOne({
        where,
        include: [
          {
            required: false,
            model: ContactData,
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
  ): Promise<IContactDataReturn | object | number | IContactDataReturn[]> {
    try {
      let contacts: any;

      if (!where) {
        contacts = await Contact.findAll({
          include: [
            {
              required: false,
              model: ContactData,
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
              model: ContactData,
              as: 'contact_data',
              attributes: ['contact_data', 'data_type', 'status'],
            },
            { association: 'load' },
          ],
        });
      }

      let mapedContacts: IContactDataReturn[] = [];

      if (limit) {
        if (limit <= contacts.length) {
          for (let i = 0; i < limit; i += 1) {
            const mapedContactData = contacts[i].contact_data.map(
              (contactData) => ({
                ...contactData.get(),
              }),
            );
            mapedContacts.push({
              ...contacts[i].get(),
              contact_data: mapedContactData,
              load: contacts[i].get().load.get(),
            });
          }
        } else {
          throw Error('The number of entries is less than the set limit.');
        }
      } else {
        mapedContacts = contacts.map((contact) => {
          const mapedContactData = contact.contact_data.map((contactData) => ({
            ...contactData.get(),
          }));

          return {
            ...contact.get(),
            contact_data: mapedContactData,
            load: contact.get().load.get(),
          };
        });
      }

      this.contact = mapedContacts;
    } catch (err) {
      error(err);
    }

    return this.contact;
  }

  // Contact Data methods
  async createContactData(
    contactDataData: IContactDataData,
  ): Promise<
    IContactDataDataReturn | object | number | IContactDataDataReturn[]
  > {
    try {
      const localNewContactData = await ContactData.create(contactDataData);
      this.contactData = localNewContactData.get();
    } catch (err) {
      error(err);
    }
    return this.contactData;
  }

  async updateContactData(
    where: WhereOptions<IContactDataUpdateData>,
    contactDataToUpdate: IContactDataUpdateData,
  ): Promise<
    IContactDataDataReturn | object | number | IContactDataDataReturn[]
  > {
    try {
      const toUpdateData: IContactDataUpdateData = generateUpdateContactDataObject(
        contactDataToUpdate,
      );

      const updatedContactData: object = await ContactData.update(
        toUpdateData,
        {
          where,
        },
      );

      this.contactData = updatedContactData;
    } catch (err) {
      error(err);
    }
    return this.contactData;
  }

  async deleteContactData(
    where: WhereOptions<IContactDataDestroyData>,
  ): Promise<
    IContactDataDataReturn | object | number | IContactDataDataReturn[]
  > {
    try {
      const destroyedContactData: number = await ContactData.destroy({
        where,
      });

      this.contactData = destroyedContactData;
    } catch (err) {
      error(err);
    }

    return this.contactData;
  }

  async getContactData(
    where: WhereOptions<IContactDataGetData>,
  ): Promise<
    IContactDataDataReturn | object | number | IContactDataDataReturn[]
  > {
    try {
      const contactData = await Contact.findOne({
        where,
      });

      this.contactData = contactData.get();
    } catch (err) {
      error(err);
    }

    return this.contactData;
  }

  async getContactsData(
    limit: number | null,
    where?: WhereOptions<IContactDataGetData>,
  ): Promise<
    IContactDataDataReturn | object | number | IContactDataDataReturn[]
  > {
    try {
      let contactsData: any;

      if (!where) {
        contactsData = await Contact.findAll();
      } else {
        contactsData = await Contact.findAll({
          where,
        });
      }

      let mapedContactsData: IContactDataDataReturn[] = [];

      if (limit) {
        if (limit <= contactsData.length) {
          for (let i = 0; i < limit; i += 1) {
            mapedContactsData.push({
              ...contactsData[i].get(),
            });
          }
        } else {
          throw Error('The number of entries is less than the set limit.');
        }
      } else {
        mapedContactsData = contactsData.map((contactData) => ({
          ...contactData.get(),
        }));
      }

      this.contactData = mapedContactsData;
    } catch (err) {
      error(err);
    }

    return this.contactData;
  }

  // MongoDB
  // Load Info methods
  async createLoadInfo(
    loadInfoData: ILoadInfoData,
  ): Promise<
    | ILoadInfoDataReturn
    | object
    | ILoadInfoDataReturn
    | ILoadInfoDataReturn
    | ILoadInfoDataReturn[]
  > {
    try {
      const newLoadInfo = new LoadInfo(loadInfoData);

      this.loadInfo = await newLoadInfo.save();
    } catch (err) {
      error(err);
    }
    return this.loadInfo;
  }

  async updateLoadInfo(
    where: ILoadInfoUpdateData,
    loadInfoDataToUpdate: ILoadInfoUpdateData,
  ): Promise<any> {
    try {
      const toUpdateData: ILoadInfoUpdateData = generateUpdateLoadInfoDataObject(
        loadInfoDataToUpdate,
      );

      const updatedLoadInfo: any = await LoadInfo.findOneAndUpdate(
        where,
        toUpdateData,
        { runValidators: true },
      );

      this.loadInfo = updatedLoadInfo;
    } catch (err) {
      error(err);
    }

    this.loadInfo;
  }

  async deleteLoadInfo(
    where: ILoadInfoDestroyData,
  ): Promise<
    | ILoadInfoDataReturn
    | object
    | ILoadInfoDataReturn
    | ILoadInfoDataReturn
    | ILoadInfoDataReturn[]
  > {
    try {
      const destroyedLoadInfo: ILoadInfoDestroyData = await LoadInfo.findOneAndDelete(
        where,
      );

      this.loadInfo = destroyedLoadInfo;
    } catch (err) {
      error(err);
    }

    return this.loadInfo;
  }

  async getLoadInfo(
    where: ILoadInfoGetData,
  ): Promise<
    | ILoadInfoDataReturn
    | object
    | ILoadInfoDataReturn
    | ILoadInfoDataReturn
    | ILoadInfoDataReturn[]
  > {
    try {
      const loadInfo = await LoadInfo.findOne(where);

      this.loadInfo = loadInfo;
    } catch (err) {
      error(err);
    }

    return this.loadInfo;
  }

  async getLoadInfosData(
    limit: number | null,
    where?: ILoadInfoGetData,
  ): Promise<
    | ILoadInfoDataReturn
    | object
    | ILoadInfoDataReturn
    | ILoadInfoDataReturn
    | ILoadInfoDataReturn[]
  > {
    try {
      let loadInfosData: any;

      if (limit) {
        if (!where) {
          loadInfosData = await LoadInfo.find().limit(limit);
        } else {
          loadInfosData = await LoadInfo.find(where).limit(limit);
        }
      } else {
        if (!where) {
          loadInfosData = await LoadInfo.find();
        } else {
          loadInfosData = await LoadInfo.find(where);
        }
      }

      this.loadInfo = loadInfosData;
    } catch (err) {
      error(err);
    }

    return this.loadInfo;
  }

  // Load Status methods
  async createLoadStatus(
    loadStatusData: ILoadStatusData,
  ): Promise<
    ILoadStatusDataReturn | ILoadStatusUpdateData | ILoadStatusGetData[]
  > {
    try {
      const newLoadStatus = new LoadStatus(loadStatusData);
      this.loadStatus = await newLoadStatus.save();
    } catch (err) {
      error(err);
    }
    return this.loadStatus;
  }

  async updateLoadStatus(
    where: ILoadStatusUpdateData,
    loadStatusDataToUpdate: ILoadStatusUpdateData,
  ): Promise<any> {
    try {
      const toUpdateData: ILoadStatusUpdateData = generateUpdateLoadStatusDataObject(
        loadStatusDataToUpdate,
      );

      const updatedLoadStatus: any = await LoadInfo.findOneAndUpdate(
        where,
        toUpdateData,
        { runValidators: true },
      );

      this.loadStatus = updatedLoadStatus;
    } catch (err) {
      error(err);
    }

    this.loadStatus;
  }

  async deleteLoadStatus(
    where: ILoadStatusDestroyData,
  ): Promise<
    ILoadStatusDataReturn | ILoadStatusUpdateData | ILoadStatusGetData[]
  > {
    try {
      const destroyedLoadStatus: ILoadStatusDestroyData = await LoadStatus.findOneAndDelete(
        where,
      );

      this.loadStatus = destroyedLoadStatus;
    } catch (err) {
      error(err);
    }

    return this.loadStatus;
  }

  async getLoadStatus(where: ILoadInfoData): Promise<object> {
    try {
      const loadStatus = await LoadInfo.findOne(where);

      this.loadStatus = loadStatus;
    } catch (err) {
      error(err);
    }

    return this.loadStatus;
  }

  async getLoadStatuses(
    limit: number | null,
    where?: ILoadStatusGetData,
  ): Promise<
    ILoadStatusDataReturn | ILoadStatusUpdateData | ILoadStatusGetData[]
  > {
    try {
      let loadStatusesData: any;

      if (limit) {
        if (!where) {
          loadStatusesData = await LoadInfo.find().limit(limit);
        } else {
          loadStatusesData = await LoadInfo.find(where).limit(limit);
        }
      } else {
        if (!where) {
          loadStatusesData = await LoadInfo.find();
        } else {
          loadStatusesData = await LoadInfo.find(where);
        }
      }

      this.loadStatus = loadStatusesData;
    } catch (err) {
      error(err);
    }

    return this.loadStatus;
  }

  // Queue Contact methods
  async createQueueContact(
    queueContactData: IQueueContactData,
  ): Promise<object | IQueueContactDataReturn | IQueueContactDataReturn[]> {
    try {
      const newQueueContact = new QueueContact(queueContactData);
      this.queueContact = await newQueueContact.save();
    } catch (err) {
      error(err);
    }
    return this.queueContact;
  }

  async updateQueueContact(
    where: IQueueContactUpdateData,
    queueContactDataToUpdate: IQueueContactUpdateData,
  ): Promise<any> {
    try {
      const toUpdateData: IQueueContactUpdateData = generateUpdateQueueContactDataObject(
        queueContactDataToUpdate,
      );

      const updatedQueueContact: any = await QueueContact.findOneAndUpdate(
        where,
        toUpdateData,
        { runValidators: true },
      );

      this.queueContact = updatedQueueContact;
    } catch (err) {
      error(err);
    }

    this.queueContact;
  }

  async deleteQueueContact(
    where: IQueueContactDestroyData,
  ): Promise<object | IQueueContactDataReturn | IQueueContactDataReturn[]> {
    try {
      const destroyedQueueContact: IQueueContactDestroyData = await QueueContact.findOneAndDelete(
        where,
      );

      this.queueContact = destroyedQueueContact;
    } catch (err) {
      error(err);
    }

    return this.queueContact;
  }

  async getQueueContact(
    where: IQueueContactGetData,
  ): Promise<object | IQueueContactDataReturn | IQueueContactDataReturn[]> {
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
    where?: IQueueContactGetData,
  ): Promise<object | IQueueContactDataReturn | IQueueContactDataReturn[]> {
    try {
      let queueContactsData: any;

      if (limit) {
        if (!where) {
          queueContactsData = await QueueContact.find().limit(limit);
        } else {
          queueContactsData = await QueueContact.find(where).limit(limit);
        }
      } else {
        if (!where) {
          queueContactsData = await QueueContact.find();
        } else {
          queueContactsData = await QueueContact.find(where);
        }
      }

      this.queueContact = queueContactsData;
    } catch (err) {
      error(err);
    }

    return this.queueContact;
  }
}
