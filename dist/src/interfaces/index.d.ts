import { Document } from 'mongoose';
export interface ICreateQueue {
    id_queue?: BigInt;
    id_load: BigInt;
    register: Date;
    schedule: Date;
    state: 'pending' | 'working' | 'done';
    active: boolean;
    created_at: Date;
    updated_at: null | Date;
}
export interface IUpdateQueue {
    id_queue?: BigInt;
    id_load?: BigInt;
    register?: Date;
    schedule?: Date;
    state?: 'pending' | 'working' | 'done';
    active?: boolean;
    created_at?: Date;
    updated_at?: null | Date;
}
export interface IDeleteQueue {
    id_queue?: BigInt;
    id_load?: BigInt;
    register?: Date;
    schedule?: Date;
    state?: 'pending' | 'working' | 'done';
    active: boolean;
    created_at?: Date;
    updated_at?: null | Date;
}
export interface IGetQueue {
    id_queue?: BigInt;
    id_load?: BigInt;
    register?: Date | {
        $gt?: Date;
        $lt?: Date;
        $gte?: Date;
        $lte?: Date;
    } | {
        $or: {
            $gt?: Date;
            $lt?: Date;
            $gte?: Date;
            $lte?: Date;
        };
    } | {
        $and: {
            $gt?: Date;
            $lt?: Date;
            $gte?: Date;
            $lte?: Date;
        };
    };
    schedule?: Date | {
        $gt?: Date;
        $lt?: Date;
        $gte?: Date;
        $lte?: Date;
    } | {
        $or: {
            $gt?: Date;
            $lt?: Date;
            $gte?: Date;
            $lte?: Date;
        };
    } | {
        $and: {
            $gt?: Date;
            $lt?: Date;
            $gte?: Date;
            $lte?: Date;
        };
    };
    state?: 'pending' | 'working' | 'done';
    active: boolean;
    created_at?: Date | {
        $gt?: Date;
        $lt?: Date;
        $gte?: Date;
        $lte?: Date;
    } | {
        $or: {
            $gt?: Date;
            $lt?: Date;
            $gte?: Date;
            $lte?: Date;
        };
    } | {
        $and: {
            $gt?: Date;
            $lt?: Date;
            $gte?: Date;
            $lte?: Date;
        };
    };
    updated_at?: null | Date | {
        $gt?: Date;
        $lt?: Date;
        $gte?: Date;
        $lte?: Date;
    } | {
        $or: {
            $gt?: Date;
            $lt?: Date;
            $gte?: Date;
            $lte?: Date;
        };
    } | {
        $and: {
            $gt?: Date;
            $lt?: Date;
            $gte?: Date;
            $lte?: Date;
        };
    };
    limit: number | null;
}
export interface IQueueReturn {
    id_queue?: BigInt;
    id_load: BigInt;
    register: Date;
    schedule: Date;
    state: 'pending' | 'working' | 'done';
    active: boolean;
    created_at: Date;
    updated_at: null | Date;
    load: ICreateLoad;
}
export interface ICreateLoad {
    id_load?: BigInt;
    id_flow: string;
    api_key: string;
    register: Date;
    active: boolean;
    created_at: Date;
    updated_at: null | Date;
}
export interface IUpdateLoad {
    id_load?: BigInt;
    id_flow?: string;
    api_key?: string;
    register?: Date;
    active?: boolean;
    created_at?: Date;
    updated_at?: null | Date;
}
export interface IDeleteLoad {
    id_load?: BigInt;
    id_flow?: string;
    api_key?: string;
    register?: Date;
    active?: boolean;
    created_at?: Date;
    updated_at?: null | Date;
}
export interface IGetLoad {
    id_load?: BigInt;
    id_flow?: string;
    api_key?: string;
    register?: Date;
    active?: boolean;
    created_at?: Date;
    updated_at?: null | Date;
}
export interface ILoadReturn {
    id_load: BigInt;
    id_flow: string;
    api_key: string;
    register: Date;
    active: boolean;
    created_at: Date;
    updated_at: null | Date;
    queue: ICreateQueue;
}
export interface ICreateContact {
    id_contact?: BigInt;
    id_load: BigInt;
    name: string;
    key: string;
    state: 'pending' | 'working' | 'done';
    created_at: Date;
    updated_at: null | Date;
}
export interface IUpdateContact {
    id_contact?: BigInt;
    id_load?: BigInt;
    name?: string;
    key?: string;
    state?: 'pending' | 'working' | 'done';
    created_at?: Date;
    updated_at?: null | Date;
}
export interface IDeleteContact {
    id_contact?: BigInt;
    id_load?: BigInt;
    name?: string;
    key?: string;
    state?: 'pending' | 'working' | 'done';
    created_at?: Date;
    updated_at?: null | Date;
}
export interface IContactGetData {
    id_contact?: BigInt;
    id_load?: BigInt;
    name?: String;
    key?: String;
    state?: 'pending' | 'working' | 'done';
    created_at?: number;
    updated_at?: null | number;
}
export interface IContactComplementGetData {
    id_contact_complement?: BigInt;
    id_contact?: BigInt;
    field?: string;
    value?: string;
    created_at?: Date;
    updated_at?: null | Date;
    contact: ICreateContact;
}
export interface IContactPhoneGetData {
    id_contact_phone?: BigInt;
    id_contact?: BigInt;
    area_code?: BigInt;
    data_type?: 'cellular' | 'landline';
    contact_data?: string;
    state?: 'pending' | 'working' | 'done';
    created_at?: Date;
    updated_at?: null | Date;
    contact: ICreateContact;
}
export interface IContactEmailGetData {
    id_contact_email?: BigInt;
    id_contact?: BigInt;
    contact_data?: string;
    state?: 'pending' | 'working' | 'done';
    created_at?: Date;
    updated_at?: null | Date;
    contact: ICreateContact;
}
export interface IContactReturn {
    id_contact: BigInt;
    id_load: BigInt;
    name: string;
    key: string;
    state: 'pending' | 'working' | 'done';
    created_at: Date;
    updated_at: null | Date;
    load: ILoadReturn;
    contact_complement: IContactComplementGetData;
    contact_phone: IContactPhoneGetData;
    contact_email: IContactEmailGetData;
}
export interface ICreateContactEmail {
    id_contact_email?: BigInt;
    id_contact: BigInt;
    contact_data: string;
    state: 'pending' | 'working' | 'done';
    created_at: Date;
    updated_at: null | Date;
}
export interface IUpdateContactEmail {
    id_contact_email?: BigInt;
    id_contact?: BigInt;
    contact_data?: string;
    state?: 'pending' | 'working' | 'done';
    created_at?: Date;
    updated_at?: null | Date;
}
export interface IDeleteContactEmail {
    id_contact_email?: BigInt;
    id_contact?: BigInt;
    contact_data?: string;
    state?: 'pending' | 'working' | 'done';
    created_at?: Date;
    updated_at?: null | Date;
}
export interface ICreateContactPhone {
    id_contact_phone?: BigInt;
    id_contact: BigInt;
    area_code?: BigInt;
    data_type: 'cellular' | 'landline';
    contact_data: string;
    state: 'pending' | 'working' | 'done';
    created_at: Date;
    updated_at: null | Date;
}
export interface IUpdateContactPhone {
    id_contact_phone?: BigInt;
    id_contact?: BigInt;
    area_code?: BigInt;
    data_type?: 'cellular' | 'landline';
    contact_data?: string;
    state?: 'pending' | 'working' | 'done';
    created_at?: Date;
    updated_at?: null | Date;
}
export interface IDeleteContactPhone {
    id_contact_phone?: BigInt;
    id_contact?: BigInt;
    area_code?: BigInt;
    data_type?: 'cellular' | 'landline';
    contact_data?: string;
    state?: 'pending' | 'working' | 'done';
    created_at?: Date;
    updated_at?: null | Date;
}
export interface ICreateContactComplement {
    id_contact_complement?: BigInt;
    id_contact: BigInt;
    field: string;
    value: string;
    created_at: Date;
    updated_at: null | Date;
}
export interface IUpdateContactComplement {
    id_contact_complement?: BigInt;
    id_contact?: BigInt;
    field?: string;
    value?: string;
    created_at?: Date;
    updated_at?: null | Date;
}
export interface IDeleteContactComplement {
    id_contact_complement?: BigInt;
    id_contact?: BigInt;
    field?: string;
    value?: string;
    created_at?: Date;
    updated_at?: null | Date;
}
export interface ICreateLoadInfo {
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
export interface IUpdateLoadInfo {
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
    __v?: number;
}
export interface IDeleteLoadInfo {
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
    __v?: number;
}
export interface IGetLoadInfo {
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
    __v?: number;
}
export interface ILoadInfoReturn extends Document {
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
export interface ICreateLoadStatus {
    id_flow?: string;
    id_load?: number;
    api_key?: string;
    start?: Date;
    finish?: Date;
    total?: number;
    contact_total?: number;
    telephone_total?: number;
    email_total?: number;
    contact_processed?: number;
    telephone_processed?: number;
    email_processed?: number;
    created_at?: Date;
    updated_at?: null | Date;
}
export interface IUpdateLoadStatus {
    _id?: string;
    id_flow?: string;
    id_load?: number;
    api_key?: string;
    start?: Date;
    finish?: Date;
    total?: number;
    contact_total?: number;
    telephone_total?: number;
    email_total?: number;
    contact_processed?: number;
    telephone_processed?: number;
    email_processed?: number;
    created_at?: Date;
    updated_at?: null | Date;
}
export interface IDeleteLoadStatus {
    _id?: string;
    id_flow?: string;
    id_load?: number;
    api_key?: string;
    start?: Date;
    finish?: Date;
    total?: number;
    contact_total?: number;
    telephone_total?: number;
    email_total?: number;
    contact_processed?: number;
    telephone_processed?: number;
    email_processed?: number;
    created_at?: Date;
    updated_at?: null | Date;
}
export interface IGetLoadStatus {
    _id?: string;
    id_flow?: string;
    id_load?: number;
    api_key?: string;
    start?: Date;
    finish?: Date;
    total?: number;
    contact_total?: number;
    telephone_total?: number;
    email_total?: number;
    contact_processed?: number;
    telephone_processed?: number;
    email_processed?: number;
    created_at?: Date;
    updated_at?: null | Date;
}
export interface ICreateQueueContact {
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
export interface IUpdateQueueContact {
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
export interface IDeleteQueueContact {
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
export interface IGetQueueContact {
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
export interface ICreateQueueContactReport {
    _id?: string;
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
export interface IUpdateQueueContactReport {
    _id?: string;
    api_key?: string;
    id_contact_data?: number;
    id_load?: number;
    id_flow?: string;
    id_item?: string;
    schedule?: Date;
    event_type?: 'SMS' | 'HSM' | 'Email';
    data_type?: 'cellular' | 'landline' | 'email';
    contact_data?: string;
    state?: 'pending' | 'waiting' | 'done' | 'error';
    created_at?: Date;
    updated_at?: null | Date;
}
export interface IDeleteQueueContactReport {
    _id?: string;
    api_key?: string;
    id_contact_data?: number;
    id_load?: number;
    id_flow?: string;
    id_item?: string;
    schedule?: Date;
    event_type?: 'SMS' | 'HSM' | 'Email';
    data_type?: 'cellular' | 'landline' | 'email';
    contact_data?: string;
    state?: 'pending' | 'waiting' | 'done' | 'error';
    created_at?: Date;
    updated_at?: null | Date;
}
export interface IGetQueueContactReport {
    _id?: string;
    api_key?: string;
    id_contact_data?: number;
    id_load?: number;
    id_flow?: string;
    id_item?: string;
    schedule?: Date;
    event_type?: 'SMS' | 'HSM' | 'Email';
    data_type?: 'cellular' | 'landline' | 'email';
    contact_data?: string;
    state?: 'pending' | 'waiting' | 'done' | 'error';
    created_at?: Date;
    updated_at?: null | Date;
}
export interface ICreateFlowReport {
    _id?: string;
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
export interface IUpdateFlowReport {
    _id?: string;
    id_load?: number;
    api_key?: string;
    id_flow?: string;
    name?: string;
    id_item?: string;
    register?: Date;
    total?: number;
    pending?: number;
    waiting?: number;
    error?: number;
    response?: number;
    created_at?: Date;
    updated_at?: null | Date;
}
export interface IDeleteFlowReport {
    _id?: string;
    id_load?: number;
    api_key?: string;
    id_flow?: string;
    name?: string;
    id_item?: string;
    register?: Date;
    total?: number;
    pending?: number;
    waiting?: number;
    error?: number;
    response?: number;
    created_at?: Date;
    updated_at?: null | Date;
}
export interface IGetFlowReport {
    _id?: string;
    id_load?: number;
    api_key?: string;
    id_flow?: string;
    name?: string;
    id_item?: string;
    register?: Date;
    total?: number;
    pending?: number;
    waiting?: number;
    error?: number;
    response?: number;
    created_at?: Date;
    updated_at?: null | Date;
}
export interface ICreateFlowStatus {
    _id?: string;
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
export interface IUpdateFlowStatus {
    _id?: string;
    id_load?: number;
    api_key?: string;
    id_flow?: string;
    name?: string;
    id_item?: string;
    register?: Date;
    total?: number;
    sent?: number;
    delivered?: number;
    read?: number;
    answered?: number;
    created_at?: Date;
    updated_at?: null | Date;
}
export interface IDeleteFlowStatus {
    _id?: string;
    id_load?: number;
    api_key?: string;
    id_flow?: string;
    name?: string;
    id_item?: string;
    register?: Date;
    total?: number;
    sent?: number;
    delivered?: number;
    read?: number;
    answered?: number;
    created_at?: Date;
    updated_at?: null | Date;
}
export interface IGetFlowStatus {
    _id?: string;
    id_load?: number;
    api_key?: string;
    id_flow?: string;
    name?: string;
    id_item?: string;
    register?: Date;
    total?: number;
    sent?: number;
    delivered?: number;
    read?: number;
    answered?: number;
    created_at?: Date;
    updated_at?: null | Date;
}
