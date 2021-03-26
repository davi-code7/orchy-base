import mongoose from 'mongoose';
import { ILoadInfo } from '../../../interfaces/models/mongoDb';

const LoadInfoSchema = new mongoose.Schema({
  id_flow: {
    type: String,
    required: true,
  },
  id_load: {
    type: Number,
    required: true,
  },
  apiKey: {
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
    type: Number,
    required: true,
  },
  telephones: {
    type: Number,
    required: true,
  },
  emails: {
    type: Number,
    required: true,
  },
  telephones_ddd: [
    {
      ddd: {
        type: Number,
        required: true,
      },
      quantity: {
        type: Number,
        required: true,
      },
    },
  ],
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
