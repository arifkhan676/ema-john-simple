import React, { useState } from 'react'
import iPhone from '../../DeviceData/iPhone'
import Products from '../Products/Products'
import './Shop.css'

const Shop = () => {

    const [products, setProducts] = useState(iPhone)

    const [cartBtn, setcartBtn] = useState([]);
    // console.log(btn);
    const btnClick = (item) => {
        const newcart = [...cartBtn, item]
        setcartBtn(newcart)
    }

    return (
        <div className='shop-container' >
            <div className="products-container">

                {products.map(product =>
                    <Products
                        item={product}
                        handleClick={btnClick}
                    />)}

            </div>
            <div className="cart-container">
                <h1> cart container</h1>
                <p> Order Summary : {cartBtn.length} </p>
            </div>

        </div>
    )
}

export default Shop
