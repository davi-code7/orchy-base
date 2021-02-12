import { IQueueUpdateData, ILoadUpdateData, IContactUpdateData, IContactDataUpdateData, ILoadInfoUpdateData, ILoadStatusUpdateData, IQueueContactUpdateData } from '../../interfaces/index';
export declare function generateUpdateQueueObject(queueDataToUpdate: IQueueUpdateData): IQueueUpdateData;
export declare function generateUpdateLoadObject(loadDataToUpdate: ILoadUpdateData): ILoadUpdateData;
export declare function generateUpdateContactObject(contactDataToUpdate: IContactUpdateData): IContactUpdateData;
export declare function generateUpdateContactDataObject(contactDataDataToUpdate: IContactDataUpdateData): IContactDataUpdateData;
export declare function generateUpdateLoadInfoDataObject(loadInfoDataToUpdate: ILoadInfoUpdateData): ILoadInfoUpdateData;
export declare function generateUpdateLoadStatusDataObject(loadInfoDataToUpdate: ILoadStatusUpdateData): ILoadStatusUpdateData;
export declare function generateUpdateQueueContactDataObject(loadInfoDataToUpdate: IQueueContactUpdateData): IQueueContactUpdateData;
