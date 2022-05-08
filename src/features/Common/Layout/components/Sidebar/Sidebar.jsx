import React from 'react'
import "./sidebar.css"
const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar__item">
                <span className="sidebar__title">ABOUT ME</span>
                <img src="https://themegoods-cdn-pzbycso8wng.stackpathdns.com/grandblog/demo/wp-content/uploads/2015/11/aboutme.jpg" alt="" />
                <p>Lập trình viên Front-end. Đã từng học tại Học viện Công nghệ bưu chính viễn thông Hồ Chí Minh.</p>
            </div>
            <div className="sidebar__item">
                <span className="sidebar__title">CATEGORIES</span>
                <ul className="sidebar__list">
                    <li className="sidebar__list--item">Life</li>
                    <li className="sidebar__list--item">Music</li>
                    <li className="sidebar__list--item">Style</li>
                    <li className="sidebar__list--item">Sport</li>
                    <li className="sidebar__list--item">Tech</li>
                    <li className="sidebar__list--item">Cinema</li>
                </ul>
            </div>
            <div className="sidebar__item">
                <span className="sidebar__title">FOLLOW ME</span>
                <div className="sidebar__social">
                <p>facebook</p>
                <p>instagram</p>
                <p>youtube</p>
                <p>zalo</p>
                </div>
            </div>
        </div>
    );
}

export default Sidebar