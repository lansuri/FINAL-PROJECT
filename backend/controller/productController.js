
const productModel = require("../model/productModel")

const addProduct = async (req,res) =>{
    try{
        // console.log(req.body);
        const{category,type,desc,price,img} = req.body

        const productData = new productModel({
             category,type,desc,price,img
        })
        await productData.save()
        res.status(200).send("Product Added")
    }
    catch(err){
       res.status(404).send(`Error Name : ${err.name}, Error Message : ${err.message}`)
    }
   
}

const getProduct = async (req,res) =>{
    try{
        var productlist = await productModel.find()
        res.status(200).send(productlist)
    }
     catch(err){
       res.status(404).send(`Error Name : ${err.name}, Error Message : ${err.message}`)
    }

}

const deleteProduct = async (req,res) =>{
    try{
        await productModel.findByIdAndDelete(req.params.id)
        res.status(200).send("Product Removed")
    }
     catch(err){
       res.status(404).send(`Error Name : ${err.name}, Error Message : ${err.message}`)
    }

}
const updateProduct = async (req,res) =>{
    try{
        var updateProduct = await productModel.findByIdAndUpdate(req.params.id,req.body,{now:true})
        res.status(200).send(updateProduct)
    }
     catch(err){
       res.status(404).send(`Error Name : ${err.name}, Error Message : ${err.message}`)
    }
}
module.exports= {addProduct , getProduct , deleteProduct , updateProduct}