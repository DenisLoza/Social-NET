import React from 'react'
import {dialogsType, messagesType} from "../../redux/dialogsPageReducer"
import {
    sendDialogMessageActionCreator,
    updateNewMessageDialogBodyActionCreator
} from "../../redux/dialogsPageReducer"
import Dialogs from "./Dialogs";

type newDialogsPageType = {
    dialogs: Array<dialogsType>,
    messages: Array<messagesType>,
    newMessageDialogBody: string
    dispatch: (action: any) => any
}


const DialogsContainer = (props: newDialogsPageType) => {


    let onUpdateNewMessageDialogBodyChange = (body: string) => {
        props.dispatch(updateNewMessageDialogBodyActionCreator(body))
    }

    let onSendDialogMessageClick = () => {
        props.dispatch(sendDialogMessageActionCreator())
    }

    return (
       <Dialogs updateNewMessageBody={onUpdateNewMessageDialogBodyChange}
                sendDialogMessage={onSendDialogMessageClick}
                dialogs={props.dialogs}
                messages={props.messages}
                newMessageDialogBody={props.newMessageDialogBody}
       />
    )
}

export default DialogsContainer
