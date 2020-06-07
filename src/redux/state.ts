export type postsType = {
    message: string,
    count: number
};
type dialogsType = {
    id: number,
    name: string
};
type messagesType = {
    id: number,
    message: string
};
type profilePageType = {
    posts: Array<postsType>
    newPostText: string
};
export type dialogsPageType = {
    dialogs: Array<dialogsType>,
    messages: Array<messagesType>
};
export type postAndMessageType = {
    profilePage: profilePageType,
    dialogsPage: dialogsPageType
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
        ]
    }
};
// export type addPostType = (newText?: string) => void
// export type updateTextareaChangeType = (newText?: string) => void

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
const addPostName: string = "ADD-POST";
const updateTextAreaChangeName: string = "UPDATE-TEXT-AREA-CHANGE";

// Создаем стор, который передает значения стейт и двух функций одновременно в одном объекте
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
        if (action.type === addPostName) {
            let newPost = {message: this._state.profilePage.newPostText, count: 0}
            this._state.profilePage.posts.push(newPost)
            this._state.profilePage.newPostText = ""
            this.rerenderEntireTree(this._state)
        } else if (action.type === updateTextAreaChangeName) {
            this._state.profilePage.newPostText = action.newText
            this.rerenderEntireTree(this._state)
        }
    },
};
// Функция ActionCreator dispatch для компоненты MyPosts
export const addPostActionCreator = () => {
    return {
        type: addPostName
    }
};

// Функция ActionCreator dispatch для компоненты MyPosts
export const updateTextAreaChangeActionCreator = (newMessage: string | null) => {
    return {
        type: updateTextAreaChangeName,
        newText: newMessage
    }
};

(<any>window).store = store

export default store;
