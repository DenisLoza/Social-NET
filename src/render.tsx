import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {storeType} from "./redux/state";


export let rerenderEntireTree = (state: storeType) => {
    console.log(state);
    ReactDOM.render(
        <React.StrictMode>
            <App state={state.state} addPost={state.addPost} />
        </React.StrictMode>,
        document.getElementById('root')
    );
}
