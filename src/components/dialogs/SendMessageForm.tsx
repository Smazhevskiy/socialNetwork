import React from "react";
import {Field, InjectedFormProps} from "redux-form";

export type DialogsFormDataType = {
    sendNewMessage: string
}
export const SendMessageForm: React.FC<InjectedFormProps<DialogsFormDataType>> = (props: any) => {

    return (
        <div>
            <form action="" onSubmit={props.handleSubmit}>
                <Field
                    component={'textarea'}
                    name={'sendNewMessage'}
                    placeholder={'Enter your message'}
                />
                <button>send</button>
            </form>
        </div>
    )
}