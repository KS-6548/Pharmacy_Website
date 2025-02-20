import React, { createContext, useState } from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Navibar from './Components/Navibar/Navibar'
import Footer from './Components/Footer/Footer'
import Home from './Pages/Home/Home'
import Cart from './Pages/Cart/Cart'
import Container from './Pages/Auth/Container'
import Products from './Pages/Products/Products'
import SignIn from './Pages/Auth/SignIn'
import SignUp from './Pages/Auth/SignUp'

export const cartContext = createContext();

function App() {
  const [cart, setCart] = useState([])
  const [isAuth, setIsAuth] = useState(false)

  return (
    <cartContext.Provider value={{cart,setCart,isAuth,setIsAuth}}>
      <BrowserRouter>
        <Navibar isAuth={isAuth} setIsAuth={setIsAuth}/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/auth' element={<Container/>}>
            <Route path='/auth/signin' element={<SignIn isAuth={isAuth} setIsAuth={setIsAuth}/>}/>
            <Route path='/auth/signup' element={<SignUp isAuth={isAuth} setIsAuth={setIsAuth}/>}/>
          </Route>
          <Route path='/product' element={<Products/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </cartContext.Provider>
  )
}

export default App