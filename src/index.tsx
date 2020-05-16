import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

export type postsType = {
    id: number,
    message: string,
    count: number
}

export type dialogsType = {
    id: number
    name: string
};

export type messagesType = {
    id: number
    message: string
};

let posts: Array<postsType> = [
    {id: 1, message: 'Hello, how are you?', count: 20},
    {id: 2, message: 'It is my first post!', count: 34},
    {id: 3, message: 'Fine', count: 34},
    {id: 4, message: 'Ok', count: 34},
    {id: 5, message: 'i love', count: 34},
]

let dialogs: Array<dialogsType>= [
    {id: 1, name: 'Dima'},
    {id: 2, name: 'Sweta'},
    {id: 3, name: 'Katya'},
    {id: 4, name: 'Nadya'},
    {id: 5, name: 'Dan'},
]

let messages: Array<messagesType> = [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'How are you?'},
    {id: 3, message: 'Fine'},
    {id: 4, message: 'Ok'},
    {id: 5, message: 'i love'},
]

ReactDOM.render(
  <React.StrictMode>
    <App posts={posts}
         dialogs={dialogs}
         messages={messages}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
