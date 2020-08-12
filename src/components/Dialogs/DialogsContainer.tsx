import {connect} from "react-redux"
import {dialogsPageType, dialogsType, messagesType} from "../../redux/dialogsPageReducer"
import {sendDialogMessageActionCreator} from "../../redux/dialogsPageReducer"
import Dialogs from "./Dialogs"
import {authType} from "../../redux/authReducer"
import React from "react"
import {withAuthRedirect} from "../../hoc/withAuthRedirect"
import {compose} from "redux"
import {appStateType} from "../../redux/redux-store"


let mapStateToProps = (state: appStateType) => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
    }
}

let mapDispatchToProps = (dispatch: any) => {
    return {
        sendDialogMessage: (newMessageDialogBody: string) => {
            dispatch(sendDialogMessageActionCreator(newMessageDialogBody))
        }
    }
}
export default compose(
    connect (mapStateToProps, mapDispatchToProps),
    // HOC авторизации пользователя
    withAuthRedirect,
)(Dialogs)

type containerDialogsPageType = {
    dialogsPage: dialogsPageType;
    dialogs: dialogsType,
    messages: messagesType,
    newMessageDialogBody: string,
    auth: authType,
}
