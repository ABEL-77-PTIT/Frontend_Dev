import React, { Component } from 'react';
import './post.css'

class Post extends Component {
    render() {
        return (
            <div className="post">
                <img className="post__img" src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" />
                <div className="post__info">
                    <div className="post__cats">
                        <div className="post__cat">Music</div>
                    </div>
                    <span className="post__title">
                        đường thương đau đày ải nhân gian ai chưa qua chưa phải là người.
                    </span>
                    <hr/>
                    <span className="post__date">1 hour ago</span>
                </div>
                <p className="post__desc">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus, corrupti? Pariatur velit eligendi consequatur minima impedit libero iusto odit perferendis nesciunt, tenetur architecto aperiam eius, excepturi molestiae facere nulla magni. 
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus, corrupti? Pariatur velit eligendi consequatur minima impedit libero iusto odit perferendis nesciunt, tenetur architecto aperiam eius, excepturi molestiae facere nulla magni.
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus, corrupti? Pariatur velit eligendi consequatur minima impedit libero iusto odit perferendis nesciunt, tenetur architecto aperiam eius, excepturi molestiae facere nulla magni.
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus, corrupti? Pariatur velit eligendi consequatur minima impedit libero iusto odit perferendis nesciunt, tenetur architecto aperiam eius, excepturi molestiae facere nulla magni.
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus, corrupti? Pariatur velit eligendi consequatur minima impedit libero iusto odit perferendis nesciunt, tenetur architecto aperiam eius, excepturi molestiae facere nulla magni.
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus, corrupti? Pariatur velit eligendi consequatur minima impedit libero iusto odit perferendis nesciunt, tenetur architecto aperiam eius, excepturi molestiae facere nulla magni.
                </p>
            </div>
        );
    }
}

export default Post;