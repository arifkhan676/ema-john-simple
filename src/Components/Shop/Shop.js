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
        const sameProduct = cartBtn.find(pd => pd.id === item.id);
        let count = 1;
        let newCart;
        if (sameProduct) {
            count = sameProduct.quantity + 1;
            sameProduct.quantity = count;
            const others = cartBtn.filter(pd => pd.id !== item.id);
            newCart = [...others, sameProduct]
        } else {
            item.quantity = 1;
            newCart = [...cartBtn, item]
        }
        setcartBtn(newCart)
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
