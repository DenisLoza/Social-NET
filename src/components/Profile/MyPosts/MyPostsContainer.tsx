// import React from 'react'
import {connect} from "react-redux";
import {
    addPostNameActionCreator,
    updateTextAreaChangeActionCreator,
    postsType,
    profilePageType
} from "../../../redux/profilePageReducer"
import MyPosts from "./MyPosts";


type containerMyPostsType = {
    profilePage: profilePageType
    posts: postsType
    newPostText: string
}

let mapStateToProps = (state: containerMyPostsType) => {
    return {
        newPostText: state.profilePage.newPostText,
        posts: state.profilePage.posts
    }
}

let mapDispatchToProps = (dispatch: any) => {
    return {
        updateTextAreaChange: (text: string) => {
            let action = updateTextAreaChangeActionCreator(text)
            dispatch(action)
        },
        addPostName: () => {
            dispatch(addPostNameActionCreator())
        }
    }
}

const MyPostsContainer = connect (mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer
