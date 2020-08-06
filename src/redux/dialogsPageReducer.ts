import {v1} from "uuid"

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
export type actionDialogsPageType = {
    type: string
    body: string
    newMessageDialogBody: string
}

const SEND_DIALOG_MESSAGE: string = "SEND_DIALOG_MESSAGE"

let initialState = {
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

const dialogsPageReducer = (state: dialogsPageType = initialState, action: actionDialogsPageType) => {

    // делаем поверхностную копию стейта СПРЕД ОПЕРАТОРОМ(...). Таким образов копируются только примитивы, без вложенных объектов!!!
    let stateCopy

    switch (action.type) {
        case SEND_DIALOG_MESSAGE:
            let newBody = {id: v1(), message: action.newMessageDialogBody}
            stateCopy = {
                ...state,
                messages: [...state.messages, newBody]
            }
            return stateCopy
        default:
            return state
    }
}
// Функция ActionCreator dispatch
export const sendDialogMessageActionCreator = (newMessageDialogBody: string | null) => {
    return {
        type: SEND_DIALOG_MESSAGE,
        newMessageDialogBody: newMessageDialogBody
    }
}

export default dialogsPageReducer
