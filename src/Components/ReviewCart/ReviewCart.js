import React from 'react'
import Products from '../Products/Products';
import '../Cart/Cart.css'

const ReviewCart = (props) => {
    const { name, quantity } = props.product;
    return (
        <div className='Cartreview' >
            <h3> {name} </h3>
            <p>Quantity: {quantity}</p>
            <button className='cartBtn' >
                add to cart
            </button>
        </div>
    )
}

export default ReviewCart
