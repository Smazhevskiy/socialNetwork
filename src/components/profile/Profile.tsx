import React from "react";
import classes from "./Profile.module.css"

import ProfileInfo from "./profileInfo/ProfileInfo";
import MyPostsCountainer from "./myPosts/MyPostsCountainer";
import {ProfileServerType} from "../../redux/profile-reducer";


export type ProfilePropsType = {
    profile: null | ProfileServerType
}

const Profile: React.FC<ProfilePropsType> = ({profile}) => {
    return (
        <div className={classes.profile}>
            <ProfileInfo profile={profile} />
            <MyPostsCountainer  />
        </div>
    )
}
export default Profile