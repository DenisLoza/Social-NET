import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

type postsData = {
  id: number
  message: string
  count: number
}

let postsData = [
  {id: 1, message: 'Hello, how are you?', count: 20},
  {id: 2, message: 'It is my first post!', count: 34},
  {id: 3, message: 'Fine'},
  {id: 4, message: 'Ok'},
  {id: 5, message: 'i love'},
]

const MyPosts = () => {
    return (
      <div className={s.myPosts}>
        <div>
          Hello!
        </div>
        <Post message={postsData[0].message} count={postsData[0].count}/>
        <Post message={postsData[1].message} count={postsData[1].count} />
        
      </div>
    );
}
export default MyPosts;