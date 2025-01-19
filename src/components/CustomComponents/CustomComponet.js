import axios from "axios";
import { useState,useEffect } from "react";

export default  function CustomComponet(url) {
  const [product,SetProduct]= useState([]);

    async function getProduct()
    {
        const response = await axios.get(url);
        SetProduct(response.data);
    }
  
  
   useEffect(() =>
  {
      getProduct();
  },[]);
  
  return product;


}
