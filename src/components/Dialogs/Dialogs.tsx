import React from 'react'
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from "./Message/Message"
import {dialogsType, messagesType} from "../../redux/dialogsPageReducer"


type newDialogsPageType = {
    dialogs: Array<dialogsType>,
    messages: Array<messagesType>,
    newMessageDialogBody: string
    updateNewMessageBody: (body: string) => void
    sendDialogMessage: () => void
}


const Dialogs = (props: newDialogsPageType) => {

    let dialogsElemets: JSX.Element[] = props.dialogs.map( d => <DialogItem id={d.id} name={d.name} key={d.id}/>)

    let messagesElements: JSX.Element[] = props.messages.map( m => <Message message={m.message} key={m.id}/>)

    let onUpdateNewMessageDialogBodyChange = (e: any) => {
        let body = e.target.value
        props.updateNewMessageBody(body)
    }

    let onSendDialogMessageClick  = () => {
        props.sendDialogMessage()
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                { dialogsElemets }
            </div>
            <div className={s.messages}>
                <div>{ messagesElements }</div>
                <div>
                    <div><textarea value={ props.newMessageDialogBody }
                                   onChange={ onUpdateNewMessageDialogBodyChange }
                                   placeholder="Enter your message"
                    /></div>
                    <div><button onClick={ onSendDialogMessageClick }>SEND</button></div>
                </div>
            </div>
        </div>

    )
}

export default Dialogs
