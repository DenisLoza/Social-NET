import a from "./_state"
import {combineReducers, createStore} from "redux"
import profilePageReducer from "./profilePageReducer"
import dialogsPageReducer from "./dialogsPageReducer"
import usersPageReducer from "./usersPageReducer";
import authReducer from "./authReducer";

let reducers = combineReducers({
    profilePage: profilePageReducer,
    dialogsPage: dialogsPageReducer,
    usersPage: usersPageReducer,
    auth: authReducer
})

let store = createStore(reducers)

// @ts-ignore
// для обработки в консоли метода: window.getState()
window.store = store

export default store
