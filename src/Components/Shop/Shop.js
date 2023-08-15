import React, { useState } from 'react'
import iPhone from '../../DeviceData/iPhone'
import Products from '../Products/Products'
import './Shop.css'
import Cart from '../Cart/Cart'

const Shop = () => {

    const [products, setProducts] = useState(iPhone)

    const [cartBtn, setcartBtn] = useState([]);
    // console.log(cartBtn);
    const btnClick = (item) => {
        const newcart = [...cartBtn, item]
        setcartBtn(newcart)
    }

    return (
        <div className='shop-container' >
            <div className="products-container">

                {products.map((product, idx) =>
                    <Products
                        key={idx}
                        item={product}
                        handleClick={btnClick}
                    />)}

            </div>
            <div className="cart-container">
                <Cart Cart={cartBtn}
                />
            </div>

        </div>
    )
}

export default Shop
