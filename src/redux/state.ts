import {rerenderEntireTree} from "../render";


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

export type profilePageType = {
    posts: Array<postsType>
    newPostText: string
};

export type dialogsPageType = {
    dialogs: Array<dialogsType>,
    messages: Array<messagesType>
};

export type postAndMassageType = {
    profilePage: profilePageType,
    dialogsPage: dialogsPageType
};

export let state: postAndMassageType = {
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

export type addPostType = (newText?: string) => void
export type updateTextareaChangeType = (newText?: string) => void

export type storeType = {
    state: postAndMassageType
    addPost: addPostType
    updateTextareaChange: updateTextareaChangeType
}

// Создаем стор, который передает значения стейт и двух функций одновременно в одном объекте
const store: storeType = {
    state,
    addPost: (newText= "") => {
        let newPost = {message: state.profilePage.newPostText, count: 0};
        state.profilePage.posts.push(newPost);
        state.profilePage.newPostText = "";
        rerenderEntireTree(store);
    },
    updateTextareaChange: (newText= "") => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(store);
    }
};


(<any>window).state = state

export default store;