import React from 'react';
import c from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';


const Profile = (props: any) => {
    return (
      <main className={c.profile}>
        <ProfileInfo />
        <MyPosts posts={props.posts}/>
      </main>
    );
}
export default Profile;