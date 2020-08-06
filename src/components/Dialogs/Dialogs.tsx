import React from "react"
import s from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem"
import Message from "./Message/Message"
import {Redirect} from "react-router-dom"
import {dialogsType, messagesType} from "../../redux/dialogsPageReducer"
import {AddMessageFormRedux, FormDialogsDataType} from "./AddMessageForm"


type newDialogsPageType = {
    dialogs: Array<dialogsType>,
    messages: Array<messagesType>,
    newMessageDialogBody: string
    updateNewMessageBody: (body: string) => void
    sendDialogMessage: (body: string) => void
    isAuth: boolean
}

const Dialogs = (props: newDialogsPageType) => {

    // если пользователь не авторизован, то редирект на страницу авторизации
    if (props.isAuth === false) {
        return <Redirect to={"/login"}/>
    }

    let dialogsElemets: JSX.Element[] = props.dialogs.map(d => <DialogItem id={d.id} name={d.name} key={d.id}/>)
    let messagesElements: JSX.Element[] = props.messages.map(m => <Message message={m.message} key={m.id}/>)

    let addNewMessage = (value: FormDialogsDataType) => {
        let body = value.newMessageDialogBody
        props.sendDialogMessage(body)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogsElemets}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <AddMessageFormRedux onSubmit={addNewMessage}/>
            </div>
        </div>
    )
}

export default Dialogs
