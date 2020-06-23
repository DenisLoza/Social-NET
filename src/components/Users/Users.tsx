import React from "react"
import s from './Users.module.css'
import {usersArrayType, userType} from "../../redux/usersPageReducer";

type usersPageType = {
    users: userType
    unfollow: (id: string) => void
    follow: (id: string) => void
}

let Users = (props: any) => {

    let blockUser: JSX.Element[] = props.users
        .map((u: userType) => <div key={u.id}>
            <span>
                <div>
                    <img className={s.img} src={u.avatarImg} alt="avatar"/>
                </div>
                <div>
                    {/*если пользователь followed, то отбразить кнопку unfollow и наоборот*/}
                    {u.followed
                        ? <button onClick={() => {props.unfollow(u.id)}}>unfollow</button>
                        : <button onClick={() => {props.follow(u.id)}}>follow</button>}
                </div>
            </span>
            <span>
                <span>
                    <div>{u.fullName}</div>
                    <div>{u.status}</div>
                </span>
                <span>
                    <div>{u.location.country}</div>
                    <div>{u.location.city}</div>
                </span>
            </span>
        </div>)

    return (
        <div>
            {blockUser}
        </div>
    )
}

export default Users
