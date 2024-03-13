import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    fullname : {type:String, required :true},
    username : {type:String, required :true},
    password : {type:String, required :true},
    gender : {type:String, required:true, enum:[ "male", "female", "not mentioned"]},
    profilePic : {type:String, default:""}
},{
    versionKey: false
})

const UserModel = mongoose.model('users',userSchema);

export default UserModel;