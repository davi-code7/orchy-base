import mongoose from 'mongoose';
import { IQueueContactReport } from '../../../interfaces/models/mongoDb';

const QueueContactReportSchema = new mongoose.Schema({
  apiKey: {
    type: String,
    required: true,
  },
  id_contact_data: {
    type: Number,
    required: true,
  },
  id_load: {
    type: Number,
    required: true,
  },
  id_flow: {
    type: String,
    required: true,
  },
  id_item: {
    type: String,
    required: true,
  },
  schedule: {
    type: Date,
    required: true,
  },
  event_type: {
    type: String,
    enum: ['SMS', 'HSM', 'Email'],
    required: true,
  },
  data_type: {
    type: String,
    enum: ['cellular', 'landline', 'email'],
    required: true,
  },
  contact_data: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    enum: ['pending', 'waiting', 'done', 'error'],
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  sent: {
    type: Date,
    required: true,
  },
  conditions_meet: [
    {
      context: {
        type: String,
        required: true,
      },
      operator: {
        type: String,
        required: true,
      },
      value: {
        type: String,
        required: true,
      },
      destination: {
        type: String,
        required: true,
      },
    },
  ],
  escape: [
    {
      context: {
        type: String,
        required: true,
      },
      operator: {
        type: String,
        required: true,
      },
      value: {
        type: String,
        required: true,
      },
      destination: {
        type: String,
        required: true,
      },
      variable: {
        type: String,
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

const QueueContactReport = mongoose.model<IQueueContactReport>(
  'QueueContactReport',
  QueueContactReportSchema,
);

export default QueueContactReport;
