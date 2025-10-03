import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Formpage from './Pages/Formpage'
import MyContextProvider from './Context/MyContextProvider'
import Homepage from './Pages/Homepage'
import Vegetablespage from './Pages/Vegetablespage'
import Fruitspage from './Pages/Fruitspage'
import Dairyproductspage from './Pages/Dairyproductspage'
import Leafyvegetablespage from './Pages/Leafyvegetablespage'
import Rootvegetablespage from './Pages/Rootvegetablespage'
import Productpage from './Pages/Productpage'
import Protect from './Pages/Protect'
import Faqspage from './Pages/Faqspage'
import Contactpage from './Pages/Contactpage'
import Aboutpage from './Pages/Aboutpage'



const App = () => {
  return (
    <>
     <BrowserRouter>
     <MyContextProvider>
       <Routes>
       <Route path='/' element={<Formpage/>}/>
       <Route path='/home' element={<Protect><Homepage/></Protect>}/>
       <Route path='/vegetable' element={<Protect><Vegetablespage/></Protect>}/>
       <Route path='/fruit' element={<Protect><Fruitspage/></Protect>}/>
       <Route path='/leafy' element={<Protect><Leafyvegetablespage/></Protect>}/>
       <Route path='/root' element={<Protect><Rootvegetablespage/></Protect>}/>
       <Route path='/dairy' element={<Protect><Dairyproductspage/></Protect>}/>
       <Route path='/faqs' element={<Protect><Faqspage/></Protect>}/>
       <Route path='/product/:id' element={<Protect><Productpage/></Protect>}/>
       <Route path='/contact' element={<Protect><Contactpage/></Protect>}/>
       <Route path='/about' element={<Protect><Aboutpage/></Protect>}/>
       </Routes>
     </MyContextProvider> 
      
     </BrowserRouter>

    </>
  )
}

export default App
