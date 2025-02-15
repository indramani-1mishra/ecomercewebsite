
import { Routes,Route } from 'react-router-dom'
import './App.css'
import Product from './components/Product/Product'
import ProductDetails from './components/ProductDetails/ProductDetails'
import Hoc from './components/Hoc/Hoc'
import AuthContextProvider from './AuthContext/AuthContext'
import Login from './components/Login/Login'
import DisplayDetails from './components/Login/displayDetails'
import Cart from './components/Cart/Cart'
import { InputProvider } from './InputContext/InputContext'
import SearchDisplay from './components/SearchDisplay/SearchDisplay'
import Header from './components/Header/Header'
import CotegorywiseProduct from './components/category/CotegorywiseProduct'
import UserDeatils from './components/UserDetails/UserDeatils'




function App() {
  return (
    <>  
       <InputProvider>
       <AuthContextProvider>
        <Routes>
          <Route path="/" element={<Product />} />
          
          <Route  path="/data" element={<DisplayDetails/>}/> 
          <Route path="/dis/:id" element={<ProductDetails />} />
          <Route path="/login" element={<Login/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path='/search' element={<SearchDisplay/>}/>
          <Route path='/header' element={<Header/>}/>
          <Route path='/cate'    element={<CotegorywiseProduct/>}/>
           <Route path='/user' element={<UserDeatils/>}/>

          

     </Routes>
        </AuthContextProvider>
       
       </InputProvider>
    
 
    </>
  )
}

export default Hoc(App);
