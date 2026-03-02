import React from 'react'
import './DescriptionBox.css'
import placeholderImg from '../Assets/placeholder.png'
import star_icon from '../Assets/star_icon.png'
import star_dull_icon from '../Assets/star_dull_icon.png'

const DescriptionBox = () => {
  return (
    <div className='description__box'>
        <div className="description__box-navigator">
            <div className="description__box--nav-box">Reviews (122)</div>
        </div>
        <div className="description__box-description">
            <div className="review">
              <h3>Customer Name</h3>
              <div className="review__top">
              <div className="review__rating">
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_dull_icon} alt="" />
              </div>
              <h4>Review Title</h4>
              </div>
              <img src={placeholderImg} alt="Customer" />
              <p>Great product! Highly recommended.</p>
              <div className="review__review">
                <h3 className='review__help'>Helpful?
                  <p>👍</p>
                  <p>👎</p>
                </h3>
                <h3 className='review__report'>Report</h3>
              </div>
            </div>
            </div>
    </div>
  )
}

export default DescriptionBox