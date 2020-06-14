import React from 'react'
import s from './MyPosts.module.css'
import Post from './Post/Post';
import {postsType} from "../../../redux/profilePageReducer"

type MyPostsType = {
    posts: postsType[]
    newPostText: string
    addPostName: () => void
    updateTextAreaChange: (newMessage: string) => void
}

const MyPosts = (props: MyPostsType) => {

    let postsElements = props.posts
        .map(p => <Post message={p.message} count={p.count}/>)


    let addMessage = () => {
        props.addPostName()
    }

    let onTextareaChange = (e: any) => {
        let newMessage = e.target.value
        props.updateTextAreaChange(newMessage)
    }

    return (
        <div className={s.myPosts}>
            <div>
                This is MyPost!
            </div>
            <div className={s.inputField}>
              <textarea className={s.textarea}
                  // следит за введенными значениями в поле
                        onChange={onTextareaChange}
                  // значение, которое отобразиться в поле ввода
                        value={props.newPostText}
              />
                <button className={s.button}
                    // следит за нажатиями на клавишу
                        onClick={addMessage}>SEND
                </button>
            </div>
            <div className={s.postsElements}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts
