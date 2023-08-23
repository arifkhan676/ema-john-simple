import React, { useEffect, useState } from 'react'
import iPhone from '../../DeviceData/iPhone'
import Products from '../Products/Products'
import './Shop.css'
import Cart from '../Cart/Cart'
import { addToCartDatabase, getDatabaseCart } from '../utilities/databaseManager'

const Shop = () => {

    const [products, setProducts] = useState(iPhone)

    const [cartBtn, setcartBtn] = useState([]);


    useEffect(() => {
        const saveCart = getDatabaseCart()
        const productId = Object.keys(saveCart);

        const CartList = productId.map(mainId => {
            const product = iPhone.find(pd => pd.id === mainId)
            product.quantity = saveCart[mainId];
            return product;
        })
        setProducts(CartList);

    }, [])
    // console.log(cartBtn);
    const btnClick = (it em) => {
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
