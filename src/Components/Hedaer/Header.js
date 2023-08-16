import React from 'react'
import imageShow from '../images/iPhone.jpg'
import './Header.css'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
    return (
        <div className='iPhone'>
            <img className='imgiPhone' src={imageShow} alt="" />

            <nav>
                <NavLink to="http://localhost:3000/" >
                    Home
                </NavLink>
                <NavLink to="/Order" >
                    Order Country
                </NavLink>
                <NavLink to="/Manage" >
                    Manage Inventory
                </NavLink>
                <NavLink to='/icon' >
                    <FontAwesomeIcon className='icon' icon={faShoppingBag} />
                </NavLink>
            </nav>

        </div>
    )
}

export default Header
