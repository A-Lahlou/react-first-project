import React, { useState } from 'react'
import './Header.css'
import {BiMenuAltRight} from 'react-icons/bi'
import OutsideClickHandler from "react-outside-click-handler"
const Header = () => {
  const [menuOpened, setMenuOpened]= useState(false)
  const getMenuStyles = (menuOpened) => {
    if (document.documentElement.clientWidth <= 900)
    {
      return {right: !menuOpened && "-100%"}
    }
  }
  return (
  <section className="h-wrapper">
    <div className="flexcenter paddings innerWidth h-container">
      <img src="./logos/NBA.logo.png" alt="logo nba" width={100} />

      <OutsideClickHandler
        onOutsideClick={()=>
        setMenuOpened(false)
        
        }
      >
      <div className="flexcenter h-menu"
      style={getMenuStyles(menuOpened)}
      >
        <a href="">Home</a>
        <a href="">Ranking</a>
        <a href="">MVP Ladder</a>
        <a href="">Rookie Ladder</a>
        <button className='button'>
        <a href="">Results</a>
        </button>
        </div>  
        </OutsideClickHandler>


        <div className="menu-icon" onClick={()=>setMenuOpened((prev)=>!prev)}>
      <BiMenuAltRight size={30}/>
    </div>
    </div>
   
  </section>
  )
}

export default Header
