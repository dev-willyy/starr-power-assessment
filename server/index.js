import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

const app = express();
const PORT = 3002;

dotenv.config();

app.use(express.json());

async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('Connected to MongoDB');
  } catch (error) {
    throw error;
  }
}

mongoose.connection.on('disconnected', () => {
  console.log('MongoDB disconnected');
});

app.listen(PORT, (err) => {
  connectDB();
  if (err) console.error(err);
  console.log(`Express server is running on port ${PORT}`);
});
