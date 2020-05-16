import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message, {MessagesType} from "./Message/Message";
import {DialogItemType} from "./DialogItem/DialogItem";

type DialogsType = {
    dialogs: Array<DialogItemType>,
    messages: Array<MessagesType>
}

const Dialogs = (props: DialogsType) => {

    let dialogsElemets = props.dialogs.
    map( d => <DialogItem name={d.name} id={d.id}/>);

    let messagesElements = props.messages.
    map( m => <Message message={m.message}/>);

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                { dialogsElemets }
            </div>
            <div className={s.messages}>
                { messagesElements }
            </div>
        </div>       
     
    )
}
export default Dialogs;