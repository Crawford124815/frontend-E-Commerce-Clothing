import React, { useState } from 'react'
import './Footer.css'
import footer_logo from '../Assets/logo_big.png'
import instagram_Icon from '../Assets/instagram_icon.png'
import pintester_icon from '../Assets/pintester_icon.png'
import facebook_icon from '../Assets/facebook.jpg'

const Footer = () => {

    const [isModalOpen, setIsModalOpen] = useState(true)
    const toggleModal = () => setIsModalOpen(!isModalOpen)
  return (
    <div className='footer'>
        <div className="footer__logo">
            <img src={footer_logo} alt="" />
            <p>SHOPPER</p>
        </div>
        <ul className="footer__links">
            <li>About</li>
            <li onClick={toggleModal}>Contact</li>
        </ul>
        <div className="footer__social-icons">
            <div className="footer__icons-container">
                <img src={instagram_Icon} alt="" />
            </div>
            <div className="footer__icons-container">
                <img src={pintester_icon} alt="" />
            </div>
            <div className="footer__icons-container">
                <img src={facebook_icon} alt="" />
            </div>
        </div>
        <div className="footer__copyright">
            <hr />
            <p>© 2026 SHOPPER - All Rights Reserved</p>
        </div>
        {isModalOpen && (
          <div className="modal-overlay" onClick={toggleModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <button onClick={toggleModal}>X</button>
              <h2>Contact Us</h2>
              <p>Email: support@shopper.com</p>
              <p>Phone: </p>
            </div>
          </div>
        )}
    </div>
  )
}

export default Footer