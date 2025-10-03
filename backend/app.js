const connectDB = require("./config/db");
connectDB()

const express = require("express")
const app = express()

const dotenv = require ("dotenv");
dotenv.config()

const cors = require ("cors");
const productRouter = require("./router/productRouter");
const userRouter = require("./router/userRouter");


app.use(cors())
app.use(express.json({limit:"50mb"}))

app.use("/product",productRouter)
app.use("/User", userRouter)

app.listen (process.env.PORT,()=>{
    console.log(`server running on http://localhost:${process.env.PORT}`)
})

