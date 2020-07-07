import {v1} from "uuid";

export type postsType = {
    id: string
    message: string
    count: number
}
export type profilePageType = {
    posts: Array<postsType>
    newPostText: string
    profile: null | object
}
export type actionProfilePageType = {
    type: string
    newMessage: string
    profile: object
}


const ADD_POST_NAME: string = "ADD_POST_NAME"
const UPDATE_TEXT_AREA_CHANGE: string = "UPDATE_TEXT_AREA_CHANGE"
const SET_USER_PROFILE: string = "SET_USER_PROFILE"


let initialState = {
    posts: [
        {id: v1(), message: "Hello, how are you?", count: 20},
        {id: v1(), message: "It is my first post!", count: 55},
        {id: v1(), message: "This is great!", count: 30},
        {id: v1(), message: "What do you mean about?", count: 22},
        {id: v1(), message: "I am so happy!", count: 43},
    ],
    newPostText: "",
    profile: null
}

const profilePageReducer = (state: profilePageType = initialState, action: actionProfilePageType) => {

    let stateCopy

    switch (action.type) {
        case ADD_POST_NAME:
            let newPost = {id: v1(), message: state.newPostText, count: 0}
            // делаем копию стейта. Таким образов копируются только примитивы, без вложенных объектов!!!
            stateCopy = {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ""
            }
            // поэтому дополнительно копируем вложенный объект posts
            // stateCopy.newPostText = ""
            // stateCopy.posts = [...state.posts]
            // stateCopy.posts.push(newPost)
            return stateCopy

        case UPDATE_TEXT_AREA_CHANGE:
            stateCopy = {
                ...state,
                newPostText: action.newMessage
            }
            // stateCopy.newPostText = action.newMessage
            return stateCopy

        case SET_USER_PROFILE:
            return {
                ...state, profile: action.profile
            }

        default:
            return state
    }
}
// Функция ActionCreator dispatch
export const addPostNameActionCreator = () => {
    return {
        type: ADD_POST_NAME
    }
}
// Функция ActionCreator dispatch
export const updateTextAreaChangeActionCreator = (newMessage: string | null) => {
    return {
        type: UPDATE_TEXT_AREA_CHANGE,
        newMessage: newMessage
    }
}
export const setUserProfileAC = (profile: object) => ({type: SET_USER_PROFILE, profile})

export default profilePageReducer
