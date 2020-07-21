import a from "./_state"
import {applyMiddleware, combineReducers, createStore} from "redux"
import profilePageReducer from "./profilePageReducer"
import dialogsPageReducer from "./dialogsPageReducer"
import usersPageReducer from "./usersPageReducer"
import authReducer from "./authReducer"
import thunkMiddleware from "redux-thunk"

let reducers = combineReducers({
    profilePage: profilePageReducer,
    dialogsPage: dialogsPageReducer,
    usersPage: usersPageReducer,
    auth: authReducer
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware))

// @ts-ignore
// для обработки в консоли метода: window.getState()
window.store = store

export default store
