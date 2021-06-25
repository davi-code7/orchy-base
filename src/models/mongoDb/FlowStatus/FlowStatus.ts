import mongoose from 'mongoose';
import { IFlowStatus } from '../../../interfaces/models/mongoDb';

const FlowStatusSchema = new mongoose.Schema({
  id_load: {
    type: Number,
    required: true,
  },
  api_key: {
    type: String,
    required: true,
  },
  id_flow: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  id_item: {
    type: String,
    required: true,
  },
  register: {
    type: Date,
    required: true,
  },
  total: {
    type: Number,
    required: true,
  },
  sent: {
    type: Number,
    required: true,
  },
  delivered: {
    type: Number,
    required: true,
  },
  read: {
    type: Number,
    required: true,
  },
  answered: {
    type: Number,
    required: true,
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

const FlowStatus = mongoose.model<IFlowStatus>('FlowStatus', FlowStatusSchema);

export default FlowStatus;
