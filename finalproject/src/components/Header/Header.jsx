import React, { useState } from 'react';
import "./header.scss";
import logo from "../../assets/images/logoDark.png";
import { NavLink } from 'react-router-dom';
import { AiOutlineShoppingCart } from "react-icons/ai";
import { CiMenuFries } from "react-icons/ci";
import { useSelector } from 'react-redux';

const Header = () => {
    const [hamburger, setHamburger] = useState(false);
    const [headerColor, setHeaderColor] = useState(false);
    const cart = useSelector((state) => state.cart)
    console.log(cart.cart)
    const changeColor = () => {
        setHamburger(false)
        if (window.scrollY >= 96) {
            setHeaderColor(true);
        } else {
            setHeaderColor(false);
        }
    };
    window.addEventListener('scroll', changeColor);
    const getTotalQuantity = () => {
        let total = 0;
        cart.cart.forEach((item) => {
            total += item.quantity;
        });
        return total;
    };
    return (
        <header className={headerColor ? "scroll-header" : ""}>
            <div className="header-content">
                <div className="logo-field">
                    <NavLink to="/"><img src={logo} alt="logo" /></NavLink>
                </div>
                <div className="navbar-field">
                    <div className="page-part">
                        <NavLink to="/">Home</NavLink >
                        <NavLink to="/shop">Shop</NavLink >
                        <NavLink to="/favorites">Favorites</NavLink >
                    </div>
                    <div className="icon-part">
                        <button onClick={() => setHamburger(false)}>
                            <NavLink to="/cart"><AiOutlineShoppingCart /> </NavLink>
                            <span className='cart-quantity'>{getTotalQuantity()}</span>
                        </button>
                    </div>
                    <div className="hamburger-menu">
                        <button onClick={() => setHamburger(!hamburger)} className='hamburger-button'><CiMenuFries /></button>
                        <ul className={hamburger ? 'hamburger-items hamburger-active' : 'hamburger-items'}>
                            <li><button onClick={() => setHamburger(false)}><NavLink to="/">Home</NavLink ></button></li>
                            <li><button onClick={() => setHamburger(false)}><NavLink to="/shop">Shop</NavLink ></button></li>
                            <li><button onClick={() => setHamburger(false)}><NavLink to="/favorites">Favorites</NavLink ></button></li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;