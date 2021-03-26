import mongoose from 'mongoose';
import { IFlowReport } from '../../../interfaces/models/mongoDb';

const FlowReportSchema = new mongoose.Schema({
  id_load: {
    type: Number,
    required: true,
  },
  apiKey: {
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
  pending: {
    type: Number,
    required: true,
  },
  waiting: {
    type: Number,
    required: true,
  },
  error: {
    type: Number,
    required: true,
  },
  response: {
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

const FlowReport = mongoose.model<IFlowReport>('FlowReport', FlowReportSchema);

export default FlowReport;
