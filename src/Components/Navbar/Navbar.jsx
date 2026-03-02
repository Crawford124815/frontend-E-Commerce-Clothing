import React, { useContext, useRef, useState } from "react";
import "./Navbar.css";
import logo from "../Assets/logo.png";
import cart__icon from "../Assets/cart_icon.png";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContent";

export const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const {getTotalCartItems} = useContext(ShopContext)
  const menuRef = useRef()
  const dropdown_toggle = (e) => {
    menuRef.current.classList.toggle("nav__menu--active");
    e.target.classList.toggle('open')
  }

  return (
    <div className="navbar">
      <div className="nav__logo">
        <img src={logo} alt="" />
        <p>SHOPPER</p>
      </div>
      <h3 onClick={dropdown_toggle} className="nav__dropdown">lll</h3>
      <ul ref={menuRef} className="nav__menu">
        <li
          onClick={() => {
            setMenu("shop");
          }}
        >
          <Link to="/">Shop</Link>
          {menu === "shop" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("mens");
          }}
        >
          <Link to="/mens">Mens</Link>
          {menu === "mens" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("womens");
          }}
        >
          <Link to="/womens">Womens</Link>
          {menu === "womens" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("kids");
          }}
        >
          <Link to="/kids">Kids</Link>
          {menu === "kids" ? <hr /> : <></>}
        </li>
      </ul>
      <div className="nav__login-cart">
        <Link to='/login'>
        <button>Login</button>
        </Link>
        <Link to='/cart'>
        <img src={cart__icon} alt="" />
        </Link>
        <div className="nav__cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  );
};
