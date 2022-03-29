import React from 'react'
import './workShop.css'
import Slide from 'react-reveal/Slide';

function WorkShop() {
  return (
    <div className="workShop">
        <Slide bottom>
        <div className="flex-workshop">
            <div className="workshop-para">
                <h1>WORKSHOP</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Reiciendis laboriosam ad omnis quo blanditiis maxime. 
                    Facere voluptas repudiandae magni aliquid? Tempora blanditiis quia, quod</p>
            </div>
            <div className="grid-workshop-img">
                <img src="/images/workshop2.jpg"/>
                <img src="/images/workshop3.jpg"/>
            </div>
        </div>
        <div className="flex-workshop-img">
            <img src="/images/workshop1.jpg"/>
        </div>
        </Slide>
    </div>
  )
}

export default WorkShop