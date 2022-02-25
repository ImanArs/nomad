import { useState, useEffect } from 'react'
import axios from 'axios'

import './Tours.scss'

import Aos from 'aos';
// import ToursJSON from '../../../'

import {Link} from 'react-router-dom'
import TourPage from './TourPage'
import Fx_Header from '../Fixed_Header/Header_Fx';
import Header from '../Header/Header';


export default function Tours() {
    const [countries, setCountries] = useState([])
    const [value, setValue] = useState('')


    const getToursData = () => {
        axios.get('https://620f994cec8b2ee28345f5a4.mockapi.io/tour')
        .then(resp => setCountries(resp.data))
    }
    useEffect(()=> {
      getToursData()
    }, []) 

    const newArrLakes = countries.filter(item => {
      return item.type === "lake"
    });
    const newArrWaterFall = countries.filter(item => {
      return item.type === "waterfall"
    });
    const newArrCanyon = countries.filter(item => {
      return item.type === "canyon"
    });
    const newArrMount = countries.filter(item => {
      return item.type === "mountain"
    });

    return (
        <div className='tours' >
          <Fx_Header />
          <div className='tour'>

                <h2>lakes</h2>
              <div className='grid'>
            {
               newArrLakes.map(item => (
                  <div >
                    <Link key={item.id} to={`/Tours/${item.id}`} >
                    <div key={item.id}  data-aos='fade-up'>
                        <img src={item.img} />
                        <p>{item.name}</p>
                    </div>
                    </Link>
                  </div> 
              
              ))
            }
            </div>
                <h2>waterfall</h2>
            <div className='grid'>
            {
               newArrWaterFall.map(item => (
                  <div  >
                    <Link key={item.id} to={`/Tours/${item.id}`} >
                    <div key={item.id}  data-aos='fade-up' >
                      <div >
                        <img src={item.img}  />
                      </div>
                        <p>{item.name}</p>
                    </div>
                    </Link>
                  </div> 
              
              ))
            }
            </div>
              <h2>canyons</h2>
            <div className='grid'>
            {
               newArrCanyon.map(item => (
                  <div  >
                    <Link key={item.id} to={`/Tours/${item.id}`} >
                    <div key={item.id}  data-aos='fade-up' >
                        <img src={item.img} />
                        <p>{item.name}</p>
                    </div>
                    </Link>
                  </div> 
              
              ))
            }
            </div>

              <h2>mountains</h2>
            <div className='grid'>
            {
               newArrMount.map(item => (
                  <div  >
                    <Link key={item.id} to={`/Tours/${item.id}`} >
                    <div key={item.id}  data-aos='fade-up'>
                        <img src={item.img} />
                        <p>{item.name}</p>
                    </div>
                    </Link>
                  </div> 
              
              ))
            }
            </div>
             
          </div>
      
        </div>
    )
}