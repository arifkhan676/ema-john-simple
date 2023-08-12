import React from 'react'

const Cart = (props) => {
    const Cart = props.Cart;

    //const total = cart.reduce((total, prd) => total + prd.price, 0)

    let total = 0;
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

    console.log(total);
    return (
        <div>
            <h1> cart container</h1>
            <p> Order Summary : {Cart.length} </p>
            <p> Product Price: ${total}  </p>
            <p>Shipping: ${shipping}</p>
            <p> Taxes: ${tax} </p>
            <p>Total Price: ${total + shipping + tax}</p>
        </div>
    )
}

export default Cart
