import 'dotenv/config';
import './database';
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
  private newQueue: IQueueReturn;
  private newLoad: ILoadDataReturn;
  private newContact: IContactDataReturn;
  private newContactData: IContactDataDataReturn;

  private newLoadInfo: ILoadInfoDataReturn;
  private newLoadStatus: ILoadStatusDataReturn;
  private newQueueContact: IQueueContactDataReturn;

  constructor() {
    connectMongoDB();
  }

  // Create methods
  // Postgres
  async createQueue(queueData: IQueueData): Promise<IQueueReturn> {
    try {
      const localNewQueue = await Queue.create(queueData);
      this.newQueue = localNewQueue.get();
    } catch (err) {
      console.log(err);
    }
    return this.newQueue;
  }

  async createLoad(loadData: ILoadData): Promise<ILoadDataReturn> {
    try {
      const localNewLoad = await Load.create(loadData);
      this.newLoad = localNewLoad.get();
    } catch (err) {
      console.log(err);
    }
    return this.newLoad;
  }

  async createContact(contactData: IContactData): Promise<IContactDataReturn> {
    try {
      const localNewContact = await Contact.create(contactData);
      this.newContact = localNewContact.get();
    } catch (err) {
      console.log(err);
    }
    return this.newContact;
  }

  async createContactData(
    contactDataData: IContactDataData,
  ): Promise<IContactDataDataReturn> {
    try {
      const localNewContactData = await ContactData.create(contactDataData);
      this.newContactData = localNewContactData.get();
    } catch (err) {
      console.log(err);
    }
    return this.newContactData;
  }

  // MongoDB
  async createLoadInfo(
    loadInfoData: ILoadInfoData,
  ): Promise<ILoadInfoDataReturn> {
    try {
      const newLoadInfo = new LoadInfo(loadInfoData);
      this.newLoadInfo = await newLoadInfo.save();
    } catch (err) {
      console.log(err);
    }
    return this.newLoadInfo;
  }

  async createLoadStatus(
    loadStatusData: ILoadStatusData,
  ): Promise<ILoadStatusDataReturn> {
    try {
      const newLoadStatus = new LoadStatus(loadStatusData);
      this.newLoadStatus = await newLoadStatus.save();
    } catch (err) {
      console.log(err);
    }
    return this.newLoadStatus;
  }

  async createQueueContact(
    queueContactData: IQueueContactData,
  ): Promise<IQueueContactDataReturn> {
    try {
      const newQueueContact = new QueueContact(queueContactData);
      this.newQueueContact = await newQueueContact.save();
    } catch (err) {
      console.log(err);
    }
    return this.newQueueContact;
  }
}
