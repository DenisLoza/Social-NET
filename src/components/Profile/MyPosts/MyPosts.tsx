import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {profilePageType} from "../../../redux/state";


const MyPosts = (props: profilePageType ) => {

    let postsElements = props.posts
        .map( p => <Post message={p.message} count={p.count}/>);

    return (
      <div className={s.myPosts}>
        <div>
          Hello!
        </div>
        {postsElements}
      </div>
    );
}
export default MyPosts;