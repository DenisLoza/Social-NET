import React from 'react';
import c from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';


const Profile = () => {
    return (
      <main className={c.profile}>
        <ProfileInfo />
        <MyPosts />
      </main>
    );
}
export default Profile;