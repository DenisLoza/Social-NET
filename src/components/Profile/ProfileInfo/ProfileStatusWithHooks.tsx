import React, {useEffect, useState} from "react"


export const ProfileStatusWithHooks = (props: propsProfileStatusType) => {

    // HOOKs
    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(props.status)
    useEffect(() => {
        // выполни сетСтатус и отправь туда новое значение в пропсах
        setStatus(props.status)
        // зависимость (когда придет в пропсах статус от сервера)
    }, [props.status])

    const activateEditMode = () => {
        setEditMode(true)
    }
    const deActivateEditMode = () => {
        setEditMode(false)
        // вызываем колбек и отправляем введеное значение на сервер
        props.updateStatus(status)
    }
    const onStatusChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value)
    }

    return <div>
        {/*отобразить если editMode: false*/}
        {!editMode &&
        <div>
            <span onDoubleClick={activateEditMode}> {props.status || "my status"} </span>
        </div>
        }
        {/*отобразить если editMode: true*/}
        {editMode &&
        <div>
            <input autoFocus={true}
                   onChange={onStatusChange}
                   onBlur={deActivateEditMode}
                   value={status}/>
        </div>
        }
    </div>
}


type propsProfileStatusType = {
    status: string
    updateStatus: (newStatus: string) => void
}


