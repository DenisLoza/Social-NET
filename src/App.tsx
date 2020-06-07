import React from 'react';
import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import {postAndMessageType} from "./redux/state";

type appType = {
    appState: postAndMessageType
    dispatch: (action: any) => any
}

function App(props: appType) {
  return (
    <BrowserRouter>
    <div className="app-wrapper">
      <Header />
      <Nav />
      <div className="app-wrapper-content">
        <Route path='/profile'
               render={() => <Profile posts={props.appState.profilePage.posts}
                                      newPostText={props.appState.profilePage.newPostText}
                                      dispatch={props.dispatch} />} />
        <Route path='/dialogs'
               render={() => <Dialogs messages={props.appState.dialogsPage.messages}
                                      dialogs={props.appState.dialogsPage.dialogs} />} />
        <Route path='/news'
               render={() => <News />} />
        <Route path='/music'
               render={() => <Music />} />
        <Route path='/settings'
               render={() => <Settings />} />
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
