import { Document } from 'mongoose';
export interface ILoadInfo extends Document {
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
}
export interface ILoadStatus extends Document {
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
}
export interface IQueueContact extends Document {
    _id: string;
    id_contact_data: number;
    schedule: number;
    event_type: string;
    data_type: string;
    contact_data: string;
    status: number;
    created_at: number;
    updated_at: null | number;
}
