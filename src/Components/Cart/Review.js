import React, { useEffect, useState } from 'react'
import { getDatabaseCart, removeFromDatabaseCart, processOrder } from '../utilities/databaseManager';
import iPhone from '../../DeviceData/iPhone';
import ReviewCart from '../ReviewCart/ReviewCart';
import './Cart.css'
import Cart from './Cart';
import { Link } from 'react-router-dom';

const Review = () => {

    const [productCart, setproductCart] = useState([]);

    const [showImg, setShowImg] = useState(false)

    const handleRemove = (productId) => {
        // console.log('clicke remove', productId);
        const removeData = productCart.filter(pd => pd.id !== productId)
        setproductCart(removeData);
        removeFromDatabaseCart(productId)
    }

    const handlePlaced = () => {
        setproductCart([]);
        processOrder();
        setShowImg(true);
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

    console.log(productCart);


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
                {showImg ? <img src="https://th.bing.com/th/id/OIP.OHt0hXOWVaFRQdiTcKJRdQHaEK?pid=ImgDet&rs=1" alt="" /> : null}
            </div>
            <div className="right-cart">
                <Cart Cart={productCart}>
                    <button onClick={handlePlaced} className='cartBtn' >
                        Placeorder
                    </button>
                </Cart>
            </div>
        </div>

    )
}

export default Review
