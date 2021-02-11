import {
  IQueueUpdateData,
  ILoadUpdateData,
  IContactUpdateData,
  IContactDataUpdateData,
  ILoadInfoUpdateData,
} from '../../interfaces/index';

// Postgres
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

export function generateUpdateContactObject(
  contactDataToUpdate: IContactUpdateData,
): IContactUpdateData {
  const toUpdateData: IContactUpdateData = {};

  if (contactDataToUpdate.created_at) {
    toUpdateData.created_at = contactDataToUpdate.created_at;
  }
  if (contactDataToUpdate.id_load) {
    toUpdateData.id_load = contactDataToUpdate.id_load;
  }
  if (contactDataToUpdate.id_contact) {
    toUpdateData.id_contact = contactDataToUpdate.id_contact;
  }
  if (contactDataToUpdate.key) {
    toUpdateData.key = contactDataToUpdate.key;
  }
  if (contactDataToUpdate.name) {
    toUpdateData.name = contactDataToUpdate.name;
  }
  if (
    contactDataToUpdate.updated_at === null ||
    contactDataToUpdate.updated_at
  ) {
    toUpdateData.updated_at = contactDataToUpdate.updated_at;
  }

  return toUpdateData;
}

export function generateUpdateContactDataObject(
  contactDataDataToUpdate: IContactDataUpdateData,
): IContactDataUpdateData {
  const toUpdateData: IContactDataUpdateData = {};

  if (contactDataDataToUpdate.created_at) {
    toUpdateData.created_at = contactDataDataToUpdate.created_at;
  }
  if (contactDataDataToUpdate.contact_data) {
    toUpdateData.contact_data = contactDataDataToUpdate.contact_data;
  }
  if (contactDataDataToUpdate.id_contact) {
    toUpdateData.id_contact = contactDataDataToUpdate.id_contact;
  }
  if (contactDataDataToUpdate.data_type) {
    toUpdateData.data_type = contactDataDataToUpdate.data_type;
  }
  if (contactDataDataToUpdate.id_contact_data) {
    toUpdateData.id_contact_data = contactDataDataToUpdate.id_contact_data;
  }
  if (contactDataDataToUpdate.status) {
    toUpdateData.status = contactDataDataToUpdate.status;
  }
  if (
    contactDataDataToUpdate.updated_at === null ||
    contactDataDataToUpdate.updated_at
  ) {
    toUpdateData.updated_at = contactDataDataToUpdate.updated_at;
  }

  return toUpdateData;
}

// MongoDB

export function generateUpdateLoadInfoDataObject(
  loadInfoDataToUpdate: ILoadInfoUpdateData,
): ILoadInfoUpdateData {
  const toUpdateData: ILoadInfoUpdateData = {};

  if (loadInfoDataToUpdate.created_at) {
    toUpdateData.created_at = loadInfoDataToUpdate.created_at;
  }
  if (loadInfoDataToUpdate.contacts) {
    toUpdateData.contacts = loadInfoDataToUpdate.contacts;
  }
  if (loadInfoDataToUpdate.email) {
    toUpdateData.email = loadInfoDataToUpdate.email;
  }
  if (loadInfoDataToUpdate.finish) {
    toUpdateData.finish = loadInfoDataToUpdate.finish;
  }
  if (loadInfoDataToUpdate.id_flow) {
    toUpdateData.id_flow = loadInfoDataToUpdate.id_flow;
  }
  if (loadInfoDataToUpdate.id_load) {
    toUpdateData.id_load = loadInfoDataToUpdate.id_load;
  }
  if (loadInfoDataToUpdate.id_org) {
    toUpdateData.id_org = loadInfoDataToUpdate.id_org;
  }
  if (loadInfoDataToUpdate.schedule) {
    toUpdateData.schedule = loadInfoDataToUpdate.schedule;
  }
  if (loadInfoDataToUpdate.start) {
    toUpdateData.start = loadInfoDataToUpdate.start;
  }
  if (loadInfoDataToUpdate.telephones) {
    toUpdateData.telephones = loadInfoDataToUpdate.telephones;
  }
  if (loadInfoDataToUpdate.telephones_ddd) {
    toUpdateData.telephones_ddd = loadInfoDataToUpdate.telephones_ddd;
  }
  if (
    loadInfoDataToUpdate.updated_at === null ||
    loadInfoDataToUpdate.updated_at
  ) {
    toUpdateData.updated_at = loadInfoDataToUpdate.updated_at;
  }

  return toUpdateData;
}
