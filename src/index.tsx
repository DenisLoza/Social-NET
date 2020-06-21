import React from 'react'
import ReactDOM from 'react-dom'
import * as serviceWorker from './serviceWorker'
import store from "./redux/redux-store"
import './index.css'
import App, {postAndMessageType} from './App'
import {Provider} from "react-redux";

// rerenderEntireTree = (state: postAndMessageType)

    ReactDOM.render(
        <React.StrictMode>
           <Provider store={store}>
               <App />
           </Provider>
        </React.StrictMode>,
        document.getElementById('root')
    )

{/*<App appState={state}*/}
{/*dispatch={store.dispatch.bind(store)}/>*/}

// Функция для перерисовки App
// rerenderEntireTree()


// store.subscribe(() => {
//     let state = store.getState()
//     rerenderEntireTree(state)
// })


serviceWorker.unregister()
