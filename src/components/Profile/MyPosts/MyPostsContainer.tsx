import React from 'react'
import {addPostNameActionCreator, updateTextAreaChangeActionCreator} from "../../../redux/profilePageReducer"
import MyPosts from "./MyPosts";
import {ProfileType} from "../Profile";
import {connect} from "react-redux";

// MyPostsContainer = (props: ProfileType)
// const MyPostsContainer = () => {
//
//     let addMessage = () => {
//         props.dispatch(addPostNameActionCreator())
//     }
//
//     let onTextareaChange = (text: string) => {
//         let action = updateTextAreaChangeActionCreator(text)
//         props.dispatch(action)
//     }
//
//     return (
//        <MyPosts updateTextAreaChange={onTextareaChange}
//                 addPostName={addMessage}
//                 newPostText={props.newPostText}
//                 posts={props.posts}
//        />
//     )
// }

let mapStateToProps = (state: any) => {
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
