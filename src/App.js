import React from 'react'
import TopNav from './Components/TopNav'
import Home from './Components/Home'
import { Route,Routes,BrowserRouter } from 'react-router-dom'
import Products from './Pages/Products'
// import ProductDetail from './Pages/ProductDetail'


export default function App() {
  return (
    <div>
   <BrowserRouter>
   <TopNav/>
     <Routes>
      <Route path='/' element={<Home/>}/>
       <Route path="/products" element={<Products/>} />
       {/* <Route path="/product/:id" element={<ProductDetail/>} /> */}
   
     </Routes>
   </BrowserRouter>
  </div>
)
}
