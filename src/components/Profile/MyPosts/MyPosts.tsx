import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

export type postsDataType = {
  id: number,
  message: string,
  count: number
}

let postsData: Array<postsDataType> = [
  {id: 1, message: 'Hello, how are you?', count: 20},
  {id: 2, message: 'It is my first post!', count: 34},
  {id: 3, message: 'Fine', count: 34},
  {id: 4, message: 'Ok', count: 34},
  {id: 5, message: 'i love', count: 34},
]

let postsElements = postsData
  .map( p => <Post message={p.message} count={p.count}/>);

const MyPosts = () => {
    return (
      <div className={s.myPosts}>
        <div>
          Hello!
        </div>
        {/* <Post message={postsData[0].message} count={postsData[0].count}/>
        <Post message={postsData[1].message} count={postsData[0].count}/> */}
        { postsElements }
      </div>
    );
}
export default MyPosts;