import express from "express"
import dotenv from "dotenv"
import userRoute from "./Routes/user.route.js";
import connection from "./db/db.js";
import messageRoute from "./Routes/message.route.js";
import cookieParser from "cookie-parser";
import path from 'path'
import { allUserRoute } from "./Routes/allUser.route.js";
import cors from 'cors';
import { app, server } from "./Socket/socket.js";

dotenv.config();
const port = process.env.PORT || 5000;

const __dirname = path.resolve();

app.use(express.json());
app.use(cors())
app.use(cookieParser())
app.use('/users',userRoute);
app.use('/messages', messageRoute);
app.use('/allUsers', allUserRoute);

app.use(express.static(path.join(__dirname,"/frontend/dist")));

app.get("*",(req,res)=> {
    res.sendFile(path.join(__dirname,"frontend","dist","index.html"))
})

server.listen(port, async ()=> {
    await connection
    console.log(`server is running at http://localhost:${port} and connected to db`)
})
