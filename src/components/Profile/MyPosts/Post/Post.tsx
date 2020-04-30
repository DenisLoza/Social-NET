import React from 'react';
import c from './Post.module.css';

const Post = () => {
  return (
    <div className={c.post}>
      <div className={c.item}>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ5SL2L701AIjiyU-6DuRIKUDJv1iyemeo--m0_LdszZq8NvQnU&usqp=CAU" />
          My post from
          <div>
            <span>like</span>
          </div>
        </div>
    </div>
  );
}
export default Post;