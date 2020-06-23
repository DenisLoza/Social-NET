import React from 'react'
import s from './Header.module.css'
import logo from "../../img/logo.png"

const Header = () => {
    return (
        <header className={s.header}>
            <img alt="header_image" src={logo}></img>
        </header>
    )
}

export default Header
