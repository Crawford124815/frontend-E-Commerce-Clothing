import React from 'react'
import './CSS/Shop.css'
import Hero from '../Components/Hero/Hero'
import Popular from '../Components/Popular/Popular'
import Offers from '../Components/Offers/Offers'
import NewCollections from '../Components/NewCollections/NewCollections'
import NewsLetter from '../Components/NewLetter/NewsLetter'
import arrow_icon from '../Components/Assets/arrow.png'

const Shop = () => {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
}

  return (
    <div>
        <Hero />
        <Popular />
        <Offers />
        <NewCollections />
        <NewsLetter />
        <p onClick={scrollToTop} className='back__to-top'>Back To Top <img src={arrow_icon} alt="" /></p>
    </div>
  )
}

export default Shop