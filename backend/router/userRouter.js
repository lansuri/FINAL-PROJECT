const express = require("express")
const { getUser, loginUser, addUser, removeUser } = require("../controller/userController")

const userRouter = express.Router()

userRouter.post("/add" , addUser)
userRouter.get("/users" , getUser)
userRouter.post("/login" , loginUser)
userRouter.delete("/remove/:id" , removeUser)

module.exports = userRouter