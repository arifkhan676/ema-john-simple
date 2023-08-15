import React from 'react'

const Newcart = (props) => {

    const { name, seller, imgURL, price, Details } = props.newItem;

    return (
        <div>
            <div className="">
                <img className='image' src={imgURL} alt="" />
            </div>
            <div className="container">
                <h2>{name}</h2>
                <br />
                <p> Co-Seller: {seller}</p>
                <p>{price}</p>
                <p>  {Details} </p>
            </div>
        </div>
    )
}

export default Newcart
