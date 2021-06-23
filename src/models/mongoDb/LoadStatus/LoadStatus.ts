import mongoose from 'mongoose';
import { ILoadStatus } from '../../../interfaces/models/mongoDb';

const LoadStatusSchema = new mongoose.Schema({
  id_flow: {
    type: String,
    required: true,
  },
  id_load: {
    type: String,
    required: true,
  },
  id_org: {
    type: String,
    required: true,
  },
  start: {
    type: Date,
    required: true,
  },
  finish: {
    type: Date,
    required: true,
  },
  total: {
    type: String,
    required: true,
  },
  contact_total: {
    type: String,
    required: true,
  },
  telephone_total: {
    type: String,
    required: true,
  },
  email_total: {
    type: String,
    required: true,
  },
  contact_processed: {
    type: String,
    required: true,
  },
  telephone_processed: {
    type: String,
    required: true,
  },
  email_processed: {
    type: String,
    required: true,
  },
  active: {
    type: Boolean,
    required: true,
    default: true,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
  updated_at: {
    type: Date,
    required: false,
    default: null,
  },
});

const LoadStatus = mongoose.model<ILoadStatus>('LoadStatus', LoadStatusSchema);

export default LoadStatus;
