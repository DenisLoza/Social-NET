import React from "react"
import s from "./MyPosts.module.css"
import Post from "./Post/Post"
import {postsType} from "../../../redux/profilePageReducer"
import {AddNewPostFormRedux, FormPostDataType} from "./AddNewPostForm"

type MyPostsType = {
    posts: postsType[]
    newPostText: string
    addPostName: (body: string) => void
    // updateTextAreaChange: (newMessage: string) => void
}

const MyPosts = (props: MyPostsType) => {

    let postsElements: JSX.Element[] = props.posts
        .map(p => <Post message={p.message} count={p.count} id={p.id} key={p.id}/>)

    let addPost = (value: FormPostDataType) => {
        let body = value.newPostText
        props.addPostName(body)
    }

    return (
        <div className={s.myPosts}>
            <div>
                This is MyPost!
            </div>
            <AddNewPostFormRedux onSubmit={addPost} />
            <div className={s.postsElements}>
                {postsElements}
            </div>
        </div>
    )
}
export default MyPosts
