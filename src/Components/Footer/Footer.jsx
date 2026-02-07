import React, { useState } from "react";
import "./Footer.css";
import footer_logo from "../Assets/logo_big.png";
import instagram_Icon from "../Assets/instagram_icon.png";
import pintester_icon from "../Assets/pintester_icon.png";
import facebook_icon from "../Assets/facebook.jpg";
import { Link } from "react-router-dom";

const Footer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
    setIsAnimating(true);
  };
  const closeModal = () => {
    setIsAnimating(false);
    setTimeout(() => {
      setIsModalOpen(false);
    }, 1000);
  };
  return (
    <div className="footer">
      <div className="footer__logo">
        <img src={footer_logo} alt="" />
        <p>SHOPPER</p>
      </div>
      <ul className="footer__links">
        <Link to={"/About"}>
          <li>Donate</li>
        </Link>
        <li onClick={openModal}>Contact</li>
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
        <div
          className={`modal-overlay ${isAnimating ? "fade__modal-in" : "fade__modal-out"}`}
          onClick={closeModal}
        >
          <div
            className={`modal-content ${isAnimating ? "slide__modal-in" : "slide__modal-out"}`}
            onClick={(e) => e.stopPropagation()}
          >
            <button onClick={closeModal}>X</button>
            <h2>Contact Us</h2>
            <p className="modal-content-email">
              <span className="gray">Email:</span>{" "}
              <a href="mailto:">
                <span className="email">support@shopper.com</span>
              </a>
            </p>
            <p>
              <span className="gray">Phone:</span>
              <a href="tel:+1111111">
                <span className="phone"> 1 (123)-456-789 </span>
              </a>
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Footer;
