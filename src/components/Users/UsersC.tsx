import React from "react";
import s from "./Users.module.css";
import userPhoto from "../../img/avatar/user.png";
import axios from "axios";

class UsersC extends React.Component<any, any>{

    // constructor(props: any) {
    //     super(props);
    //     axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
    //         this.props.setUsers(response.data.items)
    //     });
    // }
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
        });
    }
    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
            let a = response.data.totalCount
            // если мы получим от сервера общее кол-во пользователей более 100, то отобразить только 100
            if (a > 100) {
                let b = 100
                this.props.setTotalUsersCount(b)
            } else {
                this.props.setTotalUsersCount(a)
            }
        });
    }


    render() {
        // округляем до большего целого. кол-во отображаемого блока страниц с пользователями
        let pagesCount = Math.ceil(this.props.totalPagesCount / this.props.pageSize)
        let pages = []
        // создаем массив из чисел по порядку (кол-во страниц отображаемых одновременно пользователей на одной странице)
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }

        return (
            <div>
                <div className={s.pageCounter}>
                    {pages.map(p => {
                        return <span className={this.props.currentPage === p ? s.selectedPage : s.anSelectedPage}
                                     onClick={(e) => {this.onPageChanged(p)}}>{p}</span>
                    })}
                </div>
                {this.props.users.map((u: any) => <div key={u.id}>
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
                            this.props.unfollow(u.id)
                        }}>unfollow</button>
                        : <button className={s.buttonFollow}
                                  onClick={() => {
                            this.props.follow(u.id)
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
}
export default UsersC
