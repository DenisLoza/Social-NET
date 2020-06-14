import React from 'react'
import c from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts'
import ProfileInfo from './ProfileInfo/ProfileInfo'
import {postsType} from "../../redux/profilePageReducer"

export type ProfileType = {
    posts: postsType[]
    newPostText: string
    dispatch: (action: any) => any
}


const Profile = (props: ProfileType) => {
    return (
        <main className={c.profile}>
            <ProfileInfo/>
            <MyPosts posts={props.posts}
                     newPostText={props.newPostText}
                     dispatch={props.dispatch}/>
        </main>
    )
}
export default Profile
