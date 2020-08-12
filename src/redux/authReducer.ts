import {authAPI} from "../api/api"
import {stopSubmit} from "redux-form"
import {Dispatch} from "redux"


const SET_USER_DATE = "SET_USER_DATE"

const initialState: authType = {
    id: null,
    login: null,
    email: null,
    isAuth: false
}

const authReducer = (state = initialState, action: setUserDataACType): authType => {
    switch (action.type) {
        case SET_USER_DATE:
            return {...state, ...action.payload}
        default:
            return state
    }
}

// ACTION CREATOR
type setUserDataType = {type: typeof SET_USER_DATE, payload: authType}
export const setUserData = (payload: authType): setUserDataType => ({type: SET_USER_DATE, payload: payload})

// THUNK
export const getUserDataTC = () => (dispatch: Dispatch<setUserDataACType>) => {
    return authAPI.me()
        .then(response => {
            if (response.data.resultCode === 0) {
                let data = response.data.data
                let payload: payloadType = {...data, isAuth: true}
                dispatch(setUserData(payload))
            }
        })
}
export const loginTC = (email: string, password: string, rememberMe: boolean) => (dispatch: Dispatch<any>) => {
    authAPI.login(email, password, rememberMe)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(getUserDataTC())
            } else {
                //let message = response.data.messages.length > 0 ? response.data.messages[0] : "Error!"
                let action = stopSubmit("login", {_error: "Error! Wrong email or password!"})
                dispatch(action)
            }
        })
}
export const logoutTC = () => (dispatch: Dispatch<setUserDataACType>) => {
    authAPI.logout()
        .then(response => {
            if (response.data.resultCode === 0) {
                let payload: payloadType = {id: null, login: null, email: null, isAuth: false}
                dispatch(setUserData(payload))
            }
        })
}
export default authReducer


export type authType = {
    id: string | null
    login: string | null
    email: string | null
    isAuth: boolean
}
export type payloadType = {
    id: string | null
    login: string | null
    email: string | null
    isAuth: boolean
}
export type setUserDataACType =
    setUserDataType
