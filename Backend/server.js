import express from 'express';
import dotenv from 'dotenv';

import connectDB from './Database/ConnectDB.js';

dotenv.config();

const Port = process.env.PORT || 5000;

const app = express();

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(Port, () => {
  console.log('Server is running on port 3000');
  // Connect to MongoDB
  connectDB();
});