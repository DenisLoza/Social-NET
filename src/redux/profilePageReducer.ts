import {v1} from "uuid"
import {profileAPI, usersAPI} from "../api/api"

export type postsType = {
    id: string
    message: string
    count: number
}
export type profilePageType = {
    posts: Array<postsType>
    profile: null | object
    status: string
}
export type actionProfilePageType = {
    type: string
    newMessage: string
    profile: object
    status: string
    newPostText: string
}


const ADD_POST_NAME: string = "ADD_POST_NAME"
const SET_USER_PROFILE: string = "SET_USER_PROFILE"
const SET_STATUS: string = "SET_STATUS"


let initialState = {
    posts: [
        {id: v1(), message: "Hello, how are you?", count: 20},
        {id: v1(), message: "It is my first post!", count: 55},
        {id: v1(), message: "This is great!", count: 30},
        {id: v1(), message: "What do you mean about?", count: 22},
        {id: v1(), message: "I am so happy!", count: 43},
    ],
    profile: null,
    status: "",
}

const profilePageReducer = (state: profilePageType = initialState, action: actionProfilePageType) => {

    let stateCopy

    switch (action.type) {
        case ADD_POST_NAME:
            let newPost = {id: v1(), message: action.newPostText, count: 0}
            // делаем копию стейта. Таким образов копируются только примитивы, без вложенных объектов!!!
            stateCopy = {
                ...state,
                posts: [...state.posts, newPost]
            }
            return stateCopy
        case SET_USER_PROFILE:
            return {
                ...state, profile: action.profile
            }
        case SET_STATUS:
            return {
                ...state,
                status: action.status
            }
        default:
            return state
    }
}
// Функция ActionCreator dispatch
export const addPostNameActionCreator = (newPostText: string | null) => {
    return {
        type: ADD_POST_NAME,
        newPostText: newPostText
    }
}
// Функция ActionCreator dispatch
export const setUserProfileAC = (profile: object) => ({type: SET_USER_PROFILE, profile})
export const setStatusAC = (status: string) => ({type: SET_STATUS, status})
export const getUserProfileTC = (userId: string) => (dispatch: (arg0: any) => void) => {
    usersAPI.getProfile(userId)
        .then(response => {
            dispatch(setUserProfileAC(response.data))
        })
}
export const getStatusTC = (userId: string) => (dispatch: (arg0: any) => void) => {
    profileAPI.getStatus(userId)
        .then(response => {
            dispatch(setStatusAC(response.data))
        })
}
export const updateStatusTC = (status: string) => (dispatch: (arg0: any) => void) => {
    profileAPI.updateStatus(status)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setStatusAC(status))
            }
        })
}

export default profilePageReducer
