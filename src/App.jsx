
import './App.css'
import NavBar from './Layout/NavBar'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import HomeContainer from './Views/Home/HomeContainer'
import Footer from './Layout/Footer'

import ItemListContainer from './Views/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './Views/ItemDetailContainer/ItemDetailContainer'



function App() {

  return (
    <>
    
   <div>
 <BrowserRouter>
    <NavBar/>
    <main style={{}}>
    <Routes >
<Route exact path='/' element={<HomeContainer />} />
<Route exact path='/vases/:categoryId' element={<ItemListContainer />} />
<Route exact path='/cups/:categoryId' element={<ItemListContainer />} />
<Route exact path='/item/:itemId' element={<ItemDetailContainer />} />
    </Routes>
    </main>
      </BrowserRouter>  
       
      <Footer></Footer>
      </div>
    </>

  )
}

export default App
