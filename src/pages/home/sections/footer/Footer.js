import React from 'react';
import logo from '../../../../assets/images/logo.png';
import s1 from '../../../../assets/images/tumblr.png'
import s2 from '../../../../assets/images/twitter.png'
import s3 from '../../../../assets/images/vimeo.png'
import './footer.scss';

const Footer = () => {
    return (
        <React.Fragment>
            <div className="container">
                <footer>
                    <img src={logo} alt="" />
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
                    <div className='social-media'>
                        <img src={s1} alt="" />
                        <img src={s2} alt="" />
                        <img src={s3} alt="" />
                    </div>
                </footer>
            </div>
        </React.Fragment>
    )
}

export default Footer;
