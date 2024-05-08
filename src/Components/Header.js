import React from 'react';
import "./Header.css";
import { Link } from "react-router-dom";
import logo from "../images/logof.png";
import cart from "../images/cart.jpg";
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useStateValue } from "../StateProvider";
import { auth } from '../firebase';


function Header() {

    const [{ basket, user }] = useStateValue();
    //console.log(basket);
    const login = () => {
        if (user) {
            auth.signOut();
        }
    }

    return (
        <nav className="header">
            {/* Amazon logo on navbar*/}
            <Link to="/">
                <img className="header_logo" src={logo} alt="logoimg" />
            </Link>


            {/* search box on navbar */}
            <div className="header_search">
                <input type="text" className="searchinput"  />
                <SearchIcon className="searchicon" />
            </div>

            {/* 3-links at right corner on navbar */}
            <div className="header__nav">

                {/* if their is no user login then pushing to login page only */}
                <Link to={!user ? "/login":""} className="header__link">
                    <div onClick={login} className="header__option">
                        <span className="header_optionLineOne">Hello {user?.email || "Guest"}</span>
                        <span className="header_optionLineTwo">{user ? "Sign Out" : "Sign in"}</span>
                    </div>
                </Link>
                <Link to="/orders" className="header__link">
                    <div className="header__option">
                        <span className="header_optionLineOne">Return</span>
                        <span className="header_optionLineTwo">& Order</span>
                    </div>
                </Link>
                <Link to="/prime" className="header__link">
                    <div className="header__option">
                        <span className="header_optionLineOne">Your</span>
                        <span className="header_optionLineTwo">Prime</span>
                    </div>
                </Link>

                {/* 4th link basket/cart */}
                <Link to="/checkout" className="header__link">
                    <div className="header_optionBasket">
                        <ShoppingCartIcon />
                        <span className="header_optionLineTwo header__BasketCount">{basket?.length}</span>
                    </div>
                </Link>
            </div>
        </nav>

    )
}

export default Header;
