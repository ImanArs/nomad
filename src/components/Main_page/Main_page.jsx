import React from 'react'
import Header from '../Header/Header'

import { useEffect} from 'react'
import { Link } from 'react-router-dom'



import Aos from 'aos';
import "aos/dist/aos.css"

import './Main_page.scss'

const Main_page = () => {

  useEffect(() => {
    Aos.init({duration: 500});
  }, []);

  const tours = [
    "https://i.ibb.co/hY8BRCg/Broking.png",
    "https://i.ibb.co/KjXjSwT/skiing.png"
  ]

  

  
  return (
<>
      <head>
        <title> nomad </title>
      </head>
    
    <div >
      
      <Header />
      <div className='main'>
        <div className='choise' id='main' >
          <button>winter</button>

          
          <button>
            
          <Link to='/Summer'>summer</Link>

          </button>
          

        </div>
      </div>
      <div className='second' >
        <div className='HR'>
          <img src="https://i.ibb.co/hY8BRCg/Broking.png" alt="" />
          <p>
            “An estate agency like no other, The Modern House sells the most incredible design-led homes in urban and rural locations in the UK” — Evening Standard
          </p>
        </div>
      </div>
      <div className='tours'>
        <h2>our tours</h2>
        <div className='tour_list'>
          <Link to="/Tours">
          <div className='left_images' data-aos='fade-left' >
            <img src="https://i.ibb.co/KjXjSwT/skiing.png" alt="" />
          </div>
          <div className='overlay__left' >
            
          <h2><span>S</span>KIING</h2>
          </div>
          </Link>

          <div>
            <div className='right_images' data-aos='fade-right' >

              <Link to="/Tours" >
              <div className='hb'id='tours' >
                  <img className='image__img'  src="https://i.ibb.co/5Yxgjrf/mountain.png" alt="" />
                  <p className='image__description'>waterfalls</p>
              </div>
              </Link>

              <Link to="/Tours" >
              <div className='hb'  >
                <img src="https://i.ibb.co/GxGwzvB/pool.png" alt="" />
                <p>hot springs</p>
              </div>
              </Link>

              <Link to="/Tours" >
              <div className='hb'  >
                <img src="https://i.ibb.co/VSPsk5v/carier.png" alt="" />
                <p>georges</p>
              </div>
              </Link>

              <Link to="/Tours" >
              <div className='hb'  >
                <img src="https://i.ibb.co/t2YvfGj/horse.png" alt="" />
                <p>aquestrian tour</p>
              </div>
              </Link>
              
              <Link to="/Tours" >
              <div className='hb'  >
                <img src="https://i.ibb.co/12CSjnz/too-ashu.png.png" alt="" />
                <p>lake</p>
              </div>
              </Link>

              <Link to="/Tours" >
              <div className='hb'  >
                <img src="https://i.ibb.co/nmqpwB0/kegety-george.png" alt="" />
                <p>mountains</p>
              </div>
              </Link>

            </div>
          </div>
        </div>
        
        
      </div>
    </div>
    </>    
  )
}

export default Main_page;