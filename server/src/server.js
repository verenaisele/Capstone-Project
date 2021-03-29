import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import exerciseRoutes from './routes/exerciseRoutes.js';

dotenv.config();

const server = express();
server.use(express.json());
server.use(cors());
server.use(bodyParser.json());

const connectionString = process.env.ATLAS_URI;

mongoose.connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

server.get('/', (req, res) => res.json({ status: 'Server is up and running' }));

server.use(exerciseRoutes);

server.listen(4000, () => console.log('Server is started'));
