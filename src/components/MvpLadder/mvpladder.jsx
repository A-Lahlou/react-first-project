import React, { useState } from 'react'
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemPanel,
  AccordionItemState,
  AccordionItemButton
} from 'react-accessible-accordion'
import "react-accessible-accordion/dist/fancy-example.css"
import {MdOutlineArrowDropDown} from 'react-icons/md'
import './mvpladder.css'
import data from '../../utils/accordion'
const Mvpleader = () => {
  return (
  <section className="m-wrapper">
    <div className="paddings innerWidth flexcenter m-container">
      {/* left side */}
      <div className="m-left">
        <div className="image-container">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/GH1j3IVTm6g?si=PI0VV3g4JC_XlWyD" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
      </div>
      {/* right side */}
      <div className="flexcolstart m-right">
        <span className='thirdtext'>Mvp Ladder Leader</span>
        <span className='primarytext'>Joel Embiid</span>
        <span className='secondarytext'>The very best player in the NBA so far</span>

        <Accordion
        className='accordion'
       allowMultipleExpanded={false}
       preExpanded={[0]}
        >
          {

          data.map((item,i)=> {
            return(
              <AccordionItem
              className= "accordionItem" key={i} uuid={i}>
                <AccordionItemHeading>
                  <AccordionItemButton className=' flexcenter accordionButton'>
                    <div className="flexcenter icon">{item.icon}</div>
                    <span className='whitetext'>
                      {item.heading}
                    </span>
                    <div className="flexcenter icon">
                      <MdOutlineArrowDropDown size={20}/>
                    </div>
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                <p className="secondarytext">{item.detail}</p>
                </AccordionItemPanel>
              </AccordionItem>
            )
          })

        }




        </Accordion>
      </div>
    </div>
  </section>
  )
}

export default Mvpleader
