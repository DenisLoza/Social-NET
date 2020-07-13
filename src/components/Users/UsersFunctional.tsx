import React from "react"
import userPhoto from "../../img/avatar/user.png"
import s from "./Users.module.css"
import {NavLink} from "react-router-dom"
import axios from "axios";

let UsersFunctional = (props: any) => {

    // округляем до большего целого. кол-во отображаемого блока страниц с пользователями
    let pagesCount = Math.ceil(props.totalPagesCount / props.pageSize)
    let pages = []
    // создаем массив из чисел по порядку (кол-во страниц отображаемых одновременно пользователей на одной странице)
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
    <div>
        <div className={s.pageCounter}>
            {pages.map(p => {
                return <span className={props.currentPage === p ? s.selectedPage : s.anSelectedPage}
                             onClick={(e) => {props.onPageChanged(p)}}>{p}</span>
            })}
        </div>
        {props.users.map((u: any) => <div key={u.id}>
            <span>
                <div>
                    {/*добавляем гиперссылку на профиль каждого пользователя по нажатию на аватар*/}
                    <NavLink to={"/profile/" + u.id}>
                    <img className={s.img}
                         alt="avatar"
                        // если персональноя аватарка отсутствует, то отобразить общую
                         src={u.avatarImg ? u.avatarImg : userPhoto} />
                    </NavLink>
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
                    <div>{u.fullName ? u.fullName : u.name}</div>
                    <div>{u.status}</div>
                </span>
                <span>
                    <div>{"u.location.country"}</div>
                    <div>{"u.location.city"}</div>
                </span>
            </span>
        </div>)}
    </div>
    )
}

export default UsersFunctional
