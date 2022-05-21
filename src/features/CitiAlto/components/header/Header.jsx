import React from "react";
import { BiSearchAlt2 } from "react-icons/bi";
import { Link } from "react-router-dom";
// https://github.com/safak/youtube/tree/react-portfolio/src

import "./header.css";
const Header = () => {
    // document.addEventListener("DOMContentLoaded", function () {
    //     var h = document.getElementById("header");
    //     document.addEventListener("scroll", function () {
    //         var x = window.scrollY;
    //         if (x > 150) {
    //             h.classList.add("scroll");
    //         } else {
    //             h.classList.remove("scroll");
    //         }
    //     });
    // });   

    return (
        <div id="header" className="header scroll">
            <div className="header__container">
                <div className="header__content">
                    <div className="header__logo">
                        <Link to="/my/real_estate">
                            <img
                                src="http://mauweb.monamedia.net/canhocitialto/wp-content/uploads/2019/02/logo.jpg"
                                alt="Logo_citiAlto"
                            />
                        </Link>
                    </div>

                    <div className="header__navBars">
                        <ul className="header__navBars--lists">
                            <li>
                                <a href="#banner">TRANG CHỦ</a>
                            </li>
                            <li>
                                <a href="#introduce">GIỚI THIỆU</a>
                            </li>
                            <li>
                                <a href="#overviewProject">TỔNG QUAN</a>
                            </li>
                            <li>
                                <a href="#position">VỊ TRÍ</a>
                            </li>
                            <li>
                                <a href="#utilities">TIỆN ÍCH</a>
                            </li>
                            <li>
                                <a href="#imgProject"> HÌNH ẢNH</a>
                            </li>
                            <li>
                                <a href="#benefit"> ƯU ĐIỂM</a>
                            </li>
                            <li>
                                <a href="#news">TIN TỨC</a>
                            </li>
                            <li>
                                <a href="#footer"> LIÊN HỆ</a>
                            </li>
                        </ul>
                        <div className="header__search">
                            <BiSearchAlt2 />
                            <div className="search__text">
                                <div>
                                    <input type="text" placeholder="Tìm kiếm" />
                                    <button type="button" className="button__search">
                                        <BiSearchAlt2 className="icon__search" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
