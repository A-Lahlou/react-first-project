import React from 'react'
import {Swiper , SwiperSlide, useSwiper } from 'swiper/react'
import "swiper/css"
import './BestScorers.css'
import { sliderSettings } from '../../utils/common'
// import data from '../../utils/slider.json'
import IMG7 from '../../images/Players/Embiid_image.png'
 import IMG8 from '../../images/Players/Luka_Doncic_image.png'
 import IMG9 from '../../images/Players/SGA_image.png'
 import IMG10 from '../../images/Players/Giannis_image.png'
 import IMG11 from '../../images/Players/Kevin_Durant_image2.png'
 import IMG12 from '../../images/Players/Booker_image.png'
 import IMG13 from '../../images/Players/Mitchell_image.png'
 import IMG14 from '../../images/Players/Curry_image.png'
import IMG15 from '../../images/Players/Fox_image.png'
 import IMG16 from '../../images/Players/Trae_image.png'
const BestScorers = () => {
  const data = [
    {
      name: "Joel Embiid",
      ranking: "1st",
      score: "35.3 Points",
      image: IMG7
    },
    {
      name: "Luka Doncic",
      ranking: "2nd",
      score: "34.7 Points",
      image: IMG8
    },
    {
      name: "Shai Gilgeous-Alexander",
      ranking: "3rd",
      score: "31.3 Points",
      image: IMG9
    },
    {
      name: "Giannis Antetokounmpo",
      ranking: "4th",
      score: "30.9 Points",
      image: IMG10
    },
    {
      name: "Kevin Durant",
      ranking: "5th",
      score: "28.4 Points",
      image: IMG11
    },
    {
      name: "Devin Booker",
      ranking: "6th",
      score: "28.3 Points",
      image: IMG12
    },
    {
      name: "Donovan Mitchell",
      ranking: "7th",
      score: "28.2 Points",
      image: IMG13
    },
    {
      name: "Stephen Curry",
      ranking: "8th",
      score: "27.5 Points",
      image: IMG14
    },
    {
      name: "De'Aaron Fox",
      ranking: "9th",
      score: "27.2 Points",
      image: IMG15
    },
    {
      name: "Trae Young",
      ranking: "10th",
      score: "27.0 Points",
      image: IMG16
    }
  ]
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


