import UserModel from "../Models/userModel.js";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { blacklist } from "../blacklist/blacklist.js";

//signup
const signup = async (req, res) => {
    try {
        
        const { username, fullname, password, confirmPassword, gender } = req.body;
        
        if (password != confirmPassword) {
            return res.status(400).send({ error: "Password and Confirm Password do not match" })
        }
        
        const user = await UserModel.findOne({username});
        if (user) {
            return res.status(400).send({ error: "Username already exists" })
        }

        const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`
        const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`
        
        const hash = bcrypt.hashSync(password, 5);
        
        const newUser = new UserModel({ fullname, username, password : hash, gender, profilePic: gender == 'male' ? boyProfilePic : girlProfilePic })
        await newUser.save()

        res.status(200).send({ msg: "new User added" })
    } catch (error) {
        
    res.status(400).send({error})
    }
}

//login
const login =  async (req, res) => {
    const {username, password} = req.body;

    try{
         const user = await UserModel.findOne({username});
         if(user) {
           const pass = bcrypt.compareSync(password, user.password);
           if(!pass) {
            return res.status(200).send({error:"Incorrect Password"})
           }
           var token = jwt.sign({ userId : user._id }, process.env.jwt_secretKey , {expiresIn : '1d'});
        //    res.cookie("jwt",token,{
        //     maxAge: 15 * 24 * 60 * 60 * 1000,
        //     httpOnly: true
        // })
            res.status(200).send({msg : "Login Successfull",user:{_id:user._id,fullname:user.fullname,username:user.username,profilePic:user.profilePic},token})
         } else {
            res.status(200).send({error:"User doesn't exists"})
         }
    } catch(error) {
        res.status(400).send({error})
    }
}

const logout = async(req,res) => {
try{
//    res.cookie("jwt","",{maxAge:0});
   const token = req.headers.authorization?.split(" ")[1];
   blacklist.push(token);
   res.status(200).send({msg:"Logged out Successfully"})
} catch(error) {
    res.status(400).send({error})
}
}

export { signup, login, logout}