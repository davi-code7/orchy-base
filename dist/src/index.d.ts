import 'dotenv/config';
import './database';
import { WhereOptions } from 'sequelize/types';
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
  ILoadInfoDataReturn,
  ILoadStatusData,
  ILoadStatusDataReturn,
  IQueueContactData,
  IQueueContactDataReturn,
} from './interfaces/index';
export default class OrchyBase {
  private queue;
  private load;
  private contact;
  private contactData;
  private loadInfo;
  private loadStatus;
  private queueContact;
  constructor();
  createQueue(
    queueData: IQueueData,
  ): Promise<IQueueReturn | object | number | IQueueReturn[]>;
  updateQueue(
    where: WhereOptions<IQueueUpdateData>,
    queueDataToUpdate: IQueueUpdateData,
  ): Promise<IQueueReturn | object | number | IQueueReturn[]>;
  deleteQueue(
    where: WhereOptions<IQueueDestroyData>,
  ): Promise<IQueueReturn | object | number | IQueueReturn[]>;
  getQueue(
    where: WhereOptions<IQueueGetData>,
  ): Promise<IQueueReturn | object | number | IQueueReturn[]>;
  getQueues(
    where?: WhereOptions<IQueueGetData>,
  ): Promise<IQueueReturn | object | number | IQueueReturn[]>;
  createLoad(
    loadData: ILoadData,
  ): Promise<ILoadDataReturn | object | number | ILoadDataReturn[]>;
  updateLoad(
    where: WhereOptions<ILoadUpdateData>,
    loadDataToUpdate: ILoadUpdateData,
  ): Promise<ILoadDataReturn | object | number | ILoadDataReturn[]>;
  deleteLoad(
    where: WhereOptions<ILoadDestroyData>,
  ): Promise<ILoadDataReturn | object | number | ILoadDataReturn[]>;
  getLoad(
    where: WhereOptions<ILoadGetData>,
  ): Promise<ILoadDataReturn | object | number | ILoadDataReturn[]>;
  getLoads(
    where?: WhereOptions<ILoadGetData>,
  ): Promise<ILoadDataReturn | object | number | ILoadDataReturn[]>;
  createContact(
    contactData: IContactData,
  ): Promise<IContactDataReturn | object | number | IContactDataReturn[]>;
  updateContact(
    where: WhereOptions<IContactUpdateData>,
    contactDataToUpdate: IContactUpdateData,
  ): Promise<IContactDataReturn | object | number | IContactDataReturn[]>;
  deleteContact(
    where: WhereOptions<IContactDestroyData>,
  ): Promise<IContactDataReturn | object | number | IContactDataReturn[]>;
  getContact(
    where: WhereOptions<IContactGetData>,
  ): Promise<IContactDataReturn | object | number | IContactDataReturn[]>;
  getContacts(
    where?: WhereOptions<IContactGetData>,
  ): Promise<ILoadDataReturn | object | number | ILoadDataReturn[]>;
  createContactData(
    contactDataData: IContactDataData,
  ): Promise<
    IContactDataDataReturn | object | number | IContactDataDataReturn[]
  >;
  updateContactData(
    where: WhereOptions<IContactDataUpdateData>,
    contactDataToUpdate: IContactDataUpdateData,
  ): Promise<
    IContactDataDataReturn | object | number | IContactDataDataReturn[]
  >;
  deleteContactData(
    where: WhereOptions<IContactDataDestroyData>,
  ): Promise<
    IContactDataDataReturn | object | number | IContactDataDataReturn[]
  >;
  getContactData(
    where: WhereOptions<IContactDataGetData>,
  ): Promise<
    IContactDataDataReturn | object | number | IContactDataDataReturn[]
  >;
  getContactsData(
    where?: WhereOptions<IContactDataGetData>,
  ): Promise<
    IContactDataDataReturn | object | number | IContactDataDataReturn[]
  >;
  createLoadInfo(
    loadInfoData: ILoadInfoData,
  ): Promise<
    ILoadInfoDataReturn | any | ILoadInfoDataReturn | ILoadInfoDataReturn[]
  >;
  updateLoadInfo(
    where: ILoadInfoUpdateData,
    loadInfoDataToUpdate: ILoadInfoUpdateData,
  ): Promise<
    ILoadInfoDataReturn | any | ILoadInfoDataReturn | ILoadInfoDataReturn[]
  >;
  deleteLoadInfo(
    where: ILoadInfoDestroyData,
  ): Promise<
    ILoadInfoDataReturn | object | ILoadInfoDataReturn | ILoadInfoDataReturn[]
  >;
  createLoadStatus(
    loadStatusData: ILoadStatusData,
  ): Promise<ILoadStatusDataReturn>;
  createQueueContact(
    queueContactData: IQueueContactData,
  ): Promise<IQueueContactDataReturn>;
}
