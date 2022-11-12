import React from "react";
import Logo from '../assets/logo.png'
import './Footer.css'
import {Link} from 'react-router-dom';

function Footer(){
    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="footer__content">
                        <Link href="/">
                            <figure className="footer__logo">
                                <img className="footer__logo--img" src={Logo} alt="" />
                            </figure>
                        </Link>
                        <div className="footer__list">
                            <Link to="/" className="footer__link">Home</Link>
                            <span className="footer__link no-cursor">About</span>
                            <Link to="/browse" className="footer__link">Items</Link>
                            <Link to="/basket" className="footer__link">Basket</Link>
                        </div>
                        <div className="footer__copyright">
                            Copyright &copy; 2022 FakeStore
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer