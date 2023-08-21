import React, { useEffect, useState } from 'react'
import { getDatabaseCart } from '../utilities/databaseManager';
import iPhone from '../../DeviceData/iPhone';
import ReviewCart from '../ReviewCart/ReviewCart';

const Review = () => {

    const [productCart, setproductCart] = useState([]);


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
        <div>
            <h1>cart: {productCart.length}</h1>
            {
                productCart.map(pd => <ReviewCart key={pd.id} product={pd} />)
            }
        </div>
    )
}

export default Review
