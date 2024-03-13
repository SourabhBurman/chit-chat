import express from 'express';
import { getUsers } from '../Controller/allUserController.js';
import authentication from '../middleware/authentication.js';
const allUserRoute = express.Router();

allUserRoute.get('/',authentication ,getUsers)

export {allUserRoute}