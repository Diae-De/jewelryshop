import React, { useState } from 'react'
import './header.css'
import {AiOutlineShopping, AiOutlineSearch} from 'react-icons/ai'
import {BsList} from 'react-icons/bs'
import {GrClose} from 'react-icons/gr'
import Slide from 'react-reveal/Slide';

function Header() {

  const [navStatue,setNavStatue] = useState(false);

  function tooglenav () {
    setNavStatue(!navStatue);
  }

  return (
    <div className="header">
    <div className="header-flex">
    <Slide top>
        <div className="logo">PJ</div>
        <div className="header-list">
            <ul>
                <li>Home</li>
                <li>Collection</li>
                <li>Shop</li>
            </ul>
        </div>
        <div className="header-icons">
            <AiOutlineShopping className="shopingcart"/>
            <AiOutlineSearch/>
        </div>
        <div className="header-navicon">
          <BsList onClick={tooglenav}/>
        </div>
        </Slide>
        <div className="navbar">
          <div className={navStatue ? "navbar nav-active" : "navbar"}>
            <ul>
                <li>Home</li>
                <li>Collection</li>
                <li>Shop</li>
            </ul>
            <GrClose className="close-icon" onClick={tooglenav}/>
          </div>
        </div>
    </div>
    </div>
  )
}

export default Header