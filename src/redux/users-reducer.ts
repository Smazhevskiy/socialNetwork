import {Dispatch} from "redux";
import {usersAPI, UserType} from "../dal/api";
import {AppThunk} from "./redux-store";
import {updateObjectInArray} from "../utils/Object-helpers";

export enum USERS_ACTIONS_TYPE {
    FOLLOW = 'users/FOLLOW',
    UNFOLLOW = 'users/UNFOLLOW',
    SET_USERS = 'users/SET_USERS',
    SET_CURRENT_PAGE = 'users/SET_CURRENT_PAGE',
    SET_TOTAL_USERS_COUNT = 'users/SET_TOTAL_USERS_COUNT',
    TOGGLE_IS_FETCHING = 'users/TOGGLE_IS_FETCHING',
    TOGGLE_IS_FETCHING_PROGRESS = 'users/TOGGLE_IS_FETCHING_PROGRESS',
    SET_FRIENDS = 'users/SET_FRIENDS'
}

export type serverUsers = {
    users: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
}

export type UsersStateType = typeof initialState

let initialState = {
    users: [] as UserType[],
    pageSize: 20,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: [] as number[],
    friends: [] as UserType []
}

export type userActionsType =
    ReturnType<typeof followSuccess>
    | ReturnType<typeof unFollowSuccess>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setTotalUsersCount>
    | ReturnType<typeof toggleIsFetching>
    | ReturnType<typeof toggleFollowingProgress>
    | ReturnType<typeof setFriends>


export const followSuccess = (userId: number) => ({type: 'users/FOLLOW', userId}) as const
export const unFollowSuccess = (userId: number) => ({type: 'users/UNFOLLOW', userId}) as const
export const setUsers = (users: UserType[]) => ({type: 'users/SET_USERS', users}) as const
export const setFriends = (friends: UserType[]) => ({type: 'users/SET_FRIENDS', friends}) as const
export const setCurrentPage = (currentPage: number) => ({type: 'users/SET_CURRENT_PAGE', currentPage}) as const
export const setTotalUsersCount = (totalUsersCount: number) => ({
    type: 'users/SET_TOTAL_USERS_COUNT',
    count: totalUsersCount
}) as const
export const toggleIsFetching = (isFetching: boolean) => ({
    type: 'users/TOGGLE_IS_FETCHING',
    isFetching: isFetching
}) as const
export const toggleFollowingProgress = (isFetching: boolean, userId: number) => ({
    type: 'users/TOGGLE_IS_FETCHING_PROGRESS',
    isFetching,
    userId
}) as const

export const requestUsers = (page: number, pageSize: number): AppThunk => async (dispatch: Dispatch) => {
    dispatch(toggleIsFetching(true))
    dispatch(setCurrentPage(page))
    let res = await usersAPI.getUsers(page, pageSize)
    dispatch(toggleIsFetching(false))
    dispatch(setUsers(res.data.items))
    dispatch(setTotalUsersCount(res.data.totalCount))
}

export const requestFriends = (): AppThunk => async (dispatch: Dispatch) => {
    dispatch(toggleIsFetching(true))
    let res = await usersAPI.getFriends()
    dispatch(toggleIsFetching(false))
    dispatch(setFriends(res.data.items))
}


const followUnfollowFlow = async (dispatch: Dispatch, userId: number, apiMethod: any, actionCreator: any) => {
    dispatch(toggleFollowingProgress(true, userId))
    let res = await apiMethod(userId)
    if (res.data.resultCode === 0) {
        dispatch(actionCreator(userId))
    }
    dispatch(toggleFollowingProgress(false, userId))
}


export const follow = (userId: number): AppThunk => async (dispatch: Dispatch) => {
    await followUnfollowFlow(dispatch, userId, usersAPI.follow.bind(usersAPI), followSuccess)
}
export const unfollow = (userId: number): AppThunk => async (dispatch: Dispatch) => {
    await followUnfollowFlow(dispatch, userId, usersAPI.unfollow.bind(usersAPI), unFollowSuccess)
}

export const usersReducer = (state: UsersStateType = initialState, action: userActionsType): UsersStateType => {
    switch (action.type) {
        case USERS_ACTIONS_TYPE.FOLLOW :
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, 'id', {followed: true})
                // users: state.users.map(user => {
                //     if (user.id === action.userId) {
                //         return {...user, followed: true}
                //     }
                //     return user
                // })
            }
        case USERS_ACTIONS_TYPE.UNFOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, 'id', {followed: false})
                // users: state.users.map(user => {
                //     if (user.id === action.userId) {
                //         return {...user, followed: false}
                //     }
                //     return user
                // })
            }
        case USERS_ACTIONS_TYPE.SET_USERS : {
            return {...state, users: action.users}
        }
        case  USERS_ACTIONS_TYPE.SET_CURRENT_PAGE: {
            return {...state, currentPage: action.currentPage}
        }
        case USERS_ACTIONS_TYPE.SET_TOTAL_USERS_COUNT : {
            return {...state, totalUsersCount: action.count}
        }
        case USERS_ACTIONS_TYPE.TOGGLE_IS_FETCHING : {
            return {...state, isFetching: action.isFetching}
        }
        case USERS_ACTIONS_TYPE.TOGGLE_IS_FETCHING_PROGRESS: {
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
        }
        case  USERS_ACTIONS_TYPE.SET_FRIENDS: {
            return {...state, friends: action.friends}
        }

        default :
            return state
    }
}
export default usersReducer