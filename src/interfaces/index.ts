import { Document } from 'mongoose';

// Postgres
// Queue
export interface IQueueData {
  id_queue: BigInt;
  id_load: BigInt;
  schedule: number;
  status: number;
  created_at: number;
  updated_at: null | number;
}

export interface IQueueUpdateData {
  id_queue?: BigInt;
  id_load?: BigInt;
  schedule?: number;
  status?: number;
  created_at?: number;
  updated_at?: null | number;
}

export interface IQueueDestroyData {
  id_queue?: BigInt;
  id_load?: BigInt;
  schedule?: number;
  status?: number;
  created_at?: number;
  updated_at?: null | number;
}

export interface IQueueGetData {
  id_queue?: BigInt;
  id_load?: BigInt;
  schedule?: number;
  status?: number;
  created_at?: number;
  updated_at?: null | number;
}

export interface IQueueReturn {
  id_queue: BigInt;
  id_load: number;
  schedule: number;
  status: number;
  created_at: number;
  updated_at: null | number;
}

// Load
export interface ILoadData {
  id_load: BigInt;
  id_flow: String;
  id_org: String;
  register: number;
  active: Boolean;
  created_at: number;
  updated_at: null | number;
}

export interface ILoadUpdateData {
  id_load?: BigInt;
  id_flow?: String;
  id_org?: String;
  register?: number;
  active?: Boolean;
  created_at?: number;
  updated_at?: null | number;
}

export interface ILoadDestroyData {
  id_load?: BigInt;
  id_flow?: String;
  id_org?: String;
  register?: number;
  active?: Boolean;
  created_at?: number;
  updated_at?: null | number;
}

export interface ILoadGetData {
  id_load?: BigInt;
  id_flow?: String;
  id_org?: String;
  register?: number;
  active?: Boolean;
  created_at?: number;
  updated_at?: null | number;
}

export interface ILoadDataReturn {
  id_load: BigInt;
  id_flow: String;
  id_org: String;
  register: number;
  active: Boolean;
  created_at: number;
  updated_at: null | number;
}

export interface IContactData {
  id_contact: BigInt;
  id_load: BigInt;
  name: String;
  key: String;
  created_at: number;
  updated_at: null | number;
}

export interface IContactUpdateData {
  id_contact?: BigInt;
  id_load?: BigInt;
  name?: String;
  key?: String;
  created_at?: number;
  updated_at?: null | number;
}

export interface IContactDestroyData {
  id_contact?: BigInt;
  id_load?: BigInt;
  name?: String;
  key?: String;
  created_at?: number;
  updated_at?: null | number;
}

export interface IContactGetData {
  id_contact?: BigInt;
  id_load?: BigInt;
  name?: String;
  key?: String;
  created_at?: number;
  updated_at?: null | number;
}

export interface IContactDataReturn {
  id_contact: BigInt;
  id_load: number;
  name: String;
  key: String;
  created_at: number;
  updated_at: null | number;
}

export interface IContactDataData {
  id_contact_data: BigInt;
  id_contact: BigInt;
  contact_data: String;
  data_type: number;
  status: number;
  created_at: number;
  updated_at: null | number;
}

export interface IContactDataUpdateData {
  id_contact_data?: BigInt;
  id_contact?: BigInt;
  contact_data?: String;
  data_type?: number;
  status?: number;
  created_at?: number;
  updated_at?: null | number;
}

export interface IContactDataDestroyData {
  id_contact_data?: BigInt;
  id_contact?: BigInt;
  contact_data?: String;
  data_type?: number;
  status?: number;
  created_at?: number;
  updated_at?: null | number;
}

export interface IContactDataGetData {
  id_contact_data?: BigInt;
  id_contact?: BigInt;
  contact_data?: String;
  data_type?: number;
  status?: number;
  created_at?: number;
  updated_at?: null | number;
}

export interface IContactDataDataReturn {
  id_contact_data: BigInt;
  id_contact: number;
  contact_data: String;
  data_type: number;
  status: number;
  created_at: number;
  updated_at: null | number;
}

