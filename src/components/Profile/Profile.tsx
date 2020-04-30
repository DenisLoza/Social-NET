import React from 'react';
import c from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';


const Profile = () => {
    return (
      <main className={c.profile}>
       <div className={c.item}>
         AVA
       </div>
       <MyPosts />
      </main>
    );
}
export default Profile;