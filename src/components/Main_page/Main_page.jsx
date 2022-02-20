import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

import { useEffect} from 'react'


import Aos from 'aos';
import "aos/dist/aos.css"

import './Main_page.scss'
import Tours from '../Tours/Tours';
const Main_page = () => {

  useEffect(() => {
    Aos.init({duration: 500});
  }, []);

  

  
  return (
    
    <div >
      <div className='main'>
        <div className='choise' id='main' >
          <button>winter</button>
          <button>summer</button>
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
          <div className='left_images' data-aos='fade-left' >
            <img src="https://i.ibb.co/KjXjSwT/skiing.png" alt="" />
          </div>

          <div>
            <div className='right_images' data-aos='fade-right' >
              <div className='hb'id='tours' >
                
                <img src="https://i.ibb.co/5Yxgjrf/mountain.png" alt="" />
                <p>name</p>
              </div>
              <div className='hb'  >
                <img src="https://i.ibb.co/5Yxgjrf/mountain.png" alt="" />
                <p>name</p>
              </div>
              <div className='hb' >
                <img src="https://i.ibb.co/5Yxgjrf/mountain.png" alt="" />
                <p>name</p>
              </div>
              <div className='hb' >
                <img src="https://i.ibb.co/5Yxgjrf/mountain.png" alt="" />
                <p>name</p>
              </div>
              <div>
                <img src="https://i.ibb.co/5Yxgjrf/mountain.png" alt="" />
                <p>name</p>
              </div>
              <div>
                <img src="https://i.ibb.co/5Yxgjrf/mountain.png" alt="" />
                <p>name</p>
              </div>
            </div>
          </div>
        </div>
        
        
      </div>
    </div>
  )
}

export default Main_page;