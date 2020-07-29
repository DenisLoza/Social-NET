import React from "react"
import {reduxForm, Field, InjectedFormProps} from "redux-form"

type FormDataType = {
    login: string
    password: string
    rememberMe: boolean
}

const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"Username"}
                       component={"input"}
                       name={"login"}
                />
            </div>
            <div>
                <Field placeholder={"Password"}
                       component={"input"}
                       name={"password"}
                />
            </div>
            <div>
                <Field type="checkbox"
                       component={"input"}
                       name={"rememberMe"}
                /> remember Me
            </div>
            <button> Log in </button>
        </form>
}

let LoginReduxForm = reduxForm<FormDataType>({form: "login"}) (LoginForm)

export const Login = () => {
    const onSubmit = (formData: FormDataType) => {
        console.log(formData)
    }
    return <div>
        <h1>Social NET</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}
