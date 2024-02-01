import React from 'react'
import "./Hero.css"


const Hero = () => {
  return (
<section className="hero-wrapper">
    <div className="paddings innerWidth flexcenter hero-container">
      {/* left side */}
        <div className=" flexcolstart hero-left"> 
            <div className="hero-title">
              {/* <img src="./public/images/Trophée-NBA.png" alt="image Trophée NBA" /> */}
              <h1>
                 NBA 2023/2024 <br/>SEASON
              </h1>
            </div>
       

        <div className="flexcolstart hero-des">
          <span className='whitetext'>All you need to know about the NBA season is right there !</span>
        </div>
        </div>


        {/* rigth side */}
        <div className="flexcenter hero-right">
          <div className="image-container">
            <img src="./images/Kevin-Durant.png" alt="image Kevin durant" />
          </div>
      
            
        </div>
    
    </div>
</section>
  )
}

export default Hero
