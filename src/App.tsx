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
import {dialogsType, messagesType, postsType} from './index';

type AppType = {
  posts: Array<postsType>,
  dialogs: Array<dialogsType>,
  messages: Array<messagesType>
}


function App(props: AppType) {
  return (
    <BrowserRouter>
    <div className="app-wrapper">
      <Header />
      <Nav />
      <div className="app-wrapper-content">
        <Route path='/profile' render={() => <Profile posts={props.posts}/>} />
        <Route path='/dialogs' render={() => <Dialogs dialogs={props.dialogs} messages={props.messages}/>} />
        <Route path='/news' render={() => <News />} />
        <Route path='/music' render={() => <Music />} />
        <Route path='/settings' render={() => <Settings />} />
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
