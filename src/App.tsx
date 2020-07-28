import React from "react"
import {BrowserRouter, Route} from "react-router-dom"
import "./App.css"
import Nav from "./components/Nav/Nav"
import News from "./components/News/News"
import Music from "./components/Music/Music"
import Settings from "./components/Settings/Settings"
import DialogsContainer from "./components/Dialogs/DialogsContainer"
import UsersContainer from "./components/Users/UsersContainer"
import ProfileContainer from "./components/Profile/ProfileContainer"
import {HeaderContainer} from "./components/Header/HeaderContainer"
import Login from "./components/Login/Login"



function App() {
    // route следит только за путем в браузере, если он совпадает
    // с path, тогда рендерит то что в render и удаляет другие рендеры

    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <HeaderContainer/>
                <Nav/>
                <div className="app-wrapper-content">
                    <Route path="/login"
                           render={() => < Login />}/>
                    <Route path="/profile/:userId?"
                           // @ts-ignore
                           render={() => < ProfileContainer />}/>
                    <Route path="/users"
                           // @ts-ignore
                           render={() => < UsersContainer />}/>
                    <Route path="/dialogs"
                           // @ts-ignore
                           render={() => < DialogsContainer />}/>
                    <Route path="/news"
                           render={() => < News />}/>
                    <Route path="/music"
                           render={() => < Music />}/>
                    <Route path="/settings"
                           render={() => < Settings />}/>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App
