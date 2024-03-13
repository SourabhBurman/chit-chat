import express from 'express';
import { getMessage, sendMessage } from '../Controller/messageController.js';
import authentication from '../middleware/authentication.js';

const messageRoute = express.Router();

messageRoute.post('/send/:id',authentication, sendMessage)
messageRoute.get('/get/:id',authentication, getMessage)


export default messageRoute