const UPDATE_NEW_MESSAGE_DIALOG_BODY: string = "UPDATE_NEW_MESSAGE_DIALOG_BODY";
const SEND_DIALOG_MESSAGE: string = "SEND_DIALOG_MESSAGE";

const dialogsPageReducer = (state: any, action: any) => {

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
