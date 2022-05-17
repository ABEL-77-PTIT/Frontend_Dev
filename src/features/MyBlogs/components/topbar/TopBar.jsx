import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './topbar.css'
class TopBar extends Component {
    render() {
        const user = false
        return (
            <div className="top">
                <div className="top__left">
                    <i className="top__icon fab fa-facebook-square"></i>
                    <i className="top__icon fab fa-twitter-square"></i>
                    <i className="top__icon fab fa-pinterest-square"></i>
                    <i className="top__icon fab fa-instagram-square"></i>
                </div>
                <div className="top__center">
                    <ul className="top__list">
                        <li className="top__list--item"><Link to="/my/blogs" className="link">HOME</Link></li>
                        <li className="top__list--item">ABOUT</li>
                        <li className="top__list--item">CONTACT</li>
                        <li className="top__list--item"><Link to="/my/blogs/write" className="link">WRITE</Link></li>
                        <li className="top__list--item">
                            { user && "LOGOUT"}
                        </li>
                    </ul>
                </div>
                <div className="top__right">
                    { 
                        user ? (
                            <Link className="link" to="/settings">
                              <img
                                className="top__img"
                                src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                                alt=""
                              />
                            </Link>
                          ) : (
                            <>
                                <ul className="top__list">
                                    <li className="top__list--item">
                                        <Link to="/my/blogs/login" className="link">LOGIN</Link>
                                    </li>
                                    <li className="top__list--item">
                                        <Link to="/my/blogs/register" className="link">REGISTER</Link>
                                    </li>
                                </ul>
                            </>
                        )
                    }
                    <i className="top__search--icon fas fa-search"></i>
                </div>
            </div>
        );
    }
}

export default TopBar;