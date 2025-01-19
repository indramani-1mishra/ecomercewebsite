
import { Routes,Route } from 'react-router-dom'
import './App.css'
import Product from './components/Product/Product'
import ProductDetails from './components/ProductDetails/ProductDetails'

function App() {
  

  return (
    <>  
   
     <Routes>
       <Route path="/" element={<Product />} />
       <Route path="/dis/:id" element={<ProductDetails />} />


     </Routes>
    </>
  )
}

export default App
