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
  ILoadStatusDataReturn,
  IQueueContactData,
  IQueueContactDataReturn,
} from './interfaces/index';

export default class OrchyBase {
  private queue: IQueueReturn | object | number | IQueueReturn[];
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
  private loadStatus: ILoadStatusDataReturn;
  private queueContact: IQueueContactDataReturn;

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
      });

      this.queue = queue.get();
    } catch (err) {
      error(err);
    }

    return this.queue;
  }

  async getQueues(
    where?: WhereOptions<IQueueGetData>,
  ): Promise<IQueueReturn | object | number | IQueueReturn[]> {
    try {
      let queues: any;

      if (!where) {
        queues = await Queue.findAll();
      } else {
        queues = await Queue.findAll({
          where,
        });
      }

      const mapedQueues = queues.map((queue) => queue.get());

      this.queue = mapedQueues;
    } catch (err) {
      error(err);
    }

    return this.queue;
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

      const mapedLoads = loads.map((load) => load.get());

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
      });

      this.contact = contact.get();
    } catch (err) {
      error(err);
    }

    return this.contact;
  }

  async getContacts(
    where?: WhereOptions<IContactGetData>,
  ): Promise<ILoadDataReturn | object | number | ILoadDataReturn[]> {
    try {
      let contacts: any;

      if (!where) {
        contacts = await Contact.findAll();
      } else {
        contacts = await Contact.findAll({
          where,
        });
      }

      const mapedContacts = contacts.map((contact) => contact.get());

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

      const mapedContactsData = contactsData.map(
        (contactData) => contactData.get,
      );

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

      console.log('updatedLoadInfo:', updatedLoadInfo);

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
    where?: IContactDataGetData,
  ): Promise<
    | ILoadInfoDataReturn
    | object
    | ILoadInfoDataReturn
    | ILoadInfoDataReturn
    | ILoadInfoDataReturn[]
  > {
    try {
      let loadInfosData: any;

      if (!where) {
        loadInfosData = await LoadInfo.find();
      } else {
        loadInfosData = await LoadInfo.find(where);
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
  ): Promise<ILoadStatusDataReturn> {
    try {
      const newLoadStatus = new LoadStatus(loadStatusData);
      this.loadStatus = await newLoadStatus.save();
    } catch (err) {
      error(err);
    }
    return this.loadStatus;
  }

  // Queue Contact methods
  async createQueueContact(
    queueContactData: IQueueContactData,
  ): Promise<IQueueContactDataReturn> {
    try {
      const newQueueContact = new QueueContact(queueContactData);
      this.queueContact = await newQueueContact.save();
    } catch (err) {
      error(err);
    }
    return this.queueContact;
  }
}

const orchybase = new OrchyBase();

async function test(num) {
  orchybase.updateLoadInfo({ updated_at: null }, { updated_at: Date.now() });
}

for (let i = 0; i < 200; i += 1) {
  test(i);
}
