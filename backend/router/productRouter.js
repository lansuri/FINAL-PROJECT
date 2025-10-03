const express = require("express")
const productRouter = express.Router()
const {addProduct, getProduct, deleteProduct, updateProduct}= require("../controller/productController")

productRouter.post("/add" , addProduct)
productRouter.get("/tableproduct" , getProduct)
productRouter.delete("/delete/:id" , deleteProduct)
productRouter.put("/update/:id",updateProduct)

module.exports = productRouter










































