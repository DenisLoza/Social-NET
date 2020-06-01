import React from 'react';
import c from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import {addPostType, postsType, updateTextareaChangeType} from "../../redux/state";

export type ProfileType = {
    posts: postsType[]
    addPost: addPostType
    newPostText: string
    updateTextareaChange: updateTextareaChangeType
}

const Profile = (props: ProfileType) => {
    return (
      <main className={c.profile}>
        <ProfileInfo />
        <MyPosts posts={props.posts}
                 addPost={props.addPost}
                 newPostText={props.newPostText}
                 updateTextareaChange={props.updateTextareaChange}/>
      </main>
    );
}
export default Profile;