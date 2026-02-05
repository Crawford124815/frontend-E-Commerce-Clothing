import React from 'react'
import './Hero.css'
import hand__icon from '../Assets/hand_icon.png'
import arrow__icon from '../Assets/arrow.png'
import hero__img from '../Assets/hero_image.png'

const Hero = () => {
  return (
    <div className='hero'>
        <div className="hero__left">
        <h2>New Arrivals Only</h2>
        <div>
            <div className="hero__hand-icon">
                <p>new</p>
                <img src={hand__icon} alt="" />
            </div>
            <p>collection</p>
            <p>for everyone</p>
        </div>
        <div className="hero__latest-btn">
            <div> Latest Collection </div>
            <img src={arrow__icon} alt="" />
        </div>
        </div>
        <div className="hero__right">
        <img src={hero__img} alt="" />
        </div>
    </div>
  )
}

export default Hero
