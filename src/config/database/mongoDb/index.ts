import mongoose from 'mongoose';

export const connectMongoDB = async (): Promise<any> => {
  try {
    const dbURI: string = process.env.ORCHYBASE_MONGO_URI;

    const conn = await mongoose.connect(dbURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    });
    console.log(`[OK] MongoDB connected: ${conn.connection.host}`);
    return conn;
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

export const disconnectMongoDB = async (): Promise<void> => {
  try {
    await mongoose.disconnect();
  } catch (err) {
    console.error('deu erro aqui', err);
    process.exit(1);
  }
};
