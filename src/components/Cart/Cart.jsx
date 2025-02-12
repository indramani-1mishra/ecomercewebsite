import { useDispatch, useSelector } from "react-redux";
import './Cart.css';
import { removeToCart } from "../../Store/ReduxStore";
import { useState, useEffect } from "react";

export default function Cart() {
    const cartsId = useSelector((state) => state.products.data);
    const items = useSelector((state) => state.products.counter);
    const [totalPrice1, SetTotalPrice1] = useState(0);
    const dispatch = useDispatch();
    
     const removeCart1 = (id) => {
        dispatch(removeToCart(id));
    } 
    useEffect(() => {
        let total = 0;
        cartsId.forEach((cart) => {
            total += cart.price; 
        });
        SetTotalPrice1(total);
    }, [cartsId, items]);  

    return (
        <div>
            {cartsId.map((cart) => {
                return (
                    <>
                        <div className="cartContainerandpriceDetails">
                            <div className="buttonandCartContainer">
                                <div className="cartContainer">
                                    <div className="imageContainer">
                                        <img src={cart.image} alt="image" />
                                    </div>
                                    <div className="detailsContainer">
                                        <h2>Date: {cart.Date}</h2>
                                      
                                        <h2>Product Name : {cart.title}</h2>
                                        <h2>Price : {cart.price}</h2>
                                        <h2>Category : {cart.categery}</h2>
                                    </div>
                                </div>
                                <div className="buttonContainer">
                                    <button>buy now</button>
                                    <button className="removebtn" onClick={() => removeCart1(cart.id)}>remove</button>
                                </div>
                            </div>
                        </div>
                    </>
                );
            })}
            <div className="priceDetalis">
                <div className="sp">
                    <span >price details</span>
                </div>
                <div>
                    <p>Price items({items}):{Math.round(totalPrice1*1.2)}</p>
                    <p>Discount:20%</p>
                    <p>Delivery charges:0</p>
                    <p>buy more save more -1000</p>
                    <p>protectted fee :28</p>
                </div>
                <div><p className="sp">Total Price: {Math.round(totalPrice1)}</p></div>
            </div>
        </div>
    );
}
