import React, { useEffect, useRef, useState } from 'react'
import './heroSec.css'
import {Data} from './HeroData'
import {motion} from 'framer-motion'
import {MdOutlineArrowForwardIos} from 'react-icons/md'

function HeroSec() {

    const [width,setWidth] = useState(0);
    const corsor =useRef();
    useEffect(()=>{
        setWidth(corsor.current.scrollWidth - corsor.current.offsetWidth);
    },[])

  return (
<>
    <div className="HeroSec">
        <div className="mainslid">
        <div className="mostpopular">most popular</div>
        <motion.div ref={corsor} drag="x" dragConstraints={{right:0, left:-width}} className="cursor">
            {Data.map((alldata,index) => {
                return(
                    <motion.div className="heroslider-img" key={index}>
                        <img src={alldata.img}/>
                        <div className="para-flex">
                            <p>{alldata.decs}</p>
                            <p>{alldata.pric}</p>
                        </div>
                    </motion.div>
                )
            })}
        </motion.div>
        <div className="more">
            <p>See More</p>
            <MdOutlineArrowForwardIos/>
        </div>
    </div>
    </div>
</>
  )
}

export default HeroSec