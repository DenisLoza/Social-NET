import React from "react"
import c from "./Profile.module.css"
import ProfileInfo from "./ProfileInfo/ProfileInfo"
import MyPostsContainer from "./MyPosts/MyPostsContainer"


type profileType = {
    profile: any
    status: string
    updateStatus: (newStatus: string) => void
}
const Profile = (props: profileType) => {
    return (
        <main className={c.profile}>
            < ProfileInfo profile={props.profile}
                          status={props.status}
                          updateStatus={props.updateStatus}/>
            < MyPostsContainer />
        </main>
    )
}

export default Profile
