import React, { Component } from 'react';
import './write.css'
class Write extends Component {
    render() {
        return (
            <div className="write">
                <img src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" className="write__img" alt="" />
                <form className="write__form">
                    <div className="write__formGround">
                        <label htmlFor="fileInput">
                            <i className="write__icon fas fa-plus"></i>
                        </label>
                        <input type="file" id="fileInput" style={{display: "none"}} />
                        <input type="text" placeholder="Title" className="write__input" autoFocus={true} />
                    </div>
                    <div className="write__formGround">
                        <textarea className="write__input write__text" type="text" placeholder="Tell your story..."></textarea>
                    </div>
                    <button className="write__submit">Public</button>
                </form>
            </div>
        );
    }
}

export default Write;