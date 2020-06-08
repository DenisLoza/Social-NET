import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from "./Message/Message";
import {dialogsType, messagesType} from "../../redux/state"
import { sendDialogMessageActionCreator, updateNewMessageDialogBodyActionCreator
} from "../../redux/dialogsPageReducer";

type newDialogsPageType = {
    dialogs: Array<dialogsType>,
    messages: Array<messagesType>,
    newMessageDialogBody: string
    dispatch: (action: any) => any
}

const Dialogs = (props: newDialogsPageType) => {

    let dialogsElemets = props.dialogs.
    map( d => <DialogItem name={d.name} id={d.id}/>);

    let messagesElements = props.messages.
    map( m => <Message message={m.message}/>);


    let onUpdateNewMessageDialogBodyChange = (e: any) => {
        let body = e.target.value;
        props.dispatch(updateNewMessageDialogBodyActionCreator(body))
    }

    let onSendDialogMessageClick  = () => {
        props.dispatch(sendDialogMessageActionCreator())
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
export default Dialogs;
