import profilePageReducer from "./profilePageReducer";
import dialogsPageReducer from "./dialogsPageReducer";

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
        this._state.profilePage = profilePageReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsPageReducer(this._state.dialogsPage, action)

        this.rerenderEntireTree(this._state)
    }
};


(<any>window).store = store

export default store;
