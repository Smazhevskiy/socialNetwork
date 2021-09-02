import React from "react";
import style from "./MyPosts.module.css";
import {Field, InjectedFormProps} from "redux-form";


export type NewPostDataType = {
    newPostText: string
}

export const AddNewPostForm: React.FC<InjectedFormProps<NewPostDataType>> = (props: any) => {
    return (
        <div className={style.addNewPostForm}>
            <form action="" onSubmit={props.handleSubmit}>
                <div>
                    <Field
                        name={'newPostText'}
                        placeholder={'Enter mew message to add post'}
                        component={'textarea'}
                    />
                </div>
                <button className={style.createPostBtn}>Create new Post</button>
            </form>
        </div>
    )

}