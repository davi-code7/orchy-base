import { Document } from 'mongoose';
export interface IFlowReport extends Document {
    _id: string;
    id_load: number;
    api_key: string;
    id_flow: string;
    name: string;
    id_item: string;
    register: Date;
    total: number;
    pending: number;
    waiting: number;
    error: number;
    response: number;
    created_at: Date;
    updated_at: null | Date;
}
export interface IFlowStatus extends Document {
    _id: string;
    id_load: number;
    api_key: string;
    id_flow: string;
    name: string;
    id_item: string;
    register: Date;
    total: number;
    sent: number;
    delivered: number;
    read: number;
    answered: number;
    created_at: Date;
    updated_at: null | Date;
}
export interface ILoadInfo extends Document {
    _id?: string;
    id_flow?: string;
    id_load?: number;
    api_key?: string;
    start?: Date;
    finish?: Date;
    schedule?: Date;
    contacts?: number;
    telephones?: number;
    emails?: number;
    telephones_ddd?: {
        ddd?: number;
        quantity?: number;
    }[];
    created_at?: Date;
    updated_at?: null | Date;
}
export interface ILoadStatus extends Document {
    _id: string;
    id_flow: string;
    id_load: number;
    api_key: string;
    start: Date;
    finish: Date;
    total: number;
    contact_total: number;
    telephone_total: number;
    email_total: number;
    contact_processed: number;
    telephone_processed: number;
    email_processed: number;
    created_at: Date;
    updated_at: null | Date;
}
export interface IQueueContact extends Document {
    _id?: string;
    api_key?: string;
    id_contact_data?: number;
    id_load?: number;
    id_flow?: string;
    id_item?: string;
    schedule?: Date;
    contact?: {
        name?: string;
        cpf?: string;
        complement?: {
            field?: string;
            value?: string;
        }[];
    }[];
    event_type?: 'SMS' | 'HSM' | 'Email';
    data_type?: 'cellular' | 'landline' | 'email';
    contact_data?: string;
    state?: 'pending' | 'waiting' | 'done' | 'error';
    message?: string;
    sent?: Date;
    conditions?: {
        context?: string;
        operator?: string;
        value?: string;
        destination?: string;
        variable?: string;
    }[];
    escape?: {
        context?: string;
        operator?: string;
        value?: string;
        destination?: string;
        variable?: string;
    }[];
    created_at?: number;
    updated_at?: null | number;
}
export interface IQueueContactReport extends Document {
    _id: string;
    api_key: string;
    id_contact_data: number;
    id_load: number;
    id_flow: string;
    id_item: string;
    schedule: Date;
    event_type: 'SMS' | 'HSM' | 'Email';
    data_type: 'cellular' | 'landline' | 'email';
    contact_data: string;
    state: 'pending' | 'waiting' | 'done' | 'error';
    created_at: Date;
    updated_at: null | Date;
}
