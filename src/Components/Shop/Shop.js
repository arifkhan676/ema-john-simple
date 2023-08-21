import React, { useState } from 'react'
import iPhone from '../../DeviceData/iPhone'
import Products from '../Products/Products'
import './Shop.css'
import Cart from '../Cart/Cart'
import { addToCartDatabase } from '../utilities/databaseManager'

const Shop = () => {

    const [products, setProducts] = useState(iPhone)

    const [cartBtn, setcartBtn] = useState([]);
    // console.log(cartBtn);
    const btnClick = (item) => {
        const newcart = [...cartBtn, item]
        setcartBtn(newcart)
        const sameProduct = newcart.filter(pd => pd.id === item.id)
        const count = sameProduct.length;
        addToCartDatabase(item.id, count)
    }

    return (
        <div className='shop-container' >
            <div className="products-container">

                {products.map((product) =>
                    <Products
                        key={product.id}
                        item={product}
                        handleClick={btnClick}
                        showAddCart={true}
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
