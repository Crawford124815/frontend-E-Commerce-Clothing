import React from 'react'
import './NewsLetter.css'

const NewsLetter = () => {
  return (
    <div className='news__letter'>
        <h1>Get Exclusive Offers On Your Email</h1>
        <p>Subcribed to our news letter and stay updated</p>
        <div>
            <input type="email" placeholder='Your Email' />
            <button>Subscribe</button>
        </div>
    </div>
  )
}

export default NewsLetter