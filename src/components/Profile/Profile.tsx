import React from "react"
import c from "./Profile.module.css"
import ProfileInfo from "./ProfileInfo/ProfileInfo"
import MyPostsContainer from "./MyPosts/MyPostsContainer"


const Profile = (props: any) => {
    return (
        <main className={c.profile}>
            < ProfileInfo profile={props.profile}/>
            < MyPostsContainer />
        </main>
    )
}

export default Profile
