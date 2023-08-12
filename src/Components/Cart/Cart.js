import React from 'react'

const Cart = (props) => {
    const cart = props.Cart;

    // 
    const total = cart.reduce((total, prd) => total + prd.price, 0)
    console.log(total);
    return (
        <div>
            <h1> cart container</h1>
            <p> Order Summary : {cart.length} </p>
            <p> Total: {total}  </p>
        </div>
    )
}

export default Cart
