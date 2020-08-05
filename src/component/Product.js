import React from 'react';
import '../componentCss/Product.css'
function Product({id, title, image, price, rating}) {
    return (
        <div className="product_container">
        <div className ="product_info">
          <p>{title}</p>
          <p className="product_price">
          <small>$</small>
          <strong>{price}</strong>
          </p>

          <div className="product_rating">
           {Array(rating).fill().map((_) => <p>⭐</p>)}

          </div>
          </div>
          <img src={image} alt=""/>
          <button>Add to Cart</button>
        </div>

        
    )
}


export default Product;

