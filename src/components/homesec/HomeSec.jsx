import React from 'react'
import "./homeSec.css"
import {BsInstagram, BsFacebook, BsTwitter} from "react-icons/bs"

function HomeSec() {
  return (
    <>
        <div className="background-img">
            <img src="/images/background2.jpg"/>
            <div className="img-overlay"></div>
            <div className="page-name">
                <h1>Perly Jewelry</h1>
            </div>
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