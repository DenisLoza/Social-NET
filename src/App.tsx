import React from "react"
import {BrowserRouter, Route} from "react-router-dom"
import "./App.css"
import Header from './components/Header/Header'
import Nav from "./components/Nav/Nav"
import News from "./components/News/News"
import Music from "./components/Music/Music"
import Settings from "./components/Settings/Settings"
import DialogsContainer from "./components/Dialogs/DialogsContainer"
import UsersContainer from "./components/Users/UsersContainer"
import ProfileContainer from "./components/Profile/ProfileContainer"



function App() {
    // route следит только за путем в браузере, если он совпадает
    // с path, тогда рендерит то что в render и удаляет другие рендеры
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Nav/>
                <div className="app-wrapper-content">
                    <Route path="/profile"
                           render={() => < ProfileContainer />}/>
                    <Route path="/users"
                           render={() => < UsersContainer />}/>
                    <Route path="/dialogs"
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
