import React from 'react';
import s from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';


type DialogItemType = {
    name: string
    id: number
};

type MessageType = {
    message: string
};

type dialogsDataType = {
    id: number
    name: string
};

type messageDataType = {
    id: number
    message: string
};

let dialogsData: Array<dialogsDataType>= [
    {id: 1, name: 'Dima'},
    {id: 2, name: 'Sweta'},
    {id: 3, name: 'Katya'},
    {id: 4, name: 'Nadya'},
    {id: 5, name: 'Dan'},
]

let messageData: Array<messageDataType> = [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'How are you?'},
    {id: 3, message: 'Fine'},
    {id: 4, message: 'Ok'},
    {id: 5, message: 'i love'},
]
const DialogItem = (props: DialogItemType) => {
    let path  = "/dialogs/" + props.id;
    return <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
            </div>
}

const Message = (props: MessageType) => {
    return <div className={s.dialog}>{props.message}</div>
}

let dialogsElemets = dialogsData.
    map( d => <DialogItem name={d.name} id={d.id}/>);

let messagesElements = messageData.
    map( m => <Message message={m.message}/>);


const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                { dialogsElemets }
                {/* <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} /> */}
                {/* <div className={s.dialog}>
                <NavLink to="/dialogs/2">Andrew</NavLink>
                </div> */}
            </div>
            <div className={s.messages}>
                { messagesElements }
                {/* <Message message={messageData[0].message} />
                <Message message="How are you?" /> */}
                {/* <div className={s.message}>Fine</div> */}
            </div>
        </div>       
     
    )
}
export default Dialogs;