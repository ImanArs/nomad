import React from 'react'

import { useEffect} from 'react'
import {Link} from 'react-router-dom'

import './Header.scss'

import Photos from '../Photos/Photos'


const Header = () => {

  // Sticky Menu Area
  useEffect(() => {
    window.addEventListener('scroll', isSticky);
    return () => {
        window.removeEventListener('scroll', isSticky);
    };
    });

       
/* Method that will fix header after a specific scrollable */
       const isSticky = (e) => {
            const header = document.querySelector('#header-section');
            const scrollTop = window.scrollY;
            scrollTop >= 60 ? header.classList.add('is-sticky') : header.classList.remove('is-sticky');
        };

  return (
      <div id='top'>
        {/* <Footer /> */}
    <header id='header-section' >
    <div className='header'  >
      <div className='header_content'>  
        <ul>
          
          <li><Link to='/Photos' element={<Photos/>}>photos</Link></li>
          <li><Link to='/Tours '>tours</Link></li>
          <li><Link to='/Director'>about us</Link></li>
          <li><Link to='/Guids'>guids</Link></li>
        </ul>
        <div className=' logo' >
          <span><Link to='/'>nomad tours</Link></span>
        </div>
      </div>
    </div>
    </header>
    
    {/* <Footer /> */}
    
    </div>
  )
}

export default Header