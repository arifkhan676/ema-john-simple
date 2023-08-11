import React from 'react'
import './pro.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons'

const Products = (props) => {
    //  console.log(props);
    const { name, seller, imgURL, price, Details } = props.item;


    return (
        <div className='Products'>
            <div className="img-container">
                <img className='image' src={imgURL} alt="" />
            </div>
            <div className="detail-container">
                <h2>{name}</h2>

                <br />
                <p> Co-Seller: {seller}</p>
                <p>{price}</p>
                <p>  {Details} </p>
                <br />
                <button className='cartBtn' onClick={() => props.handleClick(props.item)} >
                    <FontAwesomeIcon className='icon' icon={faShoppingBag} />
                    add to cart
                </button>
            </div>

        </div>
    )
}

export default Products
