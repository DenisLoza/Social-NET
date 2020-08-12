import React from "react"
import s from "./Header.module.css"
import {NavLink} from "react-router-dom"
import logo from "../../img/logo.png"


const Header: React.FC<headerType> = (props) => {
    return (
        <header className={s.header}>
            <img alt="header_image" src={logo}></img>
            <div className={s.loginBlock}>
                {props.isAuth
                    ? <div> {props.login} <button onClick={props.logoutTC}> LogOut </button> </div>
                    : <NavLink to={"/login"}> Login </NavLink>}
            </div>
        </header>
    )
}

export default Header

type headerType = {
    isAuth: boolean
    login: string | null
    logoutTC: () => void
}
