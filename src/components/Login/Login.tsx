import React from "react"
import {reduxForm, Field, InjectedFormProps} from "redux-form"
import {Input} from "../common/FormsControls/FormsControls"
import {maxLengthCreator, requiredField} from "../../utils/validation/validators"
import {connect} from "react-redux"
import {authType, loginTC} from "../../redux/authReducer"
import {Redirect} from "react-router-dom"
import s from "./../common/FormsControls/FormsControls.module.css"


let maxLength30 = maxLengthCreator(30)

const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field placeholder={"Email"}
                   component={Input}
                   name={"email"}
                   validate={[requiredField, maxLength30]}
            />
        </div>
        <div>
            <Field placeholder={"Password"}
                   type={"password"}
                   component={Input}
                   name={"password"}
                   validate={[requiredField, maxLength30]}
            />
        </div>
        <div>
            <Field type="checkbox"
                   component={Input}
                   name={"rememberMe"}
            /> remember Me
        </div>
        <button> Log in</button>
        {props.error && <div className={s.formSummaryError}> {props.error} </div>}
    </form>
}

let LoginReduxForm = reduxForm<FormDataType>({form: "login"})(LoginForm)

const Login = (props: any) => {
    const onSubmit = (formData: FormDataType) => {
        props.loginTC(formData.email, formData.password, formData.rememberMe)
    }
    if (props.isAuth) {
        // если из стейта придет логинизация true то редирект на страницу Profile
        return <Redirect to={"/profile"}/>
    }

    return <div>
        <h1>Social NET</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}
type authContainerType = {
    isAuth: boolean,
    auth: authType,
}
const mapStateToProps = (state: authContainerType) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {loginTC})(Login)

type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
}
