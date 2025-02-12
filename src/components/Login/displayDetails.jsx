import React from 'react';
import { useAuth } from '../../AuthContext/AuthContext';
import { useNavigate } from 'react-router-dom';

import Product from '../Product/Product';
import Cart from '../Cart/Cart';

export default function DisplayDetails() {
  const navigate = useNavigate();
  const { user, password1, logout, IsLoggin } = useAuth();  // IsLoggin ko IsLoggedIn me change kiya hai

  const onClickHandler = () => {
    logout();
    alert('You have been logged out');
    navigate('/login'); // Redirect to login page after logout
  };
  // If user is logged in, show product details, otherwise show a login button.
   
   console.log(IsLoggin);


  return (
    <>
      {IsLoggin ? (
        <Product/>
      ) : (
        <div>
          <h1>Please Login First</h1>
          <button onClick={() => navigate('/login')}>Login</button>
        </div>
      )}
    </>
  );
}
