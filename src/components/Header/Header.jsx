import React from 'react';
import { FaCartPlus, FaLocationDot } from 'react-icons/fa6';
import { IoIosSearch } from 'react-icons/io';
import './Header.css';

// Importing the image
import rajImage from './rajk.png';
import rajImage1 from './india.png';
import {categories, languages} from './helperCode';

export default function Header() {
  return (
    <nav className='navcontainer'>
      <div className='imgc'>
        {/* Using imported image */}
        <img src={rajImage} alt="Amazon Logo" />
      </div>
      <div className='locaton'>
        <div>
          <span id='raksm'>delivering to sultanpur 228121</span>
        </div>
        <div>
          <span><FaLocationDot /></span>
          <span>updated location</span>
        </div>
      </div>
      <div className='search'>
        <span id='select'>
          <select>
           {Object.entries(categories).map(([key, value]) => <option value={value} key={key}>{value}</option>)}
          </select>
        </span>
        <input type="text" placeholder='search for products, brands or categories' />
        <span id='icon'><IoIosSearch /></span>
      </div>

      {/* Removed unnecessary sections */}
      <div className='links'>
        <div className='fladf'>
          <span><img src={rajImage1} className='raki'></img></span>
          <span>
            <select className='se'>
                {Object.entries(languages).map(([key,value]) =><option value={value} key={key}>{key}</option>)}
            </select>
          </span>
        </div>

        <div className='sign'>
          <span> hello,sign in</span>
          <span>create account &list</span>
        </div>
        
        <div className='sign'>
          <span> return</span>
          <span>&order</span>
        </div>
        {/* Removed this section as per the requirement */}
        <div className='cart'>
          <span><FaCartPlus /></span>
          <span>cart</span>
        </div>
      </div>
    </nav>
  );
}
