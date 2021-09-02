import React from 'react'
import {Field, InjectedFormProps} from "redux-form";

 export type LoginFormDataType = {
    login: string
    password: string
    rememberMe: boolean
}
export const LoginForm: React.FC<InjectedFormProps<LoginFormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field type="text" placeholder={'Login'} component={'input'} name={'login'}/>
            </div>
            <div>
                <Field type="text" placeholder={'Password'} component={'input'} name={'password'}/>
            </div>
            <div>
                <Field type="checkbox" placeholder={'Checkbox'} component={'input'} name={'rememberMe'}/>rememberMe
            </div>
            <div>
                <button>login</button>
            </div>
        </form>
    )
}


