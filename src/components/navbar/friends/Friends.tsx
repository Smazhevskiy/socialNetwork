import React, {FC} from "react";
import {usersAPI} from "../../../dal/api";

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
