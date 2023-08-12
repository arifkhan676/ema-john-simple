import React from 'react'
import imageShow from '../images/iPhone.jpg'
import './Header.css'
import { NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <div className='iPhone'>
            <img className='imgiPhone' src={imageShow} alt="" />

            <nav>
                <NavLink to="http://localhost:3000/" >
                    Home
                </NavLink>
                <NavLink to="/Order" >
                    Order
                </NavLink>
                <NavLink to="/Manage" >
                    Manage Inventory
                </NavLink>
            </nav>

        </div>
    )
}

export default Header
