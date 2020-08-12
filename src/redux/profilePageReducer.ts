import {v1} from "uuid"
import {profileAPI, usersAPI} from "../api/api"
import {Dispatch} from "redux"


const ADD_POST_NAME = "ADD_POST_NAME"
const SET_USER_PROFILE = "SET_USER_PROFILE"
const SET_STATUS = "SET_STATUS"

const initialState: profilePageType = {
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

const profilePageReducer = (state = initialState, action: profileACType): profilePageType => {

    switch (action.type) {
        case ADD_POST_NAME:
            let newPost = {id: v1(), message: action.newPostText, count: 0}
            // делаем копию стейта. Таким образов копируются только примитивы, без вложенных объектов!!!
            return<profilePageType> {
                ...state, posts: [...state.posts, newPost]
            }
        case SET_USER_PROFILE:
            return {
                ...state, profile: action.profile
            }
        case SET_STATUS:
            return {
                ...state, status: action.status
            }
        default:
            return state
    }
}

// ACTION CREATOR
export type addPostNameACType = { type: typeof ADD_POST_NAME, newPostText: string | null }
export const addPostNameActionCreator = (newPostText: string | null): addPostNameACType => {
    return {
        type: ADD_POST_NAME,
        newPostText: newPostText,
    }
}

export type setUserProfileACType = { type: typeof SET_USER_PROFILE, profile: object | null}
export const setUserProfileAC = (profile: object | null): setUserProfileACType => ({type: SET_USER_PROFILE, profile})

export type setStatusACType = { type: typeof SET_STATUS, status: string }
export const setStatusAC = (status: string): setStatusACType => ({type: SET_STATUS, status})

// THUNK
export const getUserProfileTC = (userId: string) => (dispatch: Dispatch<profileACType>) => {
    usersAPI.getProfile(userId)
        .then(response => {
            dispatch(setUserProfileAC(response.data))
        })
}
export const getStatusTC = (userId: string) => (dispatch: Dispatch<profileACType>) => {
    profileAPI.getStatus(userId)
        .then(response => {
            dispatch(setStatusAC(response.data))
        })
}
export const updateStatusTC = (status: string) => (dispatch: Dispatch<profileACType>) => {
    profileAPI.updateStatus(status)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setStatusAC(status))
            }
        })
}
export default profilePageReducer


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
export type profileACType =
    addPostNameACType
    | setUserProfileACType
    | setStatusACType

