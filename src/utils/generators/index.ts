import { IQueueUpdateData } from '../../interfaces/index';

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
