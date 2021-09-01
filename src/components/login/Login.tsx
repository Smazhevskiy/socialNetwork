import {reduxForm} from "redux-form";
import React from "react";
import {FormDataType, LoginForm} from "./LoginForm";


const LoginReduxForm = reduxForm<FormDataType>({
    //unique name for the form
    form: 'login'
})(LoginForm)




export const Login = () => {
    const onSubmit = (formData: FormDataType) => {
        console.log(formData)
    }

    return (
        <div>
            <h1>login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}

