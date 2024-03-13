import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
import UserModel from '../Models/userModel.js';
import { blacklist } from '../blacklist/blacklist.js';

dotenv.config()

const authentication = async (req,res,next)=> {
try{
// const token = req.cookies.jwt;
const token = req.headers.authorization?.split(" ")[1];
if(!token) {
    return res.status(400).send({msg:"No token Provided"});
}
if(blacklist.includes(token)) {
    return res.status(400).send({msg:"Token Blocked, Please Login again"});
}
const decoded = jwt.verify(token, process.env.jwt_secretKey);

if(!decoded) {
    return res.status(400).send({msg: "Invalid Token"})
}

const user = await UserModel.findOne({_id:decoded.userId});
if(!user) {
    res.status(400).send({msg : "User not found"});
}

req.user = user;
next();
} catch(err) {
    res.status(400).send({err})
}
}

export default authentication