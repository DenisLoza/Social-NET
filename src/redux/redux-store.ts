import a from "./_state"
import {applyMiddleware, combineReducers, compose, createStore} from "redux"
import profilePageReducer from "./profilePageReducer"
import dialogsPageReducer from "./dialogsPageReducer"
import usersPageReducer from "./usersPageReducer"
import authReducer from "./authReducer"
import thunkMiddleware from "redux-thunk"
import {reducer as formReducer} from "redux-form"
import appReducer from "./appReducer"

type rootReducerType = typeof rootReducer
export type appStateType = ReturnType<rootReducerType>

const rootReducer = combineReducers({
    profilePage: profilePageReducer,
    dialogsPage: dialogsPageReducer,
    usersPage: usersPageReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer
})

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))

// @ts-ignore
// для обработки в консоли метода: window.getState()
window.__store__ = store
// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export default store
