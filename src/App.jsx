
import './App.css'
import NavBar from './Layout/NavBar'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import HomeContainer from './Views/Home/HomeContainer'


import ItemListContainer from './Views/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './Views/ItemDetailContainer/ItemDetailContainer'
import CartContainer from './Views/Cart/CartContainer'

import { CartProvider } from './context/CartContext'
import CheckOut from './Views/CheckOut/CheckOut'



function App() {
 

  return (
    <>
    
 
 <BrowserRouter>
 <CartProvider>

    <NavBar />

    
    <Routes >
<Route exact path='/' element={<HomeContainer />} />
<Route exact path='/vases/:categoryId' element={<ItemListContainer />} />
<Route exact path='/cups/:categoryId' element={<ItemListContainer />} />

<Route exact path='/item/:itemId' element={
  
  <ItemDetailContainer />
  
  
} />
<Route exact path='/cart' element={<CartContainer/>} />
   <Route exact path='/checkout/:orderId' element = {<CheckOut/>}/>
    </Routes>
</CartProvider>
      </BrowserRouter>  
     
      
    </>

  )
}

export default App
