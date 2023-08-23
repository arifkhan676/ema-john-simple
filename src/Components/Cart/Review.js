import React, { useEffect, useState } from 'react'
import { getDatabaseCart, removeFromDatabaseCart } from '../utilities/databaseManager';
import iPhone from '../../DeviceData/iPhone';
import ReviewCart from '../ReviewCart/ReviewCart';
import './Cart.css'
import Cart from './Cart';

const Review = () => {

    const [productCart, setproductCart] = useState([]);

    const handleRemove = (productId) => {
        // console.log('clicke remove', productId);
        const removeData = productCart.filter(pd => pd.id !== productId)
        setproductCart(removeData);
        removeFromDatabaseCart(productId)
    }

    useEffect(() => {
        const savedCart = getDatabaseCart()
        const idKeys = Object.keys(savedCart)

        const productList = idKeys.map(mainId => {
            const product = iPhone.find(pd => pd.id === mainId)
            product.quantity = savedCart[mainId]
            return product;
        })
        // console.log(productList);
        setproductCart(productList)
    }, [])


    return (
        <div className='reviewCart' >
            <div className="left-cart">
                <h1>cart: {productCart.length}</h1>
                {
                    productCart.map(pd => <ReviewCart
                        key={pd.id}
                        handleRemove={handleRemove}
                        product={pd} />)
                }
            </div>
            <div className="right-cart">
                <Cart Cart={productCart}
                    buttonName=''
                />
            </div>
        </div>

    )
}

export default Review
