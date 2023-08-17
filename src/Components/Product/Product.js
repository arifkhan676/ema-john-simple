import React from 'react'
import { useParams } from 'react-router-dom'
import iPhone from '../../DeviceData/iPhone';
import Products from '../Products/Products';

const Product = () => {

    const { ProductID } = useParams()

    const productPage = iPhone.find(pd => pd.id === ProductID)
    // console.log(x);
    return (
        <div>
            <Products showAddCart={false} item={productPage} >  </Products>
        </div>
    )
}

export default Product
