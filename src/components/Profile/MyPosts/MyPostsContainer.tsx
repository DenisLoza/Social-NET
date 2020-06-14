import React from 'react'
import {addPostNameActionCreator, updateTextAreaChangeActionCreator} from "../../../redux/profilePageReducer"
import MyPosts from "./MyPosts";
import {ProfileType} from "../Profile";


const MyPostsContainer = (props: ProfileType) => {

    let addMessage = () => {
        props.dispatch(addPostNameActionCreator())
    }

    let onTextareaChange = (text: string) => {
        let action = updateTextAreaChangeActionCreator(text)
        props.dispatch(action)
    }

    return (
       <MyPosts updateTextAreaChange={onTextareaChange}
                addPostName={addMessage}
                newPostText={props.newPostText}
                posts={props.posts}
       />
    )
}

export default MyPostsContainer
