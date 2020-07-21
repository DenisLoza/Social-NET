// import React from 'react'
import {connect} from "react-redux"
import {dialogsPageType, dialogsType, messagesType} from "../../redux/dialogsPageReducer"
import {
    sendDialogMessageActionCreator,
    updateNewMessageDialogBodyActionCreator
} from "../../redux/dialogsPageReducer"
import Dialogs from "./Dialogs"
import {authType} from "../../redux/authReducer"


type containerDialogsPageType = {
    dialogsPage: dialogsPageType;
    dialogs: dialogsType,
    messages: messagesType,
    newMessageDialogBody: string,
    auth: authType,
    isAuth: boolean
}


let mapStateToProps = (state: containerDialogsPageType ) => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        newMessageDialogBody: state.dialogsPage.newMessageDialogBody,
        isAuth: state.auth.isAuth
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
