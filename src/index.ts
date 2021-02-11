import 'dotenv/config';
import './database';

import { WhereOptions } from 'sequelize/types';
import { error } from './utils/logger/logger';
import { generateUpdateQueueObject } from './utils/generators/index';
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
  ILoadDataReturn,
  IContactData,
  IContactDataReturn,
  IContactDataData,
  IContactDataDataReturn,
  ILoadInfoData,
  ILoadInfoDataReturn,
  ILoadStatusData,
  ILoadStatusDataReturn,
  IQueueContactData,
  IQueueContactDataReturn,
} from './interfaces/index';

export default class OrchyBase {
  private queue: IQueueReturn | object | number | IQueueReturn[];
  private load: ILoadDataReturn;
  private contact: IContactDataReturn;
  private contactData: IContactDataDataReturn;

  private loadInfo: ILoadInfoDataReturn;
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
      const destroyedQueue = await Queue.destroy({
        where,
      });

      this.queue = destroyedQueue;
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

  // Load methods
  async createLoad(loadData: ILoadData): Promise<ILoadDataReturn> {
    try {
      const localNewLoad = await Load.create(loadData);
      this.load = localNewLoad.get();
    } catch (err) {
      error(err);
    }
    return this.load;
  }

  // Contact methods
  async createContact(contactData: IContactData): Promise<IContactDataReturn> {
    try {
      const localNewContact = await Contact.create(contactData);
      this.contact = localNewContact.get();
    } catch (err) {
      error(err);
    }
    return this.contact;
  }

  // Contact Data methods
  async createContactData(
    contactDataData: IContactDataData,
  ): Promise<IContactDataDataReturn> {
    try {
      const localNewContactData = await ContactData.create(contactDataData);
      this.contactData = localNewContactData.get();
    } catch (err) {
      error(err);
    }
    return this.contactData;
  }

  // MongoDB
  // Load Info methods
  async createLoadInfo(
    loadInfoData: ILoadInfoData,
  ): Promise<ILoadInfoDataReturn> {
    try {
      const newLoadInfo = new LoadInfo(loadInfoData);
      this.loadInfo = await newLoadInfo.save();
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
  console.log(await orchybase.updateQueue({ id_queue: 1 }, { status: 3 }));
}

[1, 2, 3, 4, 5, 6, 7, 8].map(async (num, i) => {
  test(num);
});
