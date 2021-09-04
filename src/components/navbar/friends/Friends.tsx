import React, {FC} from "react";
import {friendsType} from "../../../redux/store";
import classes from "./Friends.module.css";
import {usersAPI} from "../../../dal/api";


const Friends = (props: friendsType) => {
    // const showFriends = () => {
    //     return usersAPI.getFriends(1, 10)
    // }


    return (
        <div key={props.id}>
            yoooo
            <img src={props.img} alt="" className={classes.friendAvatar}/>
            <div className={classes.friendName}>{props.name}</div>
            {/*<button>{showFriends}</button> */}
        </div>
    )
}

export default Friends;
