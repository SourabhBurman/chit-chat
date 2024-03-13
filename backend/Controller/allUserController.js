import UserModel from "../Models/userModel.js"

const getUsers = async (req,res)=> {
    const loggedInId = req.user._id;
    try{
      const allUsers = await UserModel.find({_id : {$ne : loggedInId}}).select("-password");
      res.status(200).send({allUsers})
    } catch(error) {
        res.status(400).send({error})
    }
}

export {getUsers}