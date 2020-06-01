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
import {storeType} from "./redux/state";


function App(props: storeType) {
  console.log(props);
  return (
    <BrowserRouter>
    <div className="app-wrapper">
      <Header />
      <Nav />
      <div className="app-wrapper-content">
        <Route path='/profile'
               render={() => <Profile posts={props.state.profilePage.posts}
                                      addPost={props.addPost}
                                      newPostText={props.state.profilePage.newPostText}
                                      updateTextareaChange={props.updateTextareaChange} />} />
        <Route path='/dialogs'
               render={() => <Dialogs messages={props.state.dialogsPage.messages}
                                      dialogs={props.state.dialogsPage.dialogs} />} />
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
