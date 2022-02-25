import React from 'react'
import Header from '../Header/Header'

import { useEffect} from 'react'
import { Link } from 'react-router-dom'



import Aos from 'aos';
import "aos/dist/aos.css"

import './Summer_Page.scss'

const Summer_page = () => {

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
        <title>nomad summer</title>
    </head>
    <div >
      <Header />
      <div className='main2'>
        <div className='choise2' id='main' >


            <button>
              <Link to="/">winter</Link>
            </button>
          <button>summer</button>
        </div>
      </div>
      <div className='second2' >
        <div className='HR2'>
          <img src="https://i.ibb.co/hY8BRCg/Broking.png" alt="" />
          <p>
            “An estate agency like no other, The Modern House sells the most incredible design-led homes in urban and rural locations in the UK” — Evening Standard
          </p>
        </div>
      </div>
      <div className='tours2'>
        <h2>our tours</h2>
        <div className='tour_list2'>
          <Link to="/tours">
          <div className='left_images2' data-aos='fade-left' >
            <img src="https://i.ibb.co/JCpqwWS/Lake.png" alt="" />
          </div>
          <div className='overlay__left2' >
          <h2><span>L</span>AKE</h2>
          </div>
          </Link>

          <div>
            <div className='right_images2' data-aos='fade-right' >

              <Link to="/Tours" >
              <div className='hb2'id='tours' >
                  <img className='image__img2'  src="https://i.ibb.co/5Yxgjrf/mountain.png" alt="" />
                  <p className='image__description2'>waterfalls</p>
              </div>
              </Link>

              <Link to="/Tours" >
              <div className='hb2'  >
                <img src="https://i.ibb.co/TgMWMbT/hot-pool.png" alt="" />
                <p>hot springs</p>
              </div>
              </Link>

              <Link to="/Tours" >
              <div className='hb2'  >
                <img src="https://i.ibb.co/HGPRpbm/diving.png" alt="" />
                <p>diving</p>
              </div>
              </Link>

              <Link to="/Tours" >
              <div className='hb2'  >
                <img src="https://i.ibb.co/t2YvfGj/horse.png" alt="" />
                <p>aquestrian tour</p>
              </div>
              </Link>
              
              <Link to="/Tours" >
              <div className='hb2'  >
                <img src="https://i.ibb.co/gRnX2VJ/canyon.png" alt="" />
                <p>canyons</p>
              </div>
              </Link>

              <Link to="/Tours" >
              <div className='hb2'  >
                <img src="https://i.ibb.co/x5H1XjR/parks.png" alt="" />
                <p>parks</p>
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

export default Summer_page;