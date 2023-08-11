import React from 'react'
import imageShow from '../images/iPhone.jpg'
import './Header.css'

const Header = () => {
    return (
        <div className='iPhone'>
            <img className='imgiPhone' src={imageShow} alt="" />

            <nav>
                <a href="/Home">Home</a>
                <a href="/Order">Order</a>
                <a href="/Manage">Manage Inventory</a>
            </nav>

        </div>
    )
}

export default Header
