import React from 'react'
import {Swiper , SwiperSlide, useSwiper } from 'swiper/react'
import "swiper/css"
import './BestScorers.css'
import { sliderSettings } from '../../utils/common'
 import data from '../../utils/slider.json'
const BestScorers = () => {
  return (
    <section className="r-wrapper">
        <div className="paddings innerWidth r-container">
          <div className="b-head flexcolstart">
            <span className='bestscorerstext'>Best Scorers</span>
            <span className='rankingtext'>Ranking</span>
          </div>
          <Swiper {...sliderSettings}>
            <SliderButtons/>
            {data.map((card, i)=> (
                <SwiperSlide key={i}>
                  <div className="flexcolstart b-card">
                    <img src={card.image} alt="Players" />
<span className="secondarytext b-ranking">
  <span>{card.ranking}</span>
</span>
<span className='primarytext'>{card.name}</span>
<span className='secondarytext'>{card.score}</span>
                  </div>
                </SwiperSlide>
              ))
            }
          </Swiper>
        </div>

    </section>
    
  )
}


export default BestScorers;

const SliderButtons = ()=> {
  const swiper = useSwiper();
  return(
    <div className="flexcenter b-buttons">
      <button onClick={()=> swiper.slidePrev()}>&lt;</button>
      <button onClick={()=> swiper.slideNext()}>&gt;</button>
    </div>
  )
}


