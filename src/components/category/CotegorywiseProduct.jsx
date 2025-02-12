import axios from 'axios';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTocart } from '../../Store/ReduxStore';
import DisplayDetails from '../Login/displayDetails';
export default function CotegorywiseProduct() {
  const selectedCategory = useSelector((state) => state.category.category); // Selected category from Redux store
  const [categoryProduct, setCategory] = useState([]); // State to store category products
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state
  const dispatch = useDispatch();

  // Fetch category products from API
  async function getCategory() {
    try {
      setLoading(true); // Start loading
      const response = await axios.get(`https://fakestoreapi.com/products/category/${selectedCategory}`);
      setCategory(response.data); // Set the fetched products
      setLoading(false); // Stop loading
    } catch (err) {
      setLoading(false); // Stop loading on error
      setError("Error fetching data."); // Set error message
    }
  }

  useEffect(() => {
    getCategory(); // Fetch products whenever the selected category changes
  }, [selectedCategory]);

  // Handle Add to Cart for each item
  const onAddToCart = (item) => {
    dispatch(addTocart(item)); // Dispatch the action to add the product to the cart
    console.log(item.title + " added to cart");
  };

  return (
    <div className="categoryContainer">
      {loading && <p>Loading products...</p>} {/* Show loading message */}
      {error && <p>{error}</p>} {/* Show error message */}

      {categoryProduct.length > 0 ? (
        categoryProduct.map((item) => (
          <div className="raj" key={item.id}>
            <div className="imagec">
              <img src={item.image} alt={item.title} className="image" />
            </div>
            <div className="details">
              <h3>{item.title}</h3>
              <p>Category: {item.category}</p>   
              <p>Price: ${item.price}</p>

              <p className="para">
                <span className="ratecount">Rating: {item.rating?.rate}</span> {/* Using optional chaining */}
                <span className="ratecount">Count: {item.rating?.count}</span> {/* Using optional chaining */}
              </p>

              <button onClick={() => onAddToCart(item)} id="addto">Add to Cart</button>
            </div>
          </div>
        ))
      ) : (
              <DisplayDetails />
            )}
    </div>
  );
}
