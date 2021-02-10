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
} from './src/interfaces/index';

export function createQueue(queueData: IQueueData): Promise<IQueueReturn>;

export function createLoad(loadData: ILoadData): Promise<ILoadDataReturn>;

export function createContact(
  contactData: IContactData,
): Promise<IContactDataReturn>;

export function createContactData(
  contactDataData: IContactDataData,
): Promise<IContactDataDataReturn>;

export function createLoadInfo(
  loadInfoData: ILoadInfoData,
): Promise<ILoadInfoDataReturn>;

export function createLoadStatus(
  loadStatusData: ILoadStatusData,
): Promise<ILoadStatusDataReturn>;

export function createQueueContact(
  queueContactData: IQueueContactData,
): Promise<IQueueContactDataReturn>;
