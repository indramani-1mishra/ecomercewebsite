import Cards from "../Cards/Cards";
import CustomComponet from "../CustomComponents/CustomComponet"
import './Product.css';

 function Product() {

    const product =  CustomComponet('https://fakestoreapi.com/products');

   

  return (
    <>
    <div className="itemcontainer">
      {product.map(item=> <Cards  key={item.id}
                             title={item.title} 
                            image={item.image} 
                            price={item.price}
                            categery={item.category}
                            rating={item.rating.rate}
                             count={item.rating.count} 
                             id={item.id}
                              
                             />)}
                           
    </div>
   
    </>
  )
}
export default Product;