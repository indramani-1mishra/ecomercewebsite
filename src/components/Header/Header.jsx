import  { useEffect, useState } from 'react';
import { FaCartPlus, FaLocationDot } from 'react-icons/fa6';
import { IoIosSearch } from 'react-icons/io';
import './Header.css';
import rajImage from './rajk.png';
import rajImage1 from './india.png';

import { categories, languages } from './helperCode';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { updateCategory, updateSearchTerm } from '../../Store/ReduxStore';
import GetCurrentWeatherData from './getCurrentWhetherData';
//import { useAuth } from '../../AuthContext/AuthContext';

export default function Header() {
  const counter = useSelector((state) => state.products.counter);
  const navigate = useNavigate();
  const [inputBoxValue, setInputvalue] = useState('');
  const [latitude,SetLatitude]= useState('');
  const [longitude,Setlongitude]= useState('');

  
      const dispatch = useDispatch();
     const name = useSelector((state)=> state.login.user);
  
   useEffect(()=>
  {
    navigator.geolocation.getCurrentPosition((position) => {
      SetLatitude(position.coords.latitude);
      Setlongitude(position.coords.longitude);
    },
    (error) => {
      console.log(error);
    });
  // console.log("hello"+currentLocation);
  },[]);
 
  const onChangeHandler = (e) => {
    const value = e.target.value;
    setInputvalue(value);
    dispatch(updateSearchTerm(value));
    if (value === "") {
      navigate('/data');
    } else {
      navigate('/search');
    }

    console.log(value + " for global state");
  };
  const onChangeHandler2 = (e) => {
    const value = e.target.value;
   dispatch(updateCategory(value));
   navigate('/cate');
  };
 

  const handleClick = () => {
    navigate('/cart');
  };
  const handleClick1 = () => {
    navigate('/user');
  };




  return (
    <nav className='navcontainer'>
      <div className='imgc'>
        {/* Using imported image */}
        <img src={rajImage} alt="Amazon Logo" />
      </div>
      <div className='locaton'>
        <div>
          <span id='raksm'>
          <GetCurrentWeatherData lat={latitude} lon={longitude} />
          </span>
        </div>
        <div>
          <span><FaLocationDot /></span>
          <span>updated location</span>
        </div>
      </div>
      <div className='search'>
        <span id='select'>
          <select onChange={(e)=>onChangeHandler2(e)}>
            {Object.entries(categories).map(([key, value]) => (
              <option value={value} key={key}>
                {value}
              </option>
            ))}
          </select>
        </span>
        <input
          type="text"
          placeholder="search for products, brands or categories"
          value={inputBoxValue}
          onChange={onChangeHandler} // Handle input change
        />
        <span id='icon'>
          <IoIosSearch />
        </span>
      </div>

      {/* Removed unnecessary sections */}
      <div className='links'>
        <div className='fladf'>
          <span>
            <img src={rajImage1} className='raki' alt="Flag" />
          </span>
          <span>
            <select className='se'>
              {Object.entries(languages).map(([key, value]) => (
                <option value={value} key={key}>
                  {key}
                </option>
              ))}
            </select>
          </span>
        </div>

        <div className='sign' onClick={handleClick1}>
          {
           name?(
           <>
           <span> hello , {name} </span>
           
           </>
           ):
           <>
           <span> hello, sign in</span>
           <span>create account & list</span> 
           </>
          
          }
        </div>

        <div className='sign1'>
          <span> return</span>
          <span>&order</span>
        </div>

        {/* Cart icon */}
        <div className='cart' onClick={handleClick}>
          <span>
            <FaCartPlus />
            {counter}{' '}
          </span>
          <span>cart</span>
        </div>
      </div>
    </nav>
  );
}
