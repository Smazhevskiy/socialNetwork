import React, {ChangeEvent} from 'react'
import classes from "./Dialogs.module.css";
import DialogItem from "./dialogItem/DialogsItem";
import Message from "./message/Message";

import {DialogsPropsType} from "./DialogsContainer";
import {reduxForm} from "redux-form";
import {SendMessageForm, DialogsFormDataType} from "./SendMessageForm";

const Dialogs: React.FC<DialogsPropsType> = ({dialogsPage, sendMessage}) => {
    let dialogsElements = dialogsPage.dialogs
        .map(dialog => <DialogItem key={dialog.id} name={dialog.name} id={dialog.id} img={dialog.img}/>)
    let messagesElements = dialogsPage.messages
        .map(message => <Message key={message.id} message={message.message} id={message.id}/>)


    const AddMessageReduxForm = reduxForm<DialogsFormDataType>({
        form: 'sendNewMessage'
    })(SendMessageForm)

    const addNewMessage = (values: DialogsFormDataType) => {
        sendMessage(values.sendNewMessage)
    }

    return (
        <div className={classes.dialogs}>
            <h2 className={classes.dialogsHeader}> Dialogs</h2>
            <div className={classes.dialogItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                <div>{messagesElements}</div>
                <AddMessageReduxForm onSubmit={addNewMessage}/>
            </div>
        </div>
    )
}
export default Dialogs


