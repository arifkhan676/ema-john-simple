import React from 'react'
import img from './images/iPhone.jpg'
import './Header.css'

const Header = () => {
    return (
        <div className='iPhone'>
            <img className='imgiPhone' src={img} alt="" />

            <nav>
                <a href="/Home">Home</a>
                <a href="/Order">Order</a>
                <a href="/Manage">Manage Inventory</a>
            </nav>

        </div>
    )
}

export default Header
