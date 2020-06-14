export type dialogsType = {
    id: number,
    name: string
}
export type messagesType = {
    id: number,
    message: string
}
export type dialogsPageType = {
    dialogs: Array<dialogsType>,
    messages: Array<messagesType>,
    newMessageDialogBody: string
}

const UPDATE_NEW_MESSAGE_DIALOG_BODY: string = "UPDATE_NEW_MESSAGE_DIALOG_BODY"
const SEND_DIALOG_MESSAGE: string = "SEND_DIALOG_MESSAGE"

let initialState = {
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

const dialogsPageReducer = (state: dialogsPageType = initialState, action: any) => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_DIALOG_BODY:
            state.newMessageDialogBody = action.body
            return state
        case SEND_DIALOG_MESSAGE:
            let newBody = {id: 6, message: state.newMessageDialogBody}
            state.messages.push(newBody)
            state.newMessageDialogBody = ""
            return state
        default:
            return state
    }
}
// Функция ActionCreator dispatch
export const sendDialogMessageActionCreator = () => {
    return {
        type: SEND_DIALOG_MESSAGE
    }
}
// Функция ActionCreator dispatch
export const updateNewMessageDialogBodyActionCreator = (body: string | null) => {
    return {
        type: UPDATE_NEW_MESSAGE_DIALOG_BODY,
        body: body
    }
}

export default dialogsPageReducer
