import {authAPI} from "../api/api"
import {stopSubmit} from "redux-form"

const SET_USER_DATE: string = "SET_USER_DATE"

export type authType = {
    id: number | null
    login: string | null
    email: string | null
    isAuth: boolean
}

let initialState = {
    id: null,
    login: null,
    email: null,
    isAuth: false
}
type setUserDataType = {
    type: string
    payload: {
        id: number | null
        login: string | null
        email: string | null
        isAuth: boolean
    }
}

const authReducer = (state: authType = initialState, action: setUserDataType) => {
    switch (action.type) {
        case SET_USER_DATE:
            return {...state, ...action.payload}
        default:
            return state
    }
}

// ActionCreator
export const setUserData = (payload: authType) => {
    return {
        type: SET_USER_DATE,
        payload: payload
    }
}
// THUNKS
export const getUserDataTC = () => (dispatch: (arg0: any) => void) => {
    authAPI.me()
        .then(response => {
            if (response.data.resultCode === 0) {
                let data = response.data.data
                let payload = {...data, isAuth: true}
                dispatch(setUserData(payload))
            }
        })
}
export const loginTC = (email: string, password: string, rememberMe: boolean) => (dispatch: (arg0: any) => void) => {
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
export const logoutTC = () => (dispatch: (arg0: any) => void) => {
    authAPI.logout()
        .then(response => {
            if (response.data.resultCode === 0) {
                let payload = {id: null, login: null, email: null, isAuth: false}
                dispatch(setUserData(payload))
            }
        })
}

export default authReducer
