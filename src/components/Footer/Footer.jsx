import React from 'react'
import {Link} from 'react-scroll'

import './Footer.scss'

import "aos/dist/aos.css"

const Footer = () => {

  return (
    <footer id='footer' >
      <div className='footer' >
        <div>
          <h2>ABOUT</h2>
          <p>Company</p>
          <p>Guides</p>
          <p>Tours</p>
          <p>Places</p>
        </div>
        <div>
          <h2>CONTACT</h2>
          <p>Request a valuation</p>
          <p>Receive property alerts</p>
          <p>+44 (0)20 3795 5920</p>
          <p>info@themodernhouse.com</p>
        </div>
        
        <div className='arrow'  >
        <Link to="top" spy={true} smooth={true} offset={0} duration={700} >
          <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22 40.3332C32.1252 40.3332 40.3334 32.1251 40.3334 21.9998C40.3334 11.8746 32.1252 3.6665 22 3.6665C11.8748 3.6665 3.66669 11.8746 3.66669 21.9998C3.66669 32.1251 11.8748 40.3332 22 40.3332Z" stroke="black" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M15.5283 24.3098L22 17.8564L28.4717 24.3098" stroke="black" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </Link>
        </div>
        <div>
          <h2>follow us</h2>
        </div>
        <div className='social_net'>
          <div className='instagram'>
            <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16.5 40.3332H27.5C36.6666 40.3332 40.3333 36.6665 40.3333 27.4998V16.4998C40.3333 7.33317 36.6666 3.6665 27.5 3.6665H16.5C7.33329 3.6665 3.66663 7.33317 3.66663 16.4998V27.4998C3.66663 36.6665 7.33329 40.3332 16.5 40.3332Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M22 28.4168C25.5439 28.4168 28.4167 25.544 28.4167 22.0002C28.4167 18.4563 25.5439 15.5835 22 15.5835C18.4562 15.5835 15.5834 18.4563 15.5834 22.0002C15.5834 25.544 18.4562 28.4168 22 28.4168Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              {/* <path d="M32.3328 12.8332H32.354" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> */}
            </svg>
          </div>
          <div className='facebook'>
            <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M26.0333 5.271C23.7845 5.271 21.6278 6.16433 20.0376 7.75449C18.4475 9.34464 17.5541 11.5013 17.5541 13.7502V18.471H13.0166C12.7888 18.471 12.6041 18.6557 12.6041 18.8835V25.1168C12.6041 25.3446 12.7888 25.5293 13.0166 25.5293H17.5541V38.3168C17.5541 38.5446 17.7388 38.7293 17.9666 38.7293H24.2C24.4278 38.7293 24.6125 38.5446 24.6125 38.3168V25.5293H29.1901C29.3794 25.5293 29.5444 25.4005 29.5903 25.2169L31.1487 18.9835C31.2138 18.7232 31.0168 18.471 30.7485 18.471H24.6125V13.7502C24.6125 13.3733 24.7622 13.0119 25.0286 12.7455C25.2951 12.479 25.6565 12.3293 26.0333 12.3293H30.8C31.0278 12.3293 31.2125 12.1446 31.2125 11.9168V5.6835C31.2125 5.45568 31.0278 5.271 30.8 5.271H26.0333Z" fill="black"/>
            </svg>
          </div>
          <div className='youtube'>
            
            <svg width="38" height="28" viewBox="0 0 38 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M9.81301 0.965763C15.9284 0.487323 22.0718 0.487324 28.1872 0.965764L32.2952 1.28715C34.5833 1.46616 36.4552 3.18105 36.8334 5.4448C37.7798 11.1089 37.7798 16.8907 36.8334 22.5548C36.4552 24.8186 34.5833 26.5335 32.2952 26.7125L28.1872 27.0339C22.0718 27.5123 15.9284 27.5123 9.81301 27.0339L5.70506 26.7125C3.41693 26.5335 1.54505 24.8186 1.16682 22.5548C0.220437 16.8907 0.220437 11.1089 1.16682 5.4448C1.54505 3.18105 3.41692 1.46616 5.70506 1.28715L9.81301 0.965763ZM15.3334 18.5284V9.47122C15.3334 9.04371 15.7998 8.77964 16.1664 8.9996L23.714 13.5282C24.0701 13.7418 24.0701 14.2578 23.714 14.4714L16.1664 19C15.7998 19.22 15.3334 18.9559 15.3334 18.5284Z" fill="black"/>
            </svg>
          </div>
        </div>
      </div>
      
    </footer>
  )
}

export default Footer