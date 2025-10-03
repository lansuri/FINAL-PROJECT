import React, { useState } from 'react'
import { createContext } from 'react'
import axios from 'axios'
import { useEffect } from 'react'


export const MyContext = createContext()
const ContextProvider = ({ children }) => {

    const url = "http://localhost:8080"

    var [category, setCategory] = useState("")
    var [type, setType] = useState("")
    var [desc, setDesc] = useState("")
    var [img, setImg] = useState("")
    var [price, setPrice] = useState("")
    var [previewImg, setPreviewImg] = useState("")
    var [productData, setProductData] = useState([])


    var [updateCategory , setUpdateCategory] = useState("")
    var [updateType , setUpdateType] = useState("")
    var [updateDesc , setUpdateDesc] = useState("")
    var [updateImg , setUpdateImg] = useState("")
    var [updatePrice , setUpdatePrice] = useState("")
    var [updatePreviewImg , setUpdatePreviewImg] = useState("")
    var [updateId , setUpdateId] = useState("")

    var [userData , setUserData] = useState([])

    const ImageFun = (e) => {
        var file = e.target.files[0]
        if (file) {
            var reader = new FileReader()
            reader.onloadend = () => {
                setImg(reader.result)
                setPreviewImg(reader.result)
            }
            reader.readAsDataURL(file)
        }
    }

     

    const SubmitFun = async (e) => {
        try {
            e.preventDefault()

            const formData = {
                category, desc, price, img, type
            }

            await axios.post(`http://localhost:8080/product/add`, formData)
            alert("Product Added")
            
            setCategory("")
            setType("")
            setDesc("")
            setPrice("")
            setImg("")
           
        }
        catch (err) {
            console.log(`Error Name : ${err.name},Error Message : ${err.message}`)
        }
    }

    const FetchData = async () =>{
        try{
            const response = await axios.get(`${url}/product/tableproduct`)
            setProductData(response.data)
        }
        catch (err) {
            console.log(`Error Name : ${err.name},Error Message : ${err.message}`)
        }
    }
    
    useEffect(() =>{
      FetchData()
    },[])

    const RemoveProduct = async(id) =>{
      try{
        await axios.delete(`${url}/product/delete/${id}`)
        alert("Product deleted")
        FetchData()
      }
       catch (err) {
            console.log(`Error Name : ${err.name},Error Message : ${err.message}`)
        }
    }

    const UpdateFun = (id)=>{
        var product = productData.find(a=>a._id === id)
        console.log(product)

        if(product){
            setUpdateCategory(product.category)
            setUpdateDesc(product.desc)
            setUpdateType(product.type)
            setUpdatePrice(product.price)
            setUpdateImg(product.img)
            setUpdatePreviewImg(product.img)
            setUpdateId(product._id)
        }
    }


    const UpdateImageFun = (e)=>{
        var file = e.target.files[0]
        if(file){
            var reader = new FileReader()
            reader.onloadend = () =>{
                setUpdateImg(reader.result)
                setUpdatePreviewImg(reader.result)
            }
            reader.readAsDataURL(file)
        }
    }
    
     const UpdateSubmitFun = async(e) =>{
        try{
            e.preventDefault()
            var UpdatedData = {
                category:updateCategory,
                type:updateType,
                desc:updateDesc,
                price:updatePrice,
                img:updateImg
            }
            await axios.put(`${url}/product/update/${updateId}`,UpdatedData)
            alert("Product Updated")
            FetchData()
        }
         catch (err) {
            console.log(`Error Name : ${err.name},Error Message : ${err.message}`)
        }
     }
    
    const FetchUserData = async () => {
        try{
          const response = await axios.get(`${url}/user/users`)
          setUserData(response.data)
        }
        catch (err) {
            console.log(`Error Name : ${err.name},Error Message : ${err.message}`)
        }
    }
    
    useEffect(() =>{
        FetchUserData()
    } , [])

    const RemoveUserFun = async (id) => {
        try{
            await axios.delete(`${url}/user/remove/${id}`)
            alert("User Data Removed!")
            FetchUserData()
        }
        catch (err) {
            console.log(`Error Name : ${err.name},Error Message : ${err.message}`)
        }
    }


    var contextvalue = {
        category, setCategory,
        type, setType,
        desc, setDesc,
        price, setPrice,
        previewImg, ImageFun,
        SubmitFun, productData,
        RemoveProduct,
        updateCategory,setUpdateCategory,
        updateDesc,setUpdateDesc,
        updateImg,setUpdateImg,
        updatePrice,setUpdatePrice,
        updateType,setUpdateType,
        updatePreviewImg,
        UpdateImageFun,UpdateFun,
        UpdateSubmitFun,
        userData,
        RemoveUserFun
        
    }
    return (
        <MyContext.Provider value={contextvalue}>
            {children}
        </MyContext.Provider>
    )
}

export default ContextProvider