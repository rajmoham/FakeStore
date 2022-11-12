import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Nav.css'
import Logo from '../assets/logo.png'
import {Link} from 'react-router-dom'

function Nav({numberOfItems}){
    function openMenu()
    {
        document.body.classList += " menu--open";
    }

    function closeMenu()
    {
        document.body.classList.remove("menu--open");
    }

    return (
        <nav className='nav__container'>
            <Link className='logo__container' to="/">
                <img src={Logo} alt="" className='logo'/>
            </Link>
            <ul className='nav__links'>
                <li className="nav__list">
                    <Link to="/" className='nav__link'>Home</Link>
                </li>
                <li className="nav__list">
                    <Link to="/browse" className='nav__link'>Browse</Link>
                </li>
                <button className='btn__menu' onClick={openMenu}>
                    <FontAwesomeIcon icon="bars"/>
                </button>
                <li className='nav__icon'>
                    <Link to="/basket" className='nav__link'>
                        <FontAwesomeIcon icon="shopping-cart"/>
                    {
                        numberOfItems > 0 && <span className='cart__length'>{numberOfItems}</span>
                    }
                    </Link>
                </li>
            </ul>
            <div className="menu__backdrop">
                <button className="btn__menu--close" onClick={closeMenu}>
                    <FontAwesomeIcon icon="times"/>
                </button>
                <ul className='menu__links'>
                    <li className='menu__list'>
                        <Link className='menu__link' to="/" onClick={closeMenu}>Home</Link>
                    </li>
                    <li className='menu__list'>
                        <Link className='menu__link' to="/browse" onClick={closeMenu}>Browse</Link>
                    </li>
                    <li className='menu__list'>
                        <Link className='menu__link' to="/basket" onClick={closeMenu}>Basket</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Nav;