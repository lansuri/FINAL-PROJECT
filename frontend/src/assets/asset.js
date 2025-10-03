import topbar from "../assets/Images/navbar/topbar.png"
import logo from "../assets/Images/navbar/logoimg.jpg"
import search from "../assets/Images/navbar/search.png"
import search2 from "../assets/Images/navbar/search2.png"

// ==============swipper==================================
import veg from "../assets/Images/Swipper/vegimg.jpg" 
import fruit from "../assets/Images/Swipper/fruit.jpg"
import leafy from "../assets/Images/Swipper/leafy.jpg"
import root from "../assets/Images/Swipper/root.jpg"
import dairy from "../assets/Images/Swipper/dairy.jpg"

// =============== flash deal============================
import deal1 from "../assets/Images/Swipper/deal1.webp"
import deal2 from "../assets/Images/Swipper/deal2.jpg"
import deal3 from "../assets/Images/Swipper/deal3.png"
import deal4 from "../assets/Images/Swipper/deal.webp"
import deal5 from "../assets/Images/Swipper/deal5.webp"
import deal6 from "../assets/Images/Swipper/deal6.webp"
import deal7 from "../assets/Images/Swipper/deal7.webp"
import deal8 from "../assets/Images/Swipper/deal8.webp"
import deal9 from "../assets/Images/Swipper/deal9.webp"
import deal10 from "../assets/Images/Swipper/deal10.jpg"
import deal11 from "../assets/Images/Swipper/deal11.jpg"
import deal12 from "../assets/Images/Swipper/deal12.webp"
import deal13 from "../assets/Images/Swipper/deal13.webp"
import deal14 from "../assets/Images/Swipper/deal14.webp"
import deal15 from "../assets/Images/Swipper/deal15.jpg"

// ==================Deals===========================
import flash1 from "../assets/Images/Swipper/flash1.jpg"
import flash2 from "../assets/Images/Swipper/flash2.jpg"
import flash3 from "../assets/Images/Swipper/flash3.jpg"
import flash4 from "../assets/Images/Swipper/flash4.jpg"
import flash5 from "../assets/Images/Swipper/flash5.jpg"
import flash6 from "../assets/Images/Swipper/flash6.jpg"
import flash7 from "../assets/Images/Swipper/flash7.jpg"
import flash8 from "../assets/Images/Swipper/flash8.jpg"
import flash9 from "../assets/Images/Swipper/flash9.jpg"
import flash10 from "../assets/Images/Swipper/flash10.jpg"

// =================section=========================
import section1 from "../assets/Images/Swipper/section1.webp"
import section2 from "../assets/Images/Swipper/section2.jpg"
import section3 from "../assets/Images/Swipper/section3.webp"
import section4 from "../assets/Images/Swipper/section4.jpeg"

// =====================about=======================
import about from "../assets/Images/About/about.png"

// ===================slide===================
import slide1 from "../assets/Images/Swipper/slide1.jpg"
import slide2 from "../assets/Images/Swipper/slide 2.jpg"
import slide3 from "../assets/Images/Swipper/slide3.jpg"

export const alldatas = {
    topbar,
    logo,
    search,
    search2,

    // ================swiper==========================
    veg, 
    fruit,
    leafy,
    root,
    dairy,

    // ============== flash deal====================
    deal1,
    deal2,
    deal3,
    deal4,
    deal5,
    deal6,
    deal7,
    deal8,
    deal9,
    deal10,
    deal11,
    deal12,
    deal13,
    deal14,
    deal15,

    // ================deal of day=================
   flash1,
   flash2,
   flash3,
   flash4,
   flash5,
   flash6,
   flash7,
   flash8,
   flash9,
   flash10,

   //  =====================section=======================
   section1,
   section2,
   section3,
   section4,

//    =========about================
   about,

//    =========slide===============
  slide1,
  slide2,
  slide3,
}

// =============JSON DATAS=========

export var Datas=[
    // =============flash deal============
    {
        id:1,
        img:deal1,
        name:"Bindhi",
        price:9,
        category:"Flashdeal",
        weight:250
    },
    {
        id:2,
        img:deal2,
        name:"Lemon",
        price:15,
        weight:400,
        category:"Flashdeal"
    },
    {
        id:3,
        img:deal3,
        name:"Onion",
        price:45,
        weight:500,
        category:"Flashdeal"

    },
    {
        id:4,
        img:deal4,
        name:"Potato",
        price:30,
        weight:500,
        category:"Flashdeal"
    },
    {
        id:5,
        img:deal5,
        name:"Colocasia",
        price:27,
        weight:350,
        category:"Flashdeal"
    },
    {
        id:6,
        img:deal6,
        name:"Corn",
        price:12,
        weight:2,
        category:"Flashdeal"
    },
    {
        id:7,
        img:deal7,
        name:"Guava",
        price:15,
        weight:750,
        category:"Flashdeal"
    },
    {
        id:8,
        img:deal8,
        name:"Capsicum",
        price:20,
        weight:500,
        category:"Flashdeal"
    },
    {
        id:9,
        img:deal9,
        name:"Bitter Guard",
        price:35,
        weight:400,
        category:"Flashdeal"
    },
    {
        id:10,
        img:deal10,
        name:"Coriander",
        price:1,
        weight:100,
        category:"Flashdeal"
    },
    {
        id:11,
        img:deal11,
        name:"Gongura",
        price:4,
        weight:200,
        category:"Flashdeal"
    },
    {
        id:12,
        img:deal12,
        name:"Mango",
        price:12,
        weight:800,
        category:"Flashdeal"
    },
    {
        id:13,
        img:deal13,
        name:"Apple Simla",
        price:25,
        weight:500,
        category:"Flashdeal"
    },
    {
        id:14,
        img:deal14,
        name:"Tomato",
        price:25,
        weight:300,
        category:"Flashdeal"
    },
    {
        id:15,
        img:deal15,
        name:"Bajii Chilli",
        price:30,
        weight:600,
        category:"Flashdeal"
    },

    // ================deal of the day=========================

    {
        id:16,
        img:flash1,
        name:"Beetroot",
        price:30,
        weight:900,
        category:"deal"
    },
    {
        id:17,
        img:flash2,
        name:"Baby Potato",
        price:10,
        weight:750,
        category:"deal"
    },
    {
        id:18,
        img:flash3,
        name:"Bottle Guard",
        price:15,
        weight:500,
        category:"deal"
    },
    {
        id:19,
        img:flash4,
        name:"Mint Leaves",
        price:2,
        weight:100,
        category:"deal"
    }, 
    {
        id:20,
        img:flash5,
        name:"Orange Nagpur",
        price:40,
        weight:500,
        category:"deal"
    },
    {
        id:21,
        img:flash6,
        name:"Custard Apple",
        price:35,
        weight:750,
        category:"deal"
    },
    {
        id:22,
        img:flash7,
        name:"Raw-Banana",
        price:20,
        weight:"500",
        category:"deal"
    },
    {
        id:23,
        img:flash8,
        name:"Panner",
        price:40,
        weight:350,
        category:"deal"
    },
    {
        id:24,
        img:flash9,
        name:"Brinjal",
        price:14,
        weight:700,
        category:"deal"
    },
    {
        id:25,
        img:flash10,
        name:"Peas",
        price:8,
        weight:250,
        category:"deal"
    }      
]