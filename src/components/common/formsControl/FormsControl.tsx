import React, {FC} from 'react'
import { WrappedFieldProps } from 'redux-form'
import styles from './FormsControl.module.css'

interface CustomFieldProps {
    type?: string;
}


export const Textarea:FC<WrappedFieldProps & CustomFieldProps > = ({input,meta,...props}) => {
    const hasError = meta.touched && meta.error

    return (
        <div className={`${styles.formControl} + ${hasError ? styles.error : ""} `}>
            <div>
                <textarea {...input} {...props}/>
            </div>
            {hasError && <span>{meta.error}</span>}
            {props.children}
        </div>
    )
}
export const Input:FC<WrappedFieldProps & CustomFieldProps > = ({input,meta,...props}) => {
    const hasError = meta.touched && meta.error

    return (
        <div className={`${styles.formControl} + ${hasError ? styles.error : ""} `}>
            <div>
                <input {...input} {...props}/>
            </div>
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}