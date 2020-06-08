export type postsType = {
    message: string,
    count: number
};
export type dialogsType = {
    id: number,
    name: string
};
export type messagesType = {
    id: number,
    message: string
};
type profilePageType = {
    posts: Array<postsType>
    newPostText: string
};
export type dialogsPageType = {
    dialogs: Array<dialogsType>,
    messages: Array<messagesType>,
    newMessageDialogBody: string
};
export type postAndMessageType = {
    profilePage: profilePageType,
    dialogsPage: dialogsPageType
};
export type storeType = {
    _state: postAndMessageType
    rerenderEntireTree: any
    subscribe: any
    getState: () => postAndMessageType
    dispatch: (action: any) => any
    // addPost: addPostType
    // updateTextareaChange: updateTextareaChangeType
};


// Задаем имена (type) для функций ActionCreator
const ADD_POST_NAME: string = "ADD_POST_NAME";
const UPDATE_TEXT_AREA_CHANGE: string = "UPDATE_TEXT_AREA_CHANGE";
const UPDATE_NEW_MESSAGE_DIALOG_BODY: string = "UPDATE_NEW_MESSAGE_DIALOG_BODY";
const SEND_DIALOG_MESSAGE: string = "SEND_DIALOG_MESSAGE";


export let _state: postAndMessageType = {
    profilePage: {
        posts: [
            {message: 'Hello, how are you?', count: 20},
            {message: 'It is my first post!', count: 34},
            {message: 'Fine', count: 34},
            {message: 'Ok', count: 34},
            {message: 'i love', count: 34},
        ],
        newPostText: ""
    },
    dialogsPage: {
        dialogs: [
            {id: 1, name: 'Dima'},
            {id: 2, name: 'Sweta'},
            {id: 3, name: 'Katya'},
            {id: 4, name: 'Nadya'},
            {id: 5, name: 'Dan'},
        ],
        messages: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'How are you?'},
            {id: 3, message: 'Fine'},
            {id: 4, message: 'Ok'},
            {id: 5, message: 'i love'},
        ],
        newMessageDialogBody: ""
    }
};

// Создаем стор, который передает значения стейт и других функций одновременно в одном объекте
const store: storeType = {
    _state,
    rerenderEntireTree (store: any) {
        console.log("")
    },
    subscribe (observer: any)  {
        this.rerenderEntireTree = observer
    },
    getState () {
      return this._state
    },
    dispatch(action) {
        if (action.type === ADD_POST_NAME) {
            let newPost = {message: this._state.profilePage.newPostText, count: 0}
            this._state.profilePage.posts.push(newPost)
            this._state.profilePage.newPostText = ""
            this.rerenderEntireTree(this._state)
        } else if (action.type === UPDATE_TEXT_AREA_CHANGE) {
            this._state.profilePage.newPostText = action.newMessage
            this.rerenderEntireTree(this._state)
        } else if (action.type === UPDATE_NEW_MESSAGE_DIALOG_BODY) {
            this._state.dialogsPage.newMessageDialogBody = action.body
            this.rerenderEntireTree(this._state)
        } else if (action.type === SEND_DIALOG_MESSAGE) {
            let newBody = {id: 6, message: this._state.dialogsPage.newMessageDialogBody}
            this._state.dialogsPage.messages.push(newBody)
            this._state.dialogsPage.newMessageDialogBody = ""
            this.rerenderEntireTree(this._state)
        }

    },
};
// Функция ActionCreator dispatch для компоненты MyPosts
export const addPostNameActionCreator = () => {
    return {
        type: ADD_POST_NAME
    }
};
// Функция ActionCreator dispatch для компоненты MyPosts
export const updateTextAreaChangeActionCreator = (newMessage: string | null) => {
    return {
        type: UPDATE_TEXT_AREA_CHANGE,
        newMessage: newMessage
    }
};
// Функция ActionCreator dispatch для компоненты Dialogs
export const sendDialogMessageActionCreator = () => {
    return {
        type: SEND_DIALOG_MESSAGE
    }
}
// Функция ActionCreator dispatch для компоненты Dialogs
export const updateNewMessageDialogBodyActionCreator = (body: string | null) => {
    return {
        type: UPDATE_NEW_MESSAGE_DIALOG_BODY,
        body: body
    }
}

(<any>window).store = store

export default store;
