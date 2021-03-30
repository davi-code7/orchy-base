import 'dotenv/config';
import './database';
import { exec } from 'child_process';

import { WhereOptions } from 'sequelize/types';
import { FilterQuery } from 'mongoose';

import { connectMongoDB } from './config/database/mongoDb/index';

import Queue from './models/postgres/Queue/Queue';
import Load from './models/postgres/Load/Load';
import Contact from './models/postgres/Contact/Contact';
import ContactPhone from './models/postgres/ContactPhone/ContactPhone';
import ContactEmail from './models/postgres/ContactEmail/ContactEmail';
import ContactComplement from './models/postgres/ContactComplement/ContactComplement';

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
  ICreateContactEmail,
  IUpdateContactEmail,
  IDeleteContactEmail,
  IContactEmailGetData,
  ICreateContactPhone,
  IUpdateContactPhone,
  IDeleteContactPhone,
  IContactPhoneGetData,
  ICreateContactComplement,
  IUpdateContactComplement,
  IDeleteContactComplement,
  IContactComplementGetData,
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

  private contact: IContactReturn;
  private updatedContacts: object;
  private deletedContacts: number;
  private contacts: IContactReturn[];

  private contactPhone: ICreateContactPhone;
  private updatedContactsPhone: object;
  private deletedContactsPhone: number;
  private contactsPhone: IContactPhoneGetData[];

  private contactEmail: ICreateContactEmail;
  private updatedContactsEmail: object;
  private deletedContactsEmail: number;
  private contactsEmail: IContactEmailGetData[];

  private contactComplement: ICreateContactComplement;
  private updatedContactsComplement: object;
  private deletedContactsComplement: number;
  private contactsComplement: IContactComplementGetData[];

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

  constructor(mongoDB: boolean) {
    if (mongoDB) {
      connectMongoDB();
    }
  }

  runMigrations(): void {
    exec('yarn sequelize db:migrate', (err, stdout, stderr) => {
      if (err) {
        console.error(err);
      } else {
        console.log(`stdout: ${stdout}`);
        console.log(`stderr: ${stderr}`);
      }
    });
  }

  // Postgres
  // Queue methods
  async createQueue(queueData: ICreateQueue): Promise<ICreateQueue> {
    try {
      const localNewQueue = await Queue.create(queueData);
      this.queue = localNewQueue.get();
    } catch (err) {
      throw Error(err);
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
      throw Error(err);
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
      throw Error(err);
    }

    return this.deletedQueues;
  }

  async getQueue(where: WhereOptions<IGetQueue>): Promise<ICreateQueue> {
    try {
      const queue = await Queue.findOne({
        where,
        include: { association: 'load' },
      });

      this.queue = {
        ...queue.get(),
        load: queue.get().load ? queue.get().load.get() : null,
      };
    } catch (err) {
      throw Error(err);
    }

    return this.queue;
  }

  async getQueues(
    limit: number | null,
    where?: WhereOptions<IGetQueue>,
  ): Promise<IQueueReturn[]> {
    try {
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
        load: queue.get().load ? queue.get().load.get() : null,
      }));

      this.queues = mapedQueues;
    } catch (err) {
      throw Error(err);
    }

    return this.queues;
  }

  // Load methods
  async createLoad(loadData: ICreateLoad): Promise<ICreateLoad> {
    try {
      const localNewLoad = await Load.create(loadData);
      this.load = localNewLoad.get();
    } catch (err) {
      throw Error(err);
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
      throw Error(err);
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
      throw Error(err);
    }

    return this.deletedLoads;
  }

  async getLoad(where: WhereOptions<IGetLoad>): Promise<ICreateLoad> {
    try {
      const load = await Load.findOne({
        where,
        include: { association: 'queue' },
      });

      this.load = {
        ...load.get(),
        queue: load.get().queue ? load.get().queue.get() : null,
      };
    } catch (err) {
      throw Error(err);
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
          loads = await Load.findAll({
            limit,
            include: { association: 'queue' },
          });
        } else {
          loads = await Load.findAll({
            include: { association: 'queue' },
          });
        }
      } else if (limit) {
        loads = await Load.findAll({
          where,
          limit,
          include: { association: 'queue' },
        });
      } else {
        loads = await Load.findAll({
          where,
          include: { association: 'queue' },
        });
      }

      const mapedLoads: ILoadReturn[] = loads.map((load) => ({
        ...load.get(),
        queue: load.get().queue ? load.get().queue.get() : null,
      }));

      this.loads = mapedLoads;
    } catch (err) {
      throw Error(err);
    }

    return this.loads;
  }

  // Contact Complement methods

  async createContactComplement(
    contactComplementData: ICreateContactComplement,
  ): Promise<ICreateContactComplement> {
    try {
      const localNewContactComplement = await ContactComplement.create(
        contactComplementData,
      );
      this.contactComplement = localNewContactComplement.get();
    } catch (err) {
      throw Error(err);
    }
    return this.contactComplement;
  }

  async updateContactComplement(
    where: WhereOptions<IUpdateContactComplement>,
    loadDataToUpdate: IUpdateContactComplement,
  ): Promise<object> {
    try {
      const updatedContactsComplement: object = await ContactComplement.update(
        loadDataToUpdate,
        {
          where,
        },
      );

      this.updatedContactsComplement = updatedContactsComplement;
    } catch (err) {
      throw Error(err);
    }
    return this.updatedContactsComplement;
  }

  async deleteContactComplement(
    where: WhereOptions<IDeleteContactComplement>,
  ): Promise<number> {
    try {
      const destroyedContactsComplement: number = await ContactComplement.destroy(
        {
          where,
        },
      );

      this.deletedContactsComplement = destroyedContactsComplement;
    } catch (err) {
      throw Error(err);
    }

    return this.deletedContactsComplement;
  }

  async getContactComplement(
    where: WhereOptions<IContactComplementGetData>,
  ): Promise<ICreateContactComplement> {
    try {
      const contactComplement = await ContactComplement.findOne({
        where,
        include: { association: 'contact' },
      });

      this.contactComplement = {
        ...contactComplement.get(),
        contact: contactComplement.get().contact
          ? contactComplement.get().contact.get()
          : null,
      };
    } catch (err) {
      throw Error(err);
    }

    return this.contactComplement;
  }

  async getContactsComplement(
    limit: number | null,
    where?: WhereOptions<IContactComplementGetData>,
  ): Promise<IContactComplementGetData[]> {
    try {
      let contactsComplement: any;

      if (!where) {
        if (limit) {
          contactsComplement = await ContactComplement.findAll({
            limit,
            include: { association: 'contact' },
          });
        } else {
          contactsComplement = await ContactComplement.findAll({
            include: { association: 'contact' },
          });
        }
      } else if (limit) {
        contactsComplement = await ContactComplement.findAll({
          where,
          limit,
          include: { association: 'contact' },
        });
      } else {
        contactsComplement = await ContactComplement.findAll({
          where,
          include: { association: 'contact' },
        });
      }

      const mapedContactsComplement: IContactComplementGetData[] = contactsComplement.map(
        (contactComplement) => ({
          ...contactComplement.get(),
          contact: contactComplement.get().contact
            ? contactComplement.get().contact.get()
            : null,
        }),
      );

      this.contactsComplement = mapedContactsComplement;
    } catch (err) {
      throw Error(err);
    }

    return this.contactsComplement;
  }

  // Contact Email methods

  async createContactEmail(
    ContactEmailData: ICreateContactEmail,
  ): Promise<ICreateContactEmail> {
    try {
      const localNewContactEmail = await ContactEmail.create(ContactEmailData);
      this.contactEmail = localNewContactEmail.get();
    } catch (err) {
      throw Error(err);
    }
    return this.contactEmail;
  }

  async updateContactEmail(
    where: WhereOptions<IUpdateContactEmail>,
    loadDataToUpdate: IUpdateContactEmail,
  ): Promise<object> {
    try {
      const updatedContactsEmail: object = await ContactEmail.update(
        loadDataToUpdate,
        {
          where,
        },
      );

      this.updatedContactsEmail = updatedContactsEmail;
    } catch (err) {
      throw Error(err);
    }
    return this.updatedContactsEmail;
  }

  async deleteContactEmail(
    where: WhereOptions<IDeleteContactEmail>,
  ): Promise<number> {
    try {
      const destroyedContactsEmail: number = await ContactEmail.destroy({
        where,
      });

      this.deletedContactsEmail = destroyedContactsEmail;
    } catch (err) {
      throw Error(err);
    }

    return this.deletedContactsEmail;
  }

  async getContactEmail(
    where: WhereOptions<IContactEmailGetData>,
  ): Promise<ICreateContactEmail> {
    try {
      const contactEmail = await ContactEmail.findOne({
        where,
        include: { association: 'contact' },
      });

      this.contactEmail = {
        ...contactEmail.get(),
        contact: contactEmail.get().contact
          ? contactEmail.get().contact.get()
          : null,
      };
    } catch (err) {
      throw Error(err);
    }

    return this.contactEmail;
  }

  async getContactsEmail(
    limit: number | null,
    where?: WhereOptions<IContactEmailGetData>,
  ): Promise<IContactEmailGetData[]> {
    try {
      let contactsEmail: any;

      if (!where) {
        if (limit) {
          contactsEmail = await ContactEmail.findAll({
            limit,
            include: { association: 'contact' },
          });
        } else {
          contactsEmail = await ContactEmail.findAll({
            include: { association: 'contact' },
          });
        }
      } else if (limit) {
        contactsEmail = await ContactEmail.findAll({
          where,
          limit,
          include: { association: 'contact' },
        });
      } else {
        contactsEmail = await ContactEmail.findAll({
          where,
          include: { association: 'contact' },
        });
      }

      const mapedContactsEmail: IContactEmailGetData[] = contactsEmail.map(
        (contactEmail) => ({
          ...contactEmail.get(),
          contact: contactEmail.get().contact
            ? contactEmail.get().contact.get()
            : null,
        }),
      );

      this.contactsEmail = mapedContactsEmail;
    } catch (err) {
      throw Error(err);
    }

    return this.contactsEmail;
  }

  // Contact Phone methods

  async createContactPhone(
    contactPhoneData: ICreateContactPhone,
  ): Promise<ICreateContactPhone> {
    try {
      const localNewContactPhone = await ContactPhone.create(contactPhoneData);
      this.contactPhone = localNewContactPhone.get();
    } catch (err) {
      throw Error(err);
    }
    return this.contactPhone;
  }

  async updateContactPhone(
    where: WhereOptions<IUpdateContactPhone>,
    loadDataToUpdate: IUpdateContactPhone,
  ): Promise<object> {
    try {
      const updatedContactsPhone: object = await ContactPhone.update(
        loadDataToUpdate,
        {
          where,
        },
      );

      this.updatedContactsPhone = updatedContactsPhone;
    } catch (err) {
      throw Error(err);
    }
    return this.updatedContactsPhone;
  }

  async deleteContactPhone(
    where: WhereOptions<IDeleteContactPhone>,
  ): Promise<number> {
    try {
      const destroyedContactsPhone: number = await ContactPhone.destroy({
        where,
      });

      this.deletedContactsPhone = destroyedContactsPhone;
    } catch (err) {
      throw Error(err);
    }

    return this.deletedContactsPhone;
  }

  async getContactPhone(
    where: WhereOptions<IContactPhoneGetData>,
  ): Promise<ICreateContactPhone> {
    try {
      const contactPhone = await ContactPhone.findOne({
        where,
        include: { association: 'contact' },
      });

      this.contactPhone = {
        ...contactPhone.get(),
        contact: contactPhone.get().contact
          ? contactPhone.get().contact.get()
          : null,
      };
    } catch (err) {
      throw Error(err);
    }

    return this.contactPhone;
  }

  async getContactsPhone(
    limit: number | null,
    where?: WhereOptions<IContactPhoneGetData>,
  ): Promise<IContactPhoneGetData[]> {
    try {
      let contactsPhone: any;

      if (!where) {
        if (limit) {
          contactsPhone = await ContactPhone.findAll({
            limit,
            include: { association: 'contact' },
          });
        } else {
          contactsPhone = await ContactPhone.findAll({
            include: { association: 'contact' },
          });
        }
      } else if (limit) {
        contactsPhone = await ContactPhone.findAll({
          where,
          limit,
          include: { association: 'contact' },
        });
      } else {
        contactsPhone = await ContactPhone.findAll({
          where,
          include: { association: 'contact' },
        });
      }

      const mapedContactsPhone: IContactPhoneGetData[] = contactsPhone.map(
        (contactPhone) => ({
          ...contactPhone.get(),
          contact: contactPhone.get().contact
            ? contactPhone.get().contact.get()
            : null,
        }),
      );

      this.contactsPhone = mapedContactsPhone;
    } catch (err) {
      throw Error(err);
    }

    return this.contactsPhone;
  }

  // Contact methods
  async createContact(contactData: ICreateContact): Promise<ICreateContact> {
    try {
      const localNewContact = await Contact.create(contactData);
      this.contact = localNewContact.get();
    } catch (err) {
      throw Error(err);
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
      throw Error(err);
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
      throw Error(err);
    }

    return this.deletedContacts;
  }

  async getContact(
    where: WhereOptions<IContactGetData>,
  ): Promise<IContactReturn> {
    try {
      const contact = await Contact.findOne({
        where,
        include: [
          { association: 'load' },
          { association: 'contact_complement' },
          { association: 'contact_email' },
          { association: 'contact_phone' },
        ],
      });
      this.contact = {
        ...contact.get(),
        load: contact.get().load ? contact.get().load.get() : null,
        contact_complement: contact.get().contact_complement
          ? contact
            .get()
            .contact_complement.map((complement) => complement.get())
          : null,
        contact_email: contact.get().contact_email
          ? contact.get().contact_email.map((email) => email.get())
          : null,
        contact_phone: contact.get().contact_phone
          ? contact.get().contact_phone.map((phone) => phone.get())
          : null,
      };
    } catch (err) {
      throw Error(err);
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
              { association: 'load' },
              { association: 'contact_complement' },
              { association: 'contact_email' },
              { association: 'contact_phone' },
            ],
          });
        } else {
          contacts = await Contact.findAll({
            include: [
              { association: 'load' },
              { association: 'contact_complement' },
              { association: 'contact_email' },
              { association: 'contact_phone' },
            ],
          });
        }
      } else if (limit) {
        contacts = await Contact.findAll({
          where,
          limit,
          include: [
            { association: 'load' },
            { association: 'contact_complement' },
            { association: 'contact_email' },
            { association: 'contact_phone' },
          ],
        });
      } else {
        contacts = await Contact.findAll({
          where,
          include: [
            { association: 'load' },
            { association: 'contact_complement' },
            { association: 'contact_email' },
            { association: 'contact_phone' },
          ],
        });
      }

      const mapedContacts: IContactReturn[] = contacts.map((contact) => ({
        ...contact.get(),
        load: contact.get().load ? contact.get().load.get() : null,
        contact_complement: contact.get().contact_complement
          ? contact
            .get()
            .contact_complement.map((complement) => complement.get())
          : null,
        contact_email: contact.get().contact_email
          ? contact.get().contact_email.map((email) => email.get())
          : null,
        contact_phone: contact.get().contact_phone
          ? contact.get().contact_phone.map((phone) => phone.get())
          : null,
      }));

      this.contacts = mapedContacts;
    } catch (err) {
      throw Error(err);
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
      throw Error(err);
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
      throw Error(err);
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
      throw Error(err);
    }

    return this.deletedLoadInfo;
  }

  async getLoadInfo(where: IGetLoadInfo): Promise<IGetLoadInfo> {
    try {
      const loadInfo: IGetLoadInfo = await LoadInfo.findOne(where);

      this.loadInfo = loadInfo;
    } catch (err) {
      throw Error(err);
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
      throw Error(err);
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
      throw Error(err);
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
      throw Error(err);
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
      throw Error(err);
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
      throw Error(err);
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
      throw Error(err);
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
      throw Error(err);
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
      throw Error(err);
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
      throw Error(err);
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
      throw Error(err);
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
      throw Error(err);
    }

    return this.queueContacts;
  }
}
