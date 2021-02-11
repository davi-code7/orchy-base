import { IQueueUpdateData, ILoadUpdateData } from '../../interfaces/index';

export function generateUpdateQueueObject(
  queueDataToUpdate: IQueueUpdateData,
): IQueueUpdateData {
  const toUpdateData: IQueueUpdateData = {};

  if (queueDataToUpdate.created_at) {
    toUpdateData.created_at = queueDataToUpdate.created_at;
  }
  if (queueDataToUpdate.id_load) {
    toUpdateData.id_load = queueDataToUpdate.id_load;
  }
  if (queueDataToUpdate.id_queue) {
    toUpdateData.id_queue = queueDataToUpdate.id_queue;
  }
  if (queueDataToUpdate.schedule) {
    toUpdateData.schedule = queueDataToUpdate.schedule;
  }
  if (queueDataToUpdate.status) {
    toUpdateData.status = queueDataToUpdate.status;
  }
  if (queueDataToUpdate.updated_at === null || queueDataToUpdate.updated_at) {
    toUpdateData.updated_at = queueDataToUpdate.updated_at;
  }

  return toUpdateData;
}

export function generateUpdateLoadObject(
  loadDataToUpdate: ILoadUpdateData,
): ILoadUpdateData {
  const toUpdateData: ILoadUpdateData = {};

  if (loadDataToUpdate.created_at) {
    toUpdateData.created_at = loadDataToUpdate.created_at;
  }
  if (loadDataToUpdate.id_load) {
    toUpdateData.id_load = loadDataToUpdate.id_load;
  }
  if (loadDataToUpdate.active) {
    toUpdateData.active = loadDataToUpdate.active;
  }
  if (loadDataToUpdate.id_flow) {
    toUpdateData.id_flow = loadDataToUpdate.id_flow;
  }
  if (loadDataToUpdate.id_org) {
    toUpdateData.id_org = loadDataToUpdate.id_org;
  }
  if (loadDataToUpdate.updated_at === null || loadDataToUpdate.updated_at) {
    toUpdateData.updated_at = loadDataToUpdate.updated_at;
  }
  if (loadDataToUpdate.register) {
    toUpdateData.register = loadDataToUpdate.register;
  }

  return toUpdateData;
}
