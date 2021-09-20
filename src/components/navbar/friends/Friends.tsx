import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../../redux/redux-store";
import {requestFriends, setFriends, UsersStateType} from "../../../redux/users-reducer";
import {UserType} from "../../../dal/api";
import {User} from "../../../pages/users/User";


type FriendsType={
    followingInProgress: number []
    follow: (userId: number) => void
    unfollow: (userId: number) => void
}
export const Friends = (props:FriendsType) => {
    const dispatch = useDispatch();

    const friends = useSelector<AppRootStateType, UserType[]>(state => state.usersPage.friends)
    dispatch(requestFriends())
    return (
        <div>
            {
                friends.map(fr=> <User
                    user={fr}
                    followingInProgress={props.followingInProgress}
                    follow={props.follow}
                    unfollow={props.unfollow}
                    />
                )
            }

            friends
        </div>
    )
}