import React from "react"
import userPhoto from "../../img/avatar/user.png"
import s from "./Users.module.css"
import {NavLink} from "react-router-dom"
import {userType} from "../../redux/usersPageReducer"


let UsersFunctional: React.FC<usersFunctionalType> = (props) => {

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
                                 onClick={(e) => {
                                     props.onPageChanged(p)
                                 }}>{p}</span>
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
                         src={u.avatarImg ? u.avatarImg : userPhoto}/>
                    </NavLink>
                </div>
                <div>
                    {u.followed
                        // если кто-нибудь в массиве равен id пользователя, то вернет true
                        ? <button disabled={props.followingInProgress.some((id: string) => id === u.id)}
                                  onClick={() => {
                                      props.unfollow(u.id)
                                      // статус загрузки при нажатии на кнопку FOLLOW будет включен
                                      // props.toggleFollowingProgress(true, u.id)
                                      // usersAPI.unfollow(u.id)
                                      //     .then(response => {
                                      //         // если в ответе мы получили валидную авторизацию, то
                                      //         if (response.data.resultCode == 0) {
                                      //             // ответ от сервера отправляем в диспатч follow
                                      //             props.unfollow(u.id)
                                      //         }
                                      //         // статус загрузки при нажатии на кнопку FOLLOW будет отменен
                                      //         props.toggleFollowingProgress(false, u.id)
                                      //     })
                                  }}> unfollow </button>
                        // если кто-нибудь в массиве равен id пользователя, то вернет true
                        : <button disabled={props.followingInProgress.some((id: string) => id === u.id)}
                                  onClick={() => {
                                      props.follow(u.id)
                                      // статус загрузки при нажатии на кнопку FOLLOW будет включен
                                      // props.toggleFollowingProgress(true, u.id)
                                      // usersAPI.follow(u.id)
                                      //     .then(response => {
                                      //         // если в ответе мы получили валидную авторизацию, то
                                      //         if (response.data.resultCode == 0) {
                                      //             // ответ от сервера отправляем в диспатч follow
                                      //             props.follow(u.id)
                                      //         }
                                      //         // статус загрузки при нажатии на кнопку FOLLOW будет отменен
                                      //         props.toggleFollowingProgress(false, u.id)
                                      //     })
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

type usersFunctionalType = {
    totalPagesCount: number
    pageSize: number
    currentPage: number
    users: Array<userType>
    followingInProgress: Array<string>
    unfollow: (id: string) => void
    follow: (id: string) => void
    toggleFollowingProgress: any
    onPageChanged: (pageNumber: number) => void
}

export default UsersFunctional
