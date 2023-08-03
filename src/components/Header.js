import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/header.css'; // Make sure to import the CSS file
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faUsers, faMobile, faHome, faUser, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const HeaderComponent = () => {
    return (
        <>
            {/* Top Header */}
            <marquee>
                <div className="width-100 top-header">
                    <div className="container">
                        <div className="width-50">
                            <p className="head1p1 headquote">Green Grocers: Get it fresh! </p>
                        </div>
                        <div className="width-50">
                            <ul className="head1ul cashback-sect">
                                <li>
                                    <FontAwesomeIcon icon={faUsers} className='fa-fade'/>
                                    <a className="head1mr" href="#">Refer Your Friend And Earn Rs. 500 Cashback</a>
                                </li>
                                <li>
                                <FontAwesomeIcon icon={faMobile} className='fa-fade'/>
                                    <a href="#"> Download App</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <span className="navhead"></span>
                </div>
            </marquee>

            {/* Logo and Search Panel */}
            <div className="width-100 search-panel">
                <div className="container">
                    <div className="width-20">
                          <Link to="/">
                            <img src="images/logo.png" alt="Your logo" style={{ position: 'relative', top: '-35px', left: '-15px', width: '220px', height: '100px' }} />
                          </Link>
                    </div>
                    {/* search section */}
                    <form autoComplete="off">
                        <div className="width-50">
                            <input type="text" id="input" name="searchBox" placeholder="Search for exquisite fruits, vegetables and more" />
                            <button className="search-button">
                                <FontAwesomeIcon icon={faSearch} className='fa-fade'/>
                            </button>
                        </div>
                        <ul className="list"></ul>
                    </form>
                    <script src="Search.js"></script>
                    <div className="width-30">
                        <ul className="cart-sect">
                            <li>
                            <Link to="/">
                            <FontAwesomeIcon icon={faHome} /> &nbsp;
                            </Link>
                                Home
                            </li>
                            <li>
                            <FontAwesomeIcon icon={faUser} />&nbsp;
                                <a href="login.html">Login</a>
                            </li>
                            <li>
                                <Link to='/cart'>
                                <FontAwesomeIcon icon={faShoppingCart} size="lg" className='fa-flip'/>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HeaderComponent;
