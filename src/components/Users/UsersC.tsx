import React from "react";
import s from "./Users.module.css";
import userPhoto from "../../img/avatar/user.png";
import axios from "axios";

class UsersC extends React.Component<any, any>{

    constructor(props: any) {
        super(props);
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            this.props.setUsers(response.data.items)
        });
    }

    render() {
        return (
            <div>
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
                        ? <button onClick={() => {
                            this.props.unfollow(u.id)
                        }}>unfollow</button>
                        : <button onClick={() => {
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
