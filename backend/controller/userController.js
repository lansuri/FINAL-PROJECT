const UserModel = require("../model/userModel")


const addUser = async (req , res) => {
    try{
        const { username, password, email } = req.body
        const userData = new UserModel({
            username ,password,email
        })
        await userData.save()
        res.status(200).send("User Data Added!")
    }
    catch(err){
        res.status(404).send(` Error Name : ${err.name} , Error Message : ${err.meassage}`)
    }
}

const getUser = async (req , res) => {
    try{
        const userList = await UserModel.find()
        res.status(200).send(userList)
    }
    catch(err){
        res.status(404).send(` Error Name : ${err.name} , Error Message : ${err.meassage}`)
    }
}

const loginUser = async (req , res) =>{
    try{
      const { username , password } = req.body;
      const user = await UserModel.findOne({ username , password}) 

      if(user){
        res.status(200).send(user)
      }
      else{
        res.status(404).send("Invalid User!")
      }
    }
    catch(err){
        res.status(404).send(` Error Name : ${err.name} , Error Message : ${err.meassage}`)
    }
}

const removeUser = async (req , res) => {
    try{
        await UserModel.findByIdAndDelete(req.params.id)
        res.status(200).send("User Data Removed!")
    
    }
    catch(err){
        res.status(404).send(` Error Name : ${err.name} , Error Message : ${err.meassage}`)
    }
}

module.exports={getUser , loginUser , addUser , removeUser}