import {maxLengthCreator, requiredField} from "../../../utils/validation/validators"
import React from "react"
import {Field, InjectedFormProps, reduxForm} from "redux-form"
import s from "./MyPosts.module.css"
import {Textarea} from "../../common/FormsControls/FormsControls"


let maxLength30 = maxLengthCreator(30)

const AddNewPostForm: React.FC<InjectedFormProps<formPostDataType>> = (props) => {
    return <form className={s.inputField} onSubmit={props.handleSubmit}>
        <Field name="newPostText"
               component={Textarea}
               validate={[requiredField, maxLength30]}
               placeholder="Enter your message"
        />
        <button className={s.button}> SEND </button>
    </form>
}
export const AddNewPostFormRedux = reduxForm<formPostDataType>({form: "ProfileAddNewPostForm"})(AddNewPostForm)

export type formPostDataType = {
    newPostText: string
}
