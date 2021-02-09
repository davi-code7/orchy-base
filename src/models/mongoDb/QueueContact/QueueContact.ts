import mongoose from 'mongoose';
import { IQueueContact } from '../../../interfaces/models/mongoDb';

const QueueContactSchema = new mongoose.Schema({
  id_contact_data: {
    type: Number,
    required: true,
  },
  schedule: {
    type: Date,
    required: true,
  },
  event_type: {
    type: String,
    required: true,
  },
  data_type: {
    type: String,
    required: true,
  },
  contact_data: {
    type: String,
    required: true,
  },
  status: {
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

const QueueContact = mongoose.model<IQueueContact>(
  'QueueContact',
  QueueContactSchema,
);

export default QueueContact;
