import React from 'react'

import { useEffect} from 'react'
import { Link} from 'react-router-dom'

import './HeaderFx.scss'


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
            const header = document.querySelector('#header-section2');
            const scrollTop = window.scrollY;
            scrollTop >= 60 ? header.classList.add('is-sticky2') : header.classList.remove('is-sticky2');
        };

  return (
      <div id='top'>
        {/* <Footer /> */}
    <header id='header-section2' >
    <div className='header2'  >
      <div className='header_content2'>  
        <ul>
          
          <li><Link to='/Photos' element={<Photos/>}>photos</Link></li>
          <li><Link to='/Tours '>tours</Link></li>
          <li><Link to='/Director'>about us</Link></li>
          <li><Link to='/Guids'>guids</Link></li>
        </ul>
        <div className=' logo2' >
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