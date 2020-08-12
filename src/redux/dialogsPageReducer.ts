import {v1} from "uuid"


const SEND_DIALOG_MESSAGE = "SEND_DIALOG_MESSAGE"

const initialState: dialogsPageType = {
    dialogs: [
        {id: v1(), name: "Denis"},
        {id: v1(), name: "Dmitry"},
        {id: v1(), name: "Nastya"},
        {id: v1(), name: "Anna"},
        {id: v1(), name: "Andrew"}
    ],
    messages: [
        {id: v1(), message: "hi!"},
        {id: v1(), message: "how are you?"},
        {id: v1(), message: "I am fine"},
        {id: v1(), message: "and you?"},
        {id: v1(), message: "thanks, I am Ok!"}
    ],
}

const dialogsPageReducer = (state = initialState, action: dialogPageACType): dialogsPageType => {

    switch (action.type) {
        case SEND_DIALOG_MESSAGE:
            let newBody = {id: v1(), message: action.newMessageDialogBody}
            return<dialogsPageType> {
                ...state, messages: [...state.messages, newBody]
            }
        default:
            return state
    }
}

// ACTION CREATOR
export type sendDialogMessageACType = {type: typeof SEND_DIALOG_MESSAGE, newMessageDialogBody: string | null}
export const sendDialogMessageActionCreator = (newMessageDialogBody: string | null): sendDialogMessageACType => {
    return {
        type: SEND_DIALOG_MESSAGE,
        newMessageDialogBody: newMessageDialogBody
    }
}
export default dialogsPageReducer


export type dialogsType = {
    id: string
    name: string
}
export type messagesType = {
    id: string
    message: string
}
export type dialogsPageType = {
    dialogs: Array<dialogsType>
    messages: Array<messagesType>
}
export type dialogPageACType =
    sendDialogMessageACType
