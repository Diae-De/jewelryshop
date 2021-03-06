import React from 'react'
import './weddingSec.css'
import Fade from 'react-reveal/Fade';

function WeddingSec() {
  return (
    <div className="weddingSec">
        <div className="weddingSec-new">
          <p>NEW NEW <br/> NEW NEW <br/> NEW NEW <br/> NEW NEW</p>
        </div>
        <div className="weddingSec-grid">
        <Fade left>
        <div className="weddingSec-img">
            <img src="/images/weddingimg1.jpg" className="img_1"/>
            <img src="/images/weddingimg2.jpg" className="img_2"/>
        </div>
        </Fade>
        <Fade right>
        <div className="weddingSec-para">
            <h1>WEDDING COLLECTION</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae nemo, vel, minus, 
            voluptatibus dolorem facilis ratione architecto cum soluta rerum qui vitae dolorum molestias 
            obcaecati minima illum? Voluptate, quidem ea!</p>
            <button>Look</button>
        </div>
        </Fade>
        </div>
    </div>
  )
}

export default WeddingSec