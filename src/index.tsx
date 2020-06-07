import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import store, {postAndMessageType} from "./redux/state";
import './index.css';
import App from './App';



let rerenderEntireTree = (state: postAndMessageType) => {
    ReactDOM.render(
        <React.StrictMode>
            <App appState={state}
                 dispatch={store.dispatch.bind(store)} />
        </React.StrictMode>,
        document.getElementById('root')
    );
}
// Функция для перерисовки App
rerenderEntireTree(store.getState());

store.subscribe(rerenderEntireTree);

serviceWorker.unregister();
