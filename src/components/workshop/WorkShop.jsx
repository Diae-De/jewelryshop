import React from 'react'
import './workShop.css'

function WorkShop() {
  return (
    <div className="workShop">
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
    </div>
  )
}

export default WorkShop