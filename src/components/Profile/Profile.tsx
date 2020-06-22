import React from 'react'
import c from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo'
import MyPostsContainer from "./MyPosts/MyPostsContainer";


const Profile = () => {
    return (
        <main className={c.profile}>
            <ProfileInfo/>
            <MyPostsContainer/>
        </main>
    )
}
export default Profile
