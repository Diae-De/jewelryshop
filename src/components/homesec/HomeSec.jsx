import React from 'react'
import "./homeSec.css"
import {BsInstagram, BsFacebook, BsTwitter} from "react-icons/bs"
import Zoom from 'react-reveal/Zoom';

function HomeSec() {
  return (
    <>
        <div className="background-img">
            <img src="/images/background2.jpg"/>
            <div className="img-overlay"></div>
            <Zoom>
            <div className="page-name">
                <h1>Perly Jewelry</h1>
            </div>
            </Zoom>
            <div className="socialmedia">
              <BsInstagram/>
              <BsFacebook className="fac"/>
              <BsTwitter/>
              <div className="borderbbottom"></div>
            </div>
        </div>   
    </>
  )
}

export default HomeSec