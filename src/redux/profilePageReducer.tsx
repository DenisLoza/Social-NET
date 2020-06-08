const ADD_POST_NAME: string = "ADD_POST_NAME";
const UPDATE_TEXT_AREA_CHANGE: string = "UPDATE_TEXT_AREA_CHANGE";

const profilePageReducer = (state: any, action: any) => {

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
