import React from 'react'
import './Contact.css'
import {MdCall, Mdcall} from 'react-icons/md'
import {BsFillChatDotsFill} from 'react-icons/bs'
import { FaVideo } from "react-icons/fa6";
import { IoMailSharp } from "react-icons/io5";
import {HiChatBubbleBottomCenter} from "react-icons/hi2"
const Contact = () => {
  return (
    <div>
      <section className="c-wrapper">
        <div className="paddings innerWidth flexcenter c-container">
            {/* left side */}
            <div className="flexcolstart c-left">
            <span className='thirdtext'>My Contacts</span>
            <span className='primarytext'>Easy to Contact me</span>
            <span className='secondarytext'>I am absolutely delighted to be able to engage with you.<br/>If you have any questions, comments, <br/>or if you would like to learn more about me, feel free to contact me !</span>
            <div className="flexcolstart contactModes">
              {/* first row */}
              <div className="flexstart row">
                <div className="flexcenter mode">
                  <div className="flexstart">
                    <div className="flexcenter icon">
                      <MdCall size={25}/>
                    </div>
                    <div className="flexcolstart detail">
                      <span className='primarytext'>Call</span>
                      <span className='secondarytext'>07 81 17 99 26</span>
                    </div>
                  </div>
                  <div className="flexcenter button">Call Now</div>
                </div>

                {/* second mode */}
                <div className="flexcenter mode">
                  <div className="flexstart">
                    <div className="flexcenter icon">
                      <IoMailSharp size={25}/>
                    </div>
                    <div className="flexcolstart detail">
                      <span className='primarytext'>Mail</span>
                      <span className='secondarytext'>adam.lahlou<br/>2111@gmail.com</span>
                    </div>
                  </div>
                  <div className="flexcenter button">Send Mail</div>
                </div>
              </div>
              {/* second row */}
              <div className="flexstart row">
                <div className="flexcenter mode">
                  <div className="flexstart">
                    <div className="flexcenter icon">
                      <FaVideo size={25}/>
                    </div>
                    <div className="flexcolstart detail">
                      <span className='primarytext'>Video Call</span>
                      <span className='secondarytext'>07 81 17 99 26</span>
                    </div>
                  </div>
                  <div className="flexcenter button">Call Now</div>
                </div>

                {/* fourth mode */}
                <div className="flexcenter mode">
                  <div className="flexstart">
                    <div className="flexcenter icon">
                      <HiChatBubbleBottomCenter size={25}/>
                    </div>
                    <div className="flexcolstart detail">
                      <span className='primarytext'>Message</span>
                      <span className='secondarytext'>07 81 17 99 26</span>
                    </div>
                  </div>
                  <div className="flexcenter button">Message Now</div>
                </div>
              </div>
            </div>
            </div>
            {/* right side */}
<div className="c-right">
  <img src="./images/Contact/Contact_image.png" alt="Image Contact" />
</div>
        </div>
      </section>
    </div>
  )
}

export default Contact
