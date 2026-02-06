import React, { useContext } from 'react'
import './CSS/ShopCategory.css'
import { ShopContext } from '../Context/ShopContent'
import dropdown_icon from '../Components/Assets/dropdown_icon.png'
import Item from '../Components/Item/Item'
import arrow_icon from '../Components/Assets/arrow.png'

const ShopCategory = (props) => {

  const {all_product} = useContext(ShopContext)
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
}
  return (
    <div className='shop__category'>
      <img className='shop__category-banner' src={props.banner} alt="" />
      <div className="shop__category--index-sort">
        <p>
          <span>Showing 1-12</span> out of 36 products
        </p>
        <div className="shop__category-sort">
          Sort by <img src={dropdown_icon} alt="" />
        </div>
      </div>
      <div className="shop__category-products">
        {all_product.map((item, i) => {
          if (props.category === item.category) {
            return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
          } else {
            return null
          }
          })}
      </div>
      <p onClick={scrollToTop} className='shop__category-back-to-top'>Back To Top <img src={arrow_icon} alt="" /></p>
      <button className="shop__category--load-more">
        Explore More
      </button>
    </div>
  )
}

export default ShopCategory