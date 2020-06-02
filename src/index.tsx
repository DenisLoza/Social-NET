import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import store, {subscribe} from "./redux/state";
import './index.css';
import App from './App';
import {storeType} from "./redux/state";


let rerenderEntireTree =(state: storeType) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state.state}
                 addPost={state.addPost}
                 updateTextareaChange={state.updateTextareaChange} />
        </React.StrictMode>,
        document.getElementById('root')
    );
}
// Функция для перерисовки App
rerenderEntireTree(store);

subscribe(rerenderEntireTree);

serviceWorker.unregister();
