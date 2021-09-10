import React, {FC} from "react";
import {friendsType} from "../../../redux/store";
import classes from "./Friends.module.css";
import {usersAPI} from "../../../dal/api";
import s from "../../../pages/users/users.module.css";
import {NavLink} from "react-router-dom";
import userWithoutPhoto from "../../../assets/imagies/icons8-user-male.svg";


const Friends = (props: any) => {
    const users = () => {
        return usersAPI.getFriends(1, 10)
    }



    return (
        // <div key={props.id}>
        //     yoooo
        //     <img src={props.img} alt="" className={classes.friendAvatar}/>
        //     <div className={classes.friendName}>{props.name}</div>
        // </div>
        <div>

        </div>

    )
}

export default Friends;
