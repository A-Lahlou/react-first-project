import React from 'react'
import './Last.css'
import IMG18 from '../../images/logos/NBA.logo.png'
const Last = () => {
  return (
    <section className="l-wrapper">
      <div className="paddings innerWidth flexcenter l-container">
        {/* left side */}
        <div className="flexcolstart l-left">
          <img src={IMG18} alt="logo nba" width={80} />
          <span className='infostext'>
The very best unofficial NBA website
          </span>
        </div>
        <div className="flexcolstart l-right">
          <span className='primaytext'>Information</span>
          <span className='secondarytext'>2 Villa des Vignes, Saint Maurice, 94410</span>
          <div className="flexcenter l-menu">
            <span>Products</span>
            <span>Services</span>
            <span>About Us</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Last