// MongoDB
export interface ILoadInfoData {
  id_flow: string;
  id_load: string;
  id_org: string;
  start: number;
  finish: number;
  schedule: number;
  contacts: string;
  telephones: string;
  telephones_ddd: string[];
  email: string;
  created_at: number;
  updated_at: null | number;
}

export interface ILoadInfoUpdateData {
  id_flow?: string;
  id_load?: string;
  id_org?: string;
  start?: number;
  finish?: number;
  schedule?: number;
  contacts?: string;
  telephones?: string;
  telephones_ddd?: string[];
  email?: string;
  created_at?: number;
  updated_at?: null | number;
}

export interface ILoadInfoDestroyData {
  id_flow?: string;
  id_load?: string;
  id_org?: string;
  start?: number;
  finish?: number;
  schedule?: number;
  contacts?: string;
  telephones?: string;
  telephones_ddd?: string[];
  email?: string;
  created_at?: number;
  updated_at?: null | number;
}

export interface ILoadInfoGetData {
  id_flow?: string;
  id_load?: string;
  id_org?: string;
  start?: number;
  finish?: number;
  schedule?: number;
  contacts?: string;
  telephones?: string;
  telephones_ddd?: string[];
  email?: string;
  created_at?: number;
  updated_at?: null | number;
}

export interface ILoadInfoDataReturn extends Document {
  _id: string;
  id_flow: string;
  id_load: string;
  id_org: string;
  start: number;
  finish: number;
  schedule: number;
  contacts: string;
  telephones: string;
  telephones_ddd: string[];
  email: string;
  created_at: number;
  updated_at: null | number;
  __v?: number;
}

export interface ILoadStatusData {
  id_flow: string;
  id_load: string;
  id_org: string;
  start: number;
  finish: number;
  total: string;
  contact_total: string;
  telephone_total: string;
  email_total: string;
  contact_processed: string;
  telephone_processed: string;
  email_processed: string;
  created_at: number;
  updated_at: null | number;
}

export interface ILoadStatusUpdateData {
  _id?: string;
  id_flow?: string;
  id_load?: string;
  id_org?: string;
  start?: number;
  finish?: number;
  total?: string;
  contact_total?: string;
  telephone_total?: string;
  email_total?: string;
  contact_processed?: string;
  telephone_processed?: string;
  email_processed?: string;
  created_at?: number;
  updated_at?: null | number;
  __v?: number;
}

export interface ILoadStatusDestroyData {
  _id?: string;
  id_flow?: string;
  id_load?: string;
  id_org?: string;
  start?: number;
  finish?: number;
  total?: string;
  contact_total?: string;
  telephone_total?: string;
  email_total?: string;
  contact_processed?: string;
  telephone_processed?: string;
  email_processed?: string;
  created_at?: number;
  updated_at?: null | number;
  __v?: number;
}

export interface ILoadStatusGetData {
  _id?: string;
  id_flow?: string;
  id_load?: string;
  id_org?: string;
  start?: number;
  finish?: number;
  total?: string;
  contact_total?: string;
  telephone_total?: string;
  email_total?: string;
  contact_processed?: string;
  telephone_processed?: string;
  email_processed?: string;
  created_at?: number;
  updated_at?: null | number;
  __v?: number;
}

export interface ILoadStatusDataReturn extends Document {
  _id: string;
  id_flow: string;
  id_load: string;
  id_org: string;
  start: number;
  finish: number;
  total: string;
  contact_total: string;
  telephone_total: string;
  email_total: string;
  contact_processed: string;
  telephone_processed: string;
  email_processed: string;
  created_at: number;
  updated_at: null | number;
  __v?: number;
}

export interface IQueueContactData {
  id_contact_data: number;
  schedule: number;
  event_type: string;
  data_type: string;
  contact_data: string;
  status: number;
  created_at: number;
  updated_at: null | number;
}

export interface IQueueContactDataReturn extends Document {
  _id: string;
  id_contact_data: number;
  schedule: number;
  event_type: string;
  data_type: string;
  contact_data: string;
  status: number;
  created_at: number;
  updated_at: null | number;
  __v?: number;
}
