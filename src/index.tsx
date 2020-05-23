import React from 'react';
import * as serviceWorker from './serviceWorker';
import {rerenderEntireTree} from './render';
import store from "./redux/state";

// Функция для перерисовки App
rerenderEntireTree(store);

serviceWorker.unregister();
