import mongoose from 'mongoose';
import { success } from '../../../utils/logger/logger';

export const connectMongoDB = async (): Promise<void> => {
  try {
    const dbURI: string = process.env.ORCHYBASE_MONGO_URI;

    const conn = await mongoose.connect(dbURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    });

    success(`MongoDB connected: ${conn.connection.host}`);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};
