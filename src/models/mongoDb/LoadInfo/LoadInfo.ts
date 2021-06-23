import mongoose from 'mongoose';
import { ILoadInfo } from '../../../interfaces/models/mongoDb';

const LoadInfoSchema = new mongoose.Schema({
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
  schedule: {
    type: Date,
    required: true,
  },
  contacts: {
    type: String,
    required: true,
  },
  telephones: {
    type: String,
    required: true,
  },
  telephones_ddd: {
    type: [String],
    required: true,
  },
  email: {
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

const LoadInfo = mongoose.model<ILoadInfo>('LoadInfo', LoadInfoSchema);

export default LoadInfo;
