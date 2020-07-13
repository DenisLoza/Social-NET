import React from "react"
import axios from "axios"
import s from './Users.module.css'
import userPhoto from "../../img/avatar/user.png"
import {userType} from "../../redux/usersPageReducer";

// type usersPageType = {
//     users: userType
//     unfollow: (id: string) => void
//     follow: (id: string) => void
// };

let Users = (props: any) => {

    let getUsers = () => {
        if (props.users.lengh === 0) {
            axios.get("https://social-network.samuraijs.com/api/1.0/users", {
                withCredentials: true
            }).then(response => {
                props.setUsers(response.data.items)
            });
        }
    }

    let blockUser: JSX.Element[] = props.users
        .map((u: userType) => <div key={u.id}>
            <span>
                <div>
                    <img className={s.img}
                         alt="avatar"
                        // если персональноя аватарка отсутствует, то отобразить общую
                         src={u.avatarImg != null ? u.avatarImg : userPhoto}
                    />
                </div>
                <div>
                    {u.followed
                        ? <button onClick={() => {
                            axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                withCredentials: true,
                                headers: {"API-KEY": "db4e48f9-ec7e-4d71-a9d1-0523c2d4dc78"}
                            })
                                .then(response => {
                                    // если в ответе мы получили валидную авторизацию, то
                                    if (response.data.resultCode == 0) {
                                        // ответ от сервера отправляем в диспатч follow
                                        props.unfollow(u.id)
                                    }
                                })
                        }}> unfollow </button>

                        : <button onClick={() => {
                            axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                withCredentials: true,
                                headers: {"API-KEY": "db4e48f9-ec7e-4d71-a9d1-0523c2d4dc78"}
                            })
                                .then(response => {
                                    // если в ответе мы получили валидную авторизацию, то
                                    if (response.data.resultCode == 0) {
                                        // ответ от сервера отправляем в диспатч follow
                                        props.follow(u.id)
                                    }
                                })
                        }}> follow </button>}
                </div>
            </span>
            <span>
                <span>
                    <div>{u.fullName}</div>
                    <div>{u.status}</div>
                </span>
                <span>
                    <div>{"u.location.country"}</div>
                    <div>{"u.location.city"}</div>
                </span>
            </span>
        </div>)

    return (
        <div>
            <button onClick={getUsers}>getUsers</button>
            {blockUser}
        </div>
    )
}

export default Users
