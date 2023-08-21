import React, { useState } from 'react'
import Newcart from './Newcart';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import './Cart.css'
import Review from './Review';
import { NavLink } from 'react-router-dom';

const Cart = (props) => {
    const Cart = props.Cart;
    //const total = cart.reduce((total, prd) => total + prd.price, 0)
    // console.log(Cart);
    let total = 0;

    const NewItem = Cart.map((newItem, idx) => {
        return <Newcart key={idx}
            newItem={newItem}
        />
    })

    for (let i = 0; i < Cart.length; i++) {
        const item = Cart[i];
        total = total + item.price;
    }

    let shipping = 0;
    if (total > 500 & total < 1000) {
        shipping = 10;
    } else if (total > 1000) {
        shipping = 5;
    }
    const tax = Math.round(total / 80);

    // console.log(total);
    return (
        <div className='container'>
            <h1> cart container</h1>
            <div className="cartBox">
                <p> Order Summary : {Cart.length} </p>
                <FontAwesomeIcon className='' icon={faShoppingBag} />
            </div>

            <p> Product Price: ${total}  </p>
            <p>Shipping: ${shipping}</p>
            <p> Taxes: ${tax} </p>
            <p>Total Price: ${total + shipping + tax}</p>

            <NavLink to='Review'>
                <button className='cartBtn' >
                    Review
                </button>
            </NavLink>


            <hr />
            {NewItem}

        </div>
    )
}

export default Cart
