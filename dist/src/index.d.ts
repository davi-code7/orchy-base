import 'dotenv/config';
import './database';
import { IQueueData, IQueueReturn, ILoadData, ILoadDataReturn, IContactData, IContactDataReturn, IContactDataData, IContactDataDataReturn, ILoadInfoData, ILoadInfoDataReturn, ILoadStatusData, ILoadStatusDataReturn, IQueueContactData, IQueueContactDataReturn } from './interfaces/index';
export default class OrchyBase {
    private newQueue;
    private newLoad;
    private newContact;
    private newContactData;
    private newLoadInfo;
    private newLoadStatus;
    private newQueueContact;
    constructor();
    createQueue(queueData: IQueueData): Promise<IQueueReturn>;
    createLoad(loadData: ILoadData): Promise<ILoadDataReturn>;
    createContact(contactData: IContactData): Promise<IContactDataReturn>;
    createContactData(contactDataData: IContactDataData): Promise<IContactDataDataReturn>;
    createLoadInfo(loadInfoData: ILoadInfoData): Promise<ILoadInfoDataReturn>;
    createLoadStatus(loadStatusData: ILoadStatusData): Promise<ILoadStatusDataReturn>;
    createQueueContact(queueContactData: IQueueContactData): Promise<IQueueContactDataReturn>;
}
