import React, { useState } from "react";
import "./ProductDisplay.css";
import star_icon from "../Assets/star_icon.png";
import star_dull_icon from "../Assets/star_dull_icon.png";

const ProductDisplay = (props) => {
  const { product } = props;
  const [sizeSelected, setSizeSelected] = useState(null);

  const sizes = ["S", "M", "L", "XL", "XXL"];

  return (
    <div className="product__display">
      <div className="product__display-left">
        <div className="product__display--img-list">
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
        </div>
        <div className="product__display-img">
          <img
            className="product__display--main-img"
            src={product.image}
            alt=""
          />
        </div>
      </div>
      <div className="product__display-right">
        <div className="product__display--right-top">
          <h1>{product.name}</h1>
          {/*  ADD LATER(css done)   
        <div className="product__display--right-stars">
        <img src={star_icon} alt="" />
        <img src={star_icon} alt="" />
        <img src={star_icon} alt="" />
        <img src={star_icon} alt="" />
        <img src={star_dull_icon} alt="" />
        <p>(122)</p>
        </div> */}
          <div className="product__display--right-prices">
            <div className="product__display--right-price-old">
              ${product.old_price}
            </div>
            <div className="product__display--right-price-new">
              ${product.new_price}
            </div>
          </div>
          <div className="product__display--right-discription">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam
            numquam assumenda quia iure! Deleniti atque praesentium aut ducimus
            eaque tenetur!
          </div>
        </div>
        <div className="product__display--right-bottom">
          <div className="product__display--right-size">
            <h1>Select Size:</h1>
            <div className="product__display--right-sizes">
              {sizes.map((label, index) => (
                <div
                  onClick={() => setSizeSelected(index)}
                  className={
                    sizeSelected === index
                      ? "product__size-selected"
                      : "product__size--selected-default"
                  }
                >
                  {label}
                </div>
              ))}
            </div>
          </div>
          <button>ADD TO CART</button>
          <p className="product__display--right-category">
            <span>Category :</span>Women , T-Shirt, Crop Top
            <span>Tags :</span>Modern, Latest
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDisplay;
