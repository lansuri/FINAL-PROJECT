import React from 'react'
import {BrowserRouter, Route, Routes} from'react-router-dom'
import Adminpage from './Pages/Adminpage'
import Viewproducts from './Pages/Viewproducts'
import Viewusers from './Pages/Viewusers'
import ContextProvider from './Context/ContextProvider'



const App = () => {
  return (
    <>
    <BrowserRouter>
    <ContextProvider>
    <Routes>
     <Route path='/' element={<Adminpage/>}/>
     <Route path='/viewproducts' element={<Viewproducts/>}/>
     <Route path='/viewusers' element={<Viewusers/>}/>
    </Routes>
    </ContextProvider>
    </BrowserRouter>
    </>
  )
}

export default App
