import React, {ChangeEvent} from "react";
import style from "./MyPosts.module.css"
import {MyPostPropsType} from "./MyPostsCountainer";
import Post from "./Post/Post";
import {AddNewPostForm, NewPostDataType} from "./AddNewPostForm";
import {reduxForm} from "redux-form";


const MyPosts: React.FC<MyPostPropsType> = (props) => {


    const DialogsReduxForm = reduxForm<NewPostDataType>({
        form:'ProfileAddNewPostForm'
    })(AddNewPostForm)

    let addNewPost = (values:NewPostDataType) => {
        props.addPost(values.newPostText)
    }

    let postsElement =
        props.posts.map(p => <Post id={p.id} message={p.message} likeCount={p.likeCount} key={p.id}/>)

    return (
        <div className={style.posts}>
            <div className={style.createPost}>
                <div className={style.createPostTitle}>My Posts</div>
                <DialogsReduxForm onSubmit={addNewPost} />
            </div>
            {postsElement}
        </div>
    )
}



export default MyPosts


