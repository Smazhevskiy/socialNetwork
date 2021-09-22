import React, {FC} from "react";
import classes from "./ProfileInfo.module.css"
import {Preloader} from "../../../components/common/Preloader/Preloader";
import {ProfilePropsType} from "../Profile";
import userWithoutPhoto from '../../../assets/imagies/icons8-user-male.svg'
import ProfileStatus from "./ProfileStatus";


const ProfileInfo: FC<ProfilePropsType> = ({savePhoto,isOwner, profile, status, updateStatus}) => {
    const mainPhotoSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files !== null && e.target.files.length) {
            savePhoto(e.target.files[0])
        }
    }


    if (!profile) {
        return <Preloader/>
    } else {
        return (
            <div>
                <div className={classes.content}>
                    <ProfileStatus status={status} updateStatus={updateStatus}/>
                    <img src={profile.photos.small ? profile.photos.small : userWithoutPhoto} alt=""/>

                    {isOwner && <input type="file" onChange={mainPhotoSelect}/>}
                    <div> {'Name:' + ' ' + profile.fullName} </div>
                    <br/>
                    <div> {profile.aboutMe} </div>
                    <ul>
                        <li>{profile.contacts.facebook ? `Facebook: ${profile.contacts.facebook}` : ''}</li>
                        <li>{profile.contacts.website ? profile.contacts.website : 'website'}</li>
                        <li>{profile.contacts.vk ? profile.contacts.vk : 'vk'}</li>
                        <li>{profile.contacts.twitter ? profile.contacts.twitter : 'twitter'}</li>
                        <li>{profile.contacts.instagram ? profile.contacts.instagram : 'instagram'}</li>
                        <li>{profile.contacts.youtube ? profile.contacts.youtube : 'youtube'}</li>
                        <li>{profile.contacts.github ? profile.contacts.github : 'github'}</li>
                        <li>{profile.contacts.mainLink}</li>
                    </ul>
                    <div>{profile.lookingForAJobDescription}</div>
                </div>
            </div>
        )
    }

}
export default ProfileInfo