import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    return (
      <div className={s.myPosts}>
        <div>
          Hello!
        </div>
        <Post message="Hello, how are you?" count="20" />
        <Post message="It is my first post!" count="34" />
        
      </div>
    );
}
export default MyPosts;