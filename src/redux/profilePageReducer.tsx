import {v1} from "uuid";

export type postsType = {
    id: string
    message: string
    count: number
}
export type profilePageType = {
    posts: Array<postsType>
    newPostText: string
}
export type actionProfilePageType = {
    type: string
    newMessage: string
}


const ADD_POST_NAME: string = "ADD_POST_NAME"
const UPDATE_TEXT_AREA_CHANGE: string = "UPDATE_TEXT_AREA_CHANGE"


let initialState = {
    posts: [
        {id: v1(), message: 'Hello, how are you?', count: 20},
        {id: v1(), message: 'It is my first post!', count: 34},
        {id: v1(), message: 'Fine', count: 34},
        {id: v1(), message: 'Ok', count: 34},
        {id: v1(), message: 'i love', count: 34},
    ],
    newPostText: ""
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

        default:
            return state
    }
}
// Функция ActionCreator dispatch
export const addPostNameActionCreator = () => {
    return {
        type: ADD_POST_NAME
    }
};
// Функция ActionCreator dispatch
export const updateTextAreaChangeActionCreator = (newMessage: string | null) => {
    return {
        type: UPDATE_TEXT_AREA_CHANGE,
        newMessage: newMessage
    }
};

export default profilePageReducer
