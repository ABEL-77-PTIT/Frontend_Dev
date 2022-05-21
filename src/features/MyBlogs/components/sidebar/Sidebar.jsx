import React, { Component } from 'react';
import './sidebar.css'
class Sidebar extends Component {
    render() {
        return (
            <div className="sidebar">
                <div className="sidebar__item">
                    <span className="sidebar__title">ABOUT ME</span>
                    <img src="https://avatars.githubusercontent.com/u/70141159?v=4" alt="Truong Hung An" title="Truong Hung An" className="w-80 h-80 rounded-3xl mb-4 mt-4" />
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
                    <span className="sidebar__title">FOLLOW US</span>
                    <div className="sidebar__social">
                    <i className="sidebar__icon fab fa-facebook-square"></i>
                    <i className="sidebar__icon fab fa-twitter-square"></i>
                    <i className="sidebar__icon fab fa-pinterest-square"></i>
                    <i className="sidebar__icon fab fa-instagram-square"></i>
                    </div>
                </div>
            </div>
        );
    }
}

export default Sidebar;