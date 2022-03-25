import React from 'react'
import Header from '../header/Header';
import HeroSec from '../hero/HeroSec';
import HomeSec from '../homesec/HomeSec';
import WeddingSec from '../weddingsec/WeddingSec';
import WorkShop from '../workshop/WorkShop';
import "./home.css"

function Home() {
  return (
    <main>
        <Header/>
        <HomeSec/>
        <HeroSec/>
        <WeddingSec/>
        <WorkShop/>
    </main>
  )
}

export default Home;