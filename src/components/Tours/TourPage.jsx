import React from 'react'

import './TourPage.scss'
import Fx_Header from '../Fixed_Header/Header_Fx';


import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const TourPage = () => {
  
  const {id} = useParams();
  const [tour, setTours] = useState(null)
  
  useEffect(() => {
    fetch(`https://620f994cec8b2ee28345f5a4.mockapi.io/tour/${id}`)
      .then(res => res.json())
      .then (data => setTours(data))
  })

  return (
    <div className='tourPG'  >
      <Fx_Header />
      {tour && (
        <>
          <div className='container' >

            <div className='df' >

              <div className='bg' >
                <img src={tour.img} alt="img_of_tour" />
              </div>

              <div>
                <h1>{tour.name}</h1>
              </div>

            </div>

              <div className='text_container' >

                <div className='bgTxt' ></div>
                <div className='txt' >
                  <p>{tour.titles.title}</p>
                </div>

                  <div className='bgTxtR' ></div>
                  <div className='txtR' >
                    <p>{tour.titles.title1}</p>
                  </div>

                <div className='bgTxt' ></div>
                <div className='txt'>
                  <p>{tour.titles.title2}</p>
                </div>

                  <div className='bgTxtR' ></div>
                  <div className='txtR' >
                    <p>{tour.titles.title3}</p>
                  </div>

                  <div className='bgTxt' ></div>
                  <div className='txt'>
                  <p>{tour.titles.title4}</p>
                  </div>
              </div>

          </div>
        </>
      )}
    
    </div>
  )
}

export default TourPage