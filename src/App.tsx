import React from 'react'
import './App.css'
import {BrowserRouter, Route} from "react-router-dom"
import Header from './components/Header/Header'
import Nav from './components/Nav/Nav'
import Profile from './components/Profile/Profile'
import Dialogs from './components/Dialogs/Dialogs'
import News from './components/News/News'
import Music from './components/Music/Music'
import Settings from './components/Settings/Settings'
import {profilePageType} from "./redux/profilePageReducer"
import {dialogsPageType} from "./redux/dialogsPageReducer"
import DialogsContainer from "./components/Dialogs/DialogsContainer";

export type postAndMessageType = {
    profilePage: profilePageType,
    dialogsPage: dialogsPageType
}
type appType = {
    appState: postAndMessageType
    dispatch: (action: any) => any
}
// App(props: appType)
function App() {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Nav/>
                <div className="app-wrapper-content">
                    <Route path='/profile'
                           render={() => <Profile/>}/>
                               {/*// posts={props.appState.profilePage.posts}*/}
                               {/*//                    newPostText={props.appState.profilePage.newPostText}*/}
                               {/*//                    dispatch={props.dispatch}/>}/>*/}
                    <Route path='/dialogs'
                           render={() => <DialogsContainer/>}/>
                               {/*// messages={props.appState.dialogsPage.messages}*/}
                               {/*//                    dialogs={props.appState.dialogsPage.dialogs}*/}
                               {/*//                    newMessageDialogBody={props.appState.dialogsPage.newMessageDialogBody}*/}
                               {/*//                    dispatch={props.dispatch}/>}/>*/}
                    <Route path='/news'
                           render={() => <News/>}/>
                    <Route path='/music'
                           render={() => <Music/>}/>
                    <Route path='/settings'
                           render={() => <Settings/>}/>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App
