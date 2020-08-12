import React from "react"
import s from "../Dialogs.module.css"


const Message: React.FC<messagesType> = (props) => {
    return <div className={s.dialog}>{props.message}</div>
}
export default Message


export type messagesType = {
    message: string
}
