import React from "react";
import classes from "./Profile.module.css"

import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {UserProfileType} from "../../dal/api";


export type ProfilePropsType = {
    profile: null | UserProfileType
    status: string
    updateStatus: (status: string) => void
    isOwner:boolean
    savePhoto: (photo:  File) => void
}

const Profile: React.FC<ProfilePropsType> = React.memo(({isOwner,savePhoto,profile, status, updateStatus}) => {
    return (
        <div className={classes.profile}>
            <ProfileInfo
                savePhoto={savePhoto}
                isOwner={isOwner}
                profile={profile}
                status={status} updateStatus={updateStatus}

            />
            <MyPostsContainer/>
        </div>
    )
});
export default Profile