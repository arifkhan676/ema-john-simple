import React from 'react'
import Products from '../Products/Products';
import '../Cart/Cart.css'
import Cart from '../Cart/Cart';

const ReviewCart = (props) => {
    const { id, name, imgURL, seller, price, Details, quantity } = props.product;

    return (
        <div className="mainRev">
            <div className='Cartreview' >
                <div className="rev1">
                    <img style={{ width: 400 }} src={imgURL} alt="" />
                </div>
                <div className="rev2">
                    <h3> {name} </h3>
                    <p style={{ color: 'Green', fontFamily: 'sans-serif', fontSize: '1.5rem' }} >Quantity: {quantity}</p>
                    <p> Co-Seller: {seller}</p>
                    <p>{price}</p>
                    <p>  {Details} </p>
                    <button onClick={() => props.handleRemove(id)} className='cartBtn' >
                        Remove
                    </button>
                </div>

            </div>


        </div>

    )
}

export default ReviewCart
