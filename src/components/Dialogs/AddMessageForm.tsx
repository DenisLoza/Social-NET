import {Field, InjectedFormProps, reduxForm} from "redux-form"
import {maxLengthCreator, requiredField} from "../../utils/validation/validators"
import React from "react"
import {Textarea} from "../common/FormsControls/FormsControls"



let maxLength50 = maxLengthCreator(50)

const AddMessageForm: React.FC<InjectedFormProps<formDialogsDataType>> = (props) => {

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
export const AddMessageFormRedux = reduxForm<formDialogsDataType>({form: "dialogAddMessageForm"})(AddMessageForm)

export type formDialogsDataType = {
    newMessageDialogBody: string
}
