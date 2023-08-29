import React, { useContext } from 'react'
import imageShow from '../images/iPhone.jpg'
import './Header.css'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons'
import { Badge } from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Context } from '../../App'

const Header = () => {

    const [cartCount, setCount] = useContext(Context)


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
                <NavLink to="/Product" >
                    Products
                </NavLink>
                <NavLink to="/Review" >
                    Order Review
                    <Badge badgeContent={cartCount} color="primary">
                        <ShoppingCartIcon id="icon" />
                    </Badge>
                </NavLink>

            </nav>

        </div>
    )
}

export default Header
