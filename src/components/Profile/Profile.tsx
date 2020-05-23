import React from 'react';
import c from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import {addPostType, postsType} from "../../redux/state";

export type ProfileType = {
    posts: postsType[]
    addPost: addPostType
}

const Profile = (props: ProfileType) => {
    console.log(props);
    debugger
    return (
      <main className={c.profile}>
        <ProfileInfo />
        <MyPosts posts={props.posts} addPost={props.addPost}/>
      </main>
    );
}
export default Profile;