import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { createContext } from 'react'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'
import { Datas } from '../assets/asset'
import { act } from 'react'

export  const MyContext   = createContext()

const MyContextProvider = ({children}) => {
     
   const url='http://localhost:8080'

   const navigate = useNavigate()
   const [input , setInput] = useState("")
   const [filteredData , setFilteredData] = useState([])
   const [productData , setProductData] = useState([])
   const [username , setUsername] = useState("")
   const [password , setPassword] = useState("")
   const [email , setEmail] = useState("")

   const [loginUsername , setLoginUsername] = useState("")
   const [loginpassword , setLoginPassword] = useState("")

   const [cart , setCart] = useState([])
  

   
   const ProductList = async () =>{
    try{      
       const productList = await axios.get(`${url}/product/tableproduct`)
       setProductData(productList.data)
      }
    catch(err){
      console.log(`Error Name :${err.name} , Error Message : ${err.message}`)
    }
   }

   useEffect(() =>{
    ProductList()
   } , [])

   const RegisterSubmitFun = async (e) => {
     try{
       e.preventDefault()

      // console.log("RegisterSubmitFun triggered")
       var registerData = {
        username,password,email
       }
       await axios.post(`${url}/user/add` ,registerData)
       alert("Registered successfully")
       setUsername("")
       setEmail("")
       setPassword("")
     }
     catch(err){
      console.log(`Error Name :${err.name} , Error Message : ${err.message}`)
    }
   }

   const LoginSubmitFun = async (e) => {
    try{
      e.preventDefault()

      localStorage.setItem("username" , loginUsername)

      var loginData = {
        username : loginUsername,
        password : loginpassword
      }
      await axios.post(`${url}/user/login` , loginData)
      alert("Login Successfully!")
       navigate("/home")
    }
    catch(err){
      console.log(`Error Name :${err.name} , Error Message : ${err.message}`)
    }
   }

   const LogOutFun = () => {
    localStorage.removeItem("username")
    navigate("/")
    alert("User logedOut!")
   }
   
   const SearchFun = (e) =>{
    setInput(e.target.value)
    setFilteredData(productData.filter(a => a.type && a.type.toLowerCase().includes(input.toLowerCase())))
    // console.log(filteredData)
   }


  //  ================== addto cart ===========================
   const AddtocartFun = (value) => {
    var FindData = productData.find(a => a._id === value._id)
    var ExistingProduct = cart.find(a => a._id === value._id)
    if(ExistingProduct){
     setCart(cart.map(a=> a._id === value._id
      ?
      {...a , quantity : a.quantity + 1}
      :
      a
     ))
    }
    else{
      setCart([...cart, {...FindData,quantity : 1}])
    }
   }


   const RemoveCartFun = (value) =>{
    var productFind = cart.find(a => a._id === value._id)
    if(productFind.quantity > 1){
      setCart(cart.map(a =>a._id === value._id
        ?
        {
          ...a, quantity: a.quantity -1
        }
        :
        a
      ))
    }
    else{
      setCart(cart.filter(a => a._id !== value._id));
    }
   }

   const grandTotal = cart.reduce((acc , item) => acc + item.price*item.quantity,0);

   const ContextValue = {
    navigate,
    setInput,
    filteredData,
    productData,
    username,setUsername,
    email,setEmail,
    password,setPassword,
    loginUsername,setLoginUsername,
    loginpassword,setLoginPassword,
    RegisterSubmitFun,
    LoginSubmitFun,
    LogOutFun,
    SearchFun,
    cart,setCart,
    AddtocartFun,
    RemoveCartFun,
    grandTotal,
    
  }
  return (
    <>
    <MyContext.Provider value={ContextValue}> 
      {children}
    </MyContext.Provider>
    </>
  )
}

export default MyContextProvider