import React from 'react'
import c from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo'
import {postsType} from "../../redux/profilePageReducer"
import MyPostsContainer from "./MyPosts/MyPostsContainer";

export type ProfileType = {
    posts: postsType[]
    newPostText: string
    dispatch: (action: any) => any
}


const Profile = (props: ProfileType) => {
    return (
        <main className={c.profile}>
            <ProfileInfo/>
            <MyPostsContainer posts={props.posts}
                              newPostText={props.newPostText}
                              dispatch={props.dispatch}/>
        </main>
    )
}
export default Profile
