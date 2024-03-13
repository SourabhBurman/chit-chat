import express from "express";
import { login, logout, signup } from "../Controller/userController.js";

const userRoute = express.Router();

userRoute.post('/signup',signup)

userRoute.post('/login', login)

userRoute.post('/logout',logout)

export default userRoute