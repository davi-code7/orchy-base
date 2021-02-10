import mongoose from 'mongoose';
import { IQueueContact } from '../../../interfaces/models/mongoDb';
declare const QueueContact: mongoose.Model<IQueueContact>;
export default QueueContact;
