export type postsType = {
    message: string,
    count: number
}
export type profilePageType = {
    posts: Array<postsType>
    newPostText: string
}

const ADD_POST_NAME: string = "ADD_POST_NAME"
const UPDATE_TEXT_AREA_CHANGE: string = "UPDATE_TEXT_AREA_CHANGE"

let initialState = {
    posts: [
        {message: 'Hello, how are you?', count: 20},
        {message: 'It is my first post!', count: 34},
        {message: 'Fine', count: 34},
        {message: 'Ok', count: 34},
        {message: 'i love', count: 34},
    ],
    newPostText: ""
}

const profilePageReducer = (state: profilePageType = initialState, action: any) => {

    switch (action.type) {
        case ADD_POST_NAME:
            let newPost = {message: state.newPostText, count: 0}
            state.posts.push(newPost)
            state.newPostText = ""
            return state
        case UPDATE_TEXT_AREA_CHANGE:
            state.newPostText = action.newMessage
            return state
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
