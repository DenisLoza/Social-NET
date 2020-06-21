import React from 'react'
import {connect} from "react-redux"
import {dialogsType, messagesType} from "../../redux/dialogsPageReducer"
import {
    sendDialogMessageActionCreator,
    updateNewMessageDialogBodyActionCreator
} from "../../redux/dialogsPageReducer"
import Dialogs from "./Dialogs"

type newDialogsPageType = {
    dialogs: Array<dialogsType>,
    messages: Array<messagesType>,
    newMessageDialogBody: string
    dispatch: (action: any) => any
}

// DialogsContainer = (props: newDialogsPageType)
// const DialogsContainer = () => {
//
//
//     let onUpdateNewMessageDialogBodyChange = (body: string) => {
//         props.dispatch(updateNewMessageDialogBodyActionCreator(body))
//     }
//
//     let onSendDialogMessageClick = () => {
//         props.dispatch(sendDialogMessageActionCreator())
//     }
//
//     return (
//        <Dialogs updateNewMessageBody={onUpdateNewMessageDialogBodyChange}
//                 sendDialogMessage={onSendDialogMessageClick}
//                 dialogs={props.dialogs}
//                 messages={props.messages}
//                 newMessageDialogBody={props.newMessageDialogBody}
//        />
//     )
// }

let mapStateToProps = (state: any) => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        newMessageDialogBody: state.dialogsPage.newMessageDialogBody
    }
}
let mapDispatchToProps = (dispatch: any) => {
    return {
        updateNewMessageBody: (body: string) => {
            dispatch(updateNewMessageDialogBodyActionCreator(body))
        },
        sendDialogMessage: () => {
            dispatch(sendDialogMessageActionCreator())
        }
    }
}
const DialogsContainer = connect (mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer
