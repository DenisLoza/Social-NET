import React from 'react';
import s from './MyPosts.module.css';
import Post, {PostType} from './Post/Post';


type MyPostsType = {
    posts: Array<PostType>
}

const MyPosts = (props: MyPostsType) => {

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