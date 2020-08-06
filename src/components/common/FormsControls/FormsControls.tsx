import React from "react"
import s from "./FormsControls.module.css"


// @ts-ignore
export const Textarea = ({input, meta, ...props}) => {
    const showError = meta.touched && meta.error
    return (
        // Если будет ошибка, то присвой дополнительный класс error, если нет, то ничего не присваивай
        <div className={s.formControl + " " + (showError ? s.error : "")}>
            <div>
                {/* Передаст все пропсы дочерней компаненте */}
                <textarea {...input} {...props}/>
            </div>
            {/* если в поле ввода было затронуто и если есть ошибка, тогда покажи <span> */}
            {showError && <span> {meta.error} </span>}
        </div>
    )
}
// @ts-ignore
export const Input = ({input, meta, ...props}) => {
    const showError = meta.touched && meta.error
    return (
        // Если будет ошибка, то присвой дополнительный класс error, если нет, то ничего не присваивай
        <div className={s.formControl + " " + (showError ? s.error : "")}>
            <div>
                {/* Передаст все пропсы дочерней компаненте */}
                <input {...input} {...props}/>
            </div>
            {/* если в поле ввода было затронуто и если есть ошибка, тогда покажи <span> */}
            {showError && <span> {meta.error} </span>}
        </div>
    )
}
