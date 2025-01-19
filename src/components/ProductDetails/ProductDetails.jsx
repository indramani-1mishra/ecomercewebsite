import { useParams } from "react-router-dom"
import CustomComponet from "../CustomComponents/CustomComponet";
import './Product2.css';


export default function ProductDetails() {
 
       const id= useParams();
       console.log(id.id);
       
       const product =  CustomComponet(`https://fakestoreapi.com/products/${id.id}`);
      // console.log(product.rating.rate);
      function onClickHandler()
      {
          window.history.back();  // Go back to the previous page using JavaScript history API.  Note: This is a workaround and won't work perfectly in all browsers.  For a production-grade solution, you might want to consider using a library like react-router-dom.  Also, this code will not work if you are using a server-side rendering solution.
      }


  return (
    <div className="rajs">
        <h1>Product Details</h1>
         {product && (
            <div className="rajk">
                <div>
                <img src={product.image} alt={product.title} />
                </div>
                <div>
                <h2>{product.title}</h2>
                <p> price:${product.price}</p>
                <p> categery:{product.category}</p>
                <span className="span2">{product.description}</span>
               
    
                 </div>
                 <button onClick={onClickHandler} className="button1">back to page</button> 
            </div>
         )}
      
    </div>
  )
}
