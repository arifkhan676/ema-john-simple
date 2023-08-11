import React, { useState } from 'react'
import { iPhone } from '../../DeviceData/iPhone'
import Products from '../Products/Products'
import './Shop.css'

const Shop = () => {

    const [products, setProducts] = useState(iPhone)

    return (
        <div className='shop-container' >
            <div className="products-container">

                {products.map(product => <Products item={product} />)}

            </div>
            <div className="cart-container">
                <h1> cart container</h1>
            </div>

        </div>
    )
}

export default Shop
