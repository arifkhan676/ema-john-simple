import React from 'react'
import './pro.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

const Products = (props) => {
    //  console.log(props.item.id);
    const { name, seller, imgURL, price, Details, id } = props.item;

    console.log(props);

    return (
        <div className='Products'>
            <div className="img-container">
                <img className='image' src={imgURL} alt="" />
            </div>
            <div className="detail-container">
                <Link to={'/Product/' + id}>  <h2>{name}</h2>  </Link>


                <br />
                <p> Co-Seller: {seller}</p>
                <p>{price}</p>
                <p>  {Details} </p>
                <br />
                {props.showAddCart ? <button className='cartBtn' onClick={() => props.handleClick(props.item)} >
                    <FontAwesomeIcon className='icon' icon={faShoppingBag} />
                    add to cart
                </button> : null}


            </div>

        </div>
    )
}

export default Products
