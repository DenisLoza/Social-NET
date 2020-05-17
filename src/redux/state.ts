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
};

export type dialogsPageType = {
    dialogs: Array<dialogsType>,
    messages: Array<messagesType>
};

export type postandMassageType = {
    profilePage: profilePageType,
    dialogsPage: dialogsPageType
};

 export type stateType = {
    state:postandMassageType
}

export let state = {
    profilePage: {
        posts: [
            {message: 'Hello, how are you?', count: 20},
            {message: 'It is my first post!', count: 34},
            {message: 'Fine', count: 34},
            {message: 'Ok', count: 34},
            {message: 'i love', count: 34},
        ]
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

export default state;