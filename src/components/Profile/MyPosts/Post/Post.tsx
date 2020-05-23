import React from 'react';
import s from './Post.module.css';
import {postsType} from "../../../../redux/state";


const Post = (props: postsType) => {
  return (
    <div className={s.post}>
      <div className={s.item}>
        <img src="https://encrypted-tbn0.gstatic.com/
        images?q=tbn%3AANd9GcQ5SL2L701AIjiyU-6DuRIKUDJv1iyemeo--m0_LdszZq8NvQnU&usqp=CAU" />
        {props.message}
          <div>
            <span>like {props.count}</span>
          </div>
        </div>
    </div>
  );
}
export default Post;