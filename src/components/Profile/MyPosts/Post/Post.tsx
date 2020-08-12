import React from "react"
import s from "./Post.module.css"
import avatar from "../../../../img/avatar/man_5.jpg"
import {postsType} from "../../../../redux/profilePageReducer"


const Post: React.FC<postsType> = (props) => {
    return (
        <div className={s.post}>
            <div className={s.item}>
                <img alt="avatar" src={avatar}/>
                {props.message}
                <div>
                    <span>like {props.count}</span>
                </div>
            </div>
        </div>
    )
}

export default Post
