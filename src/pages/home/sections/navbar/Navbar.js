import React from 'react';
import logo from '../../../../assets/images/logo.png';
import './navbar.scss';

const Navbar = () => {
    return (
        <React.Fragment>
            <div className="container">
                <div className="navbar">
                    <div className="informations">
                        <span>First Surfing Magazine</span>
                    </div>
                    <div className="logo-column">
                        <img src={logo} alt="logo" />
                    </div>
                    <div className='nav-column'>
                        <ul className="nav">
                            <li>
                                <a href="#">Stories</a>
                            </li>
                            <li>
                                <a href="#">Events</a>
                            </li>
                            <li>
                                <a href="#">Places</a>
                            </li>
                            <li>
                                <a href="#">Boards</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Navbar;
