import {Field, InjectedFormProps, reduxForm} from "redux-form"
import {maxLengthCreator, requiredField} from "../../utils/validation/validators"
import React from "react"
import {Textarea} from "../common/FormsControls/FormsControls"

export type FormDialogsDataType = {
    newMessageDialogBody: string
}

let maxLength50 = maxLengthCreator(50)

const AddMessageForm: React.FC<InjectedFormProps<FormDialogsDataType>> = (props) => {

    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field component={Textarea}
                   validate={[requiredField, maxLength50]}
                   name="newMessageDialogBody"
                   placeholder="Enter your message"/>
        </div>
        <div>
            <button>SEND</button>
        </div>
    </form>
}
export const AddMessageFormRedux = reduxForm<FormDialogsDataType>({form: "dialogAddMessageForm"})(AddMessageForm)
