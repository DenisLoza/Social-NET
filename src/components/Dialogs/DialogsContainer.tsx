import {connect} from "react-redux"
import {dialogsPageType, dialogsType, messagesType} from "../../redux/dialogsPageReducer"
import {
    sendDialogMessageActionCreator,
    updateNewMessageDialogBodyActionCreator
} from "../../redux/dialogsPageReducer"
import Dialogs from "./Dialogs"
import {authType} from "../../redux/authReducer"
import React from "react"
import {withAuthRedirect} from "../../hoc/withAuthRedirect"
import {compose} from "redux"


type containerDialogsPageType = {
    dialogsPage: dialogsPageType;
    dialogs: dialogsType,
    messages: messagesType,
    newMessageDialogBody: string,
    auth: authType,
    // isAuth: boolean
}

let mapStateToProps = (state: containerDialogsPageType ) => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        newMessageDialogBody: state.dialogsPage.newMessageDialogBody,
        // isAuth: state.auth.isAuth
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
export default compose(
    connect (mapStateToProps, mapDispatchToProps),
    // HOC авторизации пользователя
    withAuthRedirect,
)(Dialogs)
