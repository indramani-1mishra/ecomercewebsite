import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { addTocart } from "../../Store/ReduxStore";
import DisplayDetails from "../Login/displayDetails";

export default function SearchDisplay() {
  const [categoryProduct, setCategory] = useState([]);  // State to hold category products
  const [popupVisible, setPopupVisible] = useState(false);  // State to control popup visibility
  const [addedProduct, setAddedProduct] = useState(null);  // Store the added product
  const inputData = useSelector((state) => state.search.searchTerm);  // Search term from Redux store
  const dispatch = useDispatch();

  // Fetch data from API based on category
  async function getCategoryFromApi(category) {
    try {
      const response = await axios.get(`https://fakestoreapi.com/products/category/${category}`);
      console.log(response.data + " category");
      setCategory(response.data);  // Updating state with fetched data
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  // UseEffect hook to trigger API call when inputData changes
  useEffect(() => {
    if (inputData) {
      setCategory([]);  // Reset category products when inputData changes
      getCategoryFromApi(inputData);  // Fetch products for the selected category
    }
  }, [inputData]);  // Dependency array ensures API is called when inputData changes

  // Handle the "Add to Cart" click for a single item
  const onClickHandler = (item) => {
    dispatch(addTocart(item));  // Dispatch addToCart action with the clicked item
    setAddedProduct(item);  // Store the added product in state
    setPopupVisible(true);  // Show the success popup
    console.log("Item added to cart", item);
  };

  // Handle "Ok" button click to hide the popup
  const onOkButtonClick = () => {
    setPopupVisible(false);  // Hide the popup
  };

  return (
    <div className="categoryContainer">
      {categoryProduct.length > 0 ? (
        categoryProduct.map((item) => (
          <div className="raj" key={item.id}>
            <div className="imagec">
              <img src={item.image} alt={item.title} className="image" />
            </div>
            <div className="details">
              <h3>{item.title}</h3>
              <p>Category: {inputData}</p>
              <p>Price: ${item.price}</p>
             
              <p className="para">
                <span className="ratecount">Rating: {item.rating?.rate}</span> {/* Using optional chaining */}
                <span className="ratecount">Count: {item.rating?.count}</span> {/* Using optional chaining */}
              </p>
             
              <button onClick={() => onClickHandler(item)} id="addto">Add to Cart</button>
            </div>
          </div>
        ))
      ) : (
        <DisplayDetails />
      )}

      {/* Popup that appears after adding to cart */}
      {popupVisible && (
        <div className="popup">
          <p className="para1">Product {addedProduct?.title} added to cart successfully!</p>
          <button id="btn" onClick={onOkButtonClick}>Ok</button>
        </div>
      )}
    </div>
  );
}
