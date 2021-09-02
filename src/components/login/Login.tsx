import {reduxForm} from "redux-form";
import React from "react";
import {LoginFormDataType, LoginForm} from "./LoginForm";


const LoginReduxForm = reduxForm<LoginFormDataType>({
    //unique name for the form
    form: 'login'
})(LoginForm)




export const Login = () => {
    const onSubmit = (formData: LoginFormDataType) => {
        console.log(formData)
    }

    return (
        <div>
            <h1>login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}

