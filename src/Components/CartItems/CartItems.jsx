import React, { useContext } from 'react'
import './CartItems.css'
import { ShopContext } from '../../Context/ShopContent'
import remove_icon from '../Assets/cart_cross_icon.png'
import all_product from '../Assets/all_product'

const CartItems = () => {

    const {getTotalCartAmount, all_products, cartItems, removeFromCart, addToCart} = useContext(ShopContext)
  return (
    <div className='cart__items'>
        <div className="cart__items--format-main">
            <p>Products</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
        </div>
        <hr className='cart__items--format-main-br' />
       {all_product.map((e) => {
        if(cartItems[e.id]>0)
        { return  <div>
            <div className="cart__items-format cart__items--format-main">
                <img src={e.image} alt="" className='cart__icon--product-icon'/>
                <p>{e.name}</p>
                <p>${e.new_price}</p>
                <div className="cart__items--format-add-remove">
                <span onClick={() => (removeFromCart(e.id))}>-</span>
                <button className='cart__items-quantity'> {cartItems[e.id]} </button>
                <span onClick={() => {addToCart(e.id)}}>+</span>
                </div>
                <p>${e.new_price*cartItems[e.id]}</p>
                <p className='cart__items--remove-icon' onClick={() => (removeFromCart(e.id))}>X</p>
            </div>
            <hr className='cart__items--format-br' />
        </div>
        }
        return null;
       })}
       <div className="cart__items-down">
        <div className="cart__items-total">
            <h1>Cart Total</h1>
            <div>
                <div className="cart__items--total-item sub-total">
                    <p>Subtotal</p>
                    <p>${getTotalCartAmount()}</p>
                </div>
                <div className="cart__items--total-item sub-total">
                    <p>Tax</p>
                    <p>${(getTotalCartAmount() * 0.07).toFixed(2)}</p>
                </div>
                <div className="cart__items--total-item sub-total">
                    <p>Shipping Fee</p>
                    <p>Free</p>
                </div>
                <hr />
                <div className="cart__items--total-item">
                    <h3>Total</h3>
                    <h3>${getTotalCartAmount() + getTotalCartAmount() * 0.07}</h3>
                </div>
            </div>
            <button>PROCEED TO CHECKOUT</button>
        </div>
        <div className="cart__items--promo-code">
            <p>If you have a promo code, enter it here</p>
            <div className="cart__items--promo-box">
                <input type="text" placeholder='Promo Code' />
                <button>Submit</button>
            </div>
        </div>
       </div>
    </div>
  )
}

export default CartItems