import React from "react"
import userPhoto from "../../img/avatar/user.png"
import s from "./Users.module.css"

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
                    <img className={s.img}
                         alt="avatar"
                        // если персональноя аватарка отсутствует, то отобразить общую
                         src={u.avatarImg ? u.avatarImg : userPhoto}
                    />
                </div>
                <div>
                    {/*если пользователь followed, то отбразить кнопку unfollow и наоборот*/}
                    {u.followed
                        ? <button className={s.buttonUnfollow}
                                  onClick={() => {
                                      props.unfollow(u.id)
                                  }}>unfollow</button>
                        : <button className={s.buttonFollow}
                                  onClick={() => {
                                      props.follow(u.id)
                                  }}>follow</button>}
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
