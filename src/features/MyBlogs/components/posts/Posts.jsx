import React, { Component } from 'react';
import Post from '../post/Post';
import './posts.css'
class Posts extends Component {
    render() {
        return (
            <div className="posts">
                <Post/>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
            </div>
        );
    }
}

export default Posts;