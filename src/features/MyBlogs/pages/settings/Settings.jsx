import React, { Component } from 'react';
import Sidebar from '../../components/sidebar/Sidebar';
import './settings.css'
class Settings extends Component {
    render() {
        return (
            <div className="settings">
                <div className="settings__wrapper">
                    <div className="settings__title">
                        <span className="settings__update--title">Update your account</span>
                        <span className="settings__delete--title">Delete account</span>
                    </div>
                    <form action="" className="settings__form">
                        <label>Profile Picture</label>
                        <div className="settings__pp">
                            <img src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" />
                            <label htmlFor="fileInput">
                                <i className="settings__pp--icon far fa-user-circle"></i>
                            </label>
                            <input type="file" id="fileInput" style={{display: "none"}}/>
                        </div>
                        <label>User name</label>
                        <input type="text" placeholder="Truong Hung An"/>
                        <label>Email</label>
                        <input type="email" placeholder="truonghungan2000@gmail.com"/>
                        <label>Password</label>
                        <input type="password" placeholder="type your pasword"/>
                        <button className="settings__submit">Update</button>
                    </form>
                </div>
                <Sidebar/>
            </div>
        );
    }
}

export default Settings;