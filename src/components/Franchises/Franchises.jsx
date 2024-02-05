import React from 'react'
import './Franchises.css'
import IMG1 from '../../images/logos/Celtics.logo.png'
import IMG2 from '../../images/logos/Sixers.logo.png'
import IMG3 from '../../images/logos/Suns.logo.png'
import IMG4 from '../../images/logos/Warriors.logo.png'
const Franchises = () => {
  return (
  <section className="f-wrapper">
    <div className="paddings innerWidth flexcenter f-container">
      <img src={IMG1} alt="logo Warriors" />
      <img src={IMG2} alt="logo Sixers" />
      <img src={IMG3} alt="logo Suns" />
      <img src={IMG4} alt="logo Celtics" />
    </div>
  </section>
  )
}

export default Franchises
