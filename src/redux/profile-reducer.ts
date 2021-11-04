import {Dispatch} from 'redux'
import {profileAPI, UserProfileType, usersAPI} from '../dal/api'


export enum PROFILE_ACTIONS_TYPE {
    ADD_POST = 'profile/ADD_POST',
    SET_USERS_PROFILE = 'profile/SET_USERS_PROFILE',
    SET_STATUS = 'profile/SET_STATUS',
}

export type PhotosType = {
    small: string | null
    large: string | null
}

export type PostType = {
    id: number
    message: string
    likeCount: number
}
export type profileActionsType =
    ReturnType<typeof addPostActionCreator>
    | ReturnType<typeof setUsersProfileSuccess>
    | ReturnType<typeof setUserStatus>
    | ReturnType<typeof deletePostActionCreator>


export const addPostActionCreator = (newPostText: string) => ({type: 'profile/ADD_POST', newPostText} as const)

export const setUsersProfileSuccess = (profile: UserProfileType) => ({
    type: 'profile/SET_USERS_PROFILE',
    profile
} as const)
export const setUserStatus = (status: string) => ({type: 'profile/SET_STATUS', status} as const)
export const deletePostActionCreator = (postId: string | number) => ({type: 'profile/DELETE_POST', postId} as const)
export const savePhotoSuccess = (photos: PhotosType) => ({type: 'profile/SAVE-PHOTO-SUCCESS', photos} as const)


export const setUserProfile = (userId: number) => async (dispatch: Dispatch) => {
    const res = await usersAPI.getProfileUser(userId);
    dispatch(setUsersProfileSuccess(res.data));
}


export const getUserStatus = (userId: number) => async (dispatch: Dispatch) => {
    const res = await profileAPI.getUserStatus(userId);
    dispatch(setUserStatus(res.data));
}

export const updateUserStatus = (status: string) => async (dispatch: Dispatch) => {
    const res = await profileAPI.updateUserStatus(status);
    if (res.data.resultCode === 0) {
        dispatch(setUserStatus(status));
    }
}

export const savePhoto = (file: File) => async (dispatch: Dispatch) => {
        const data = await profileAPI.savePhoto(file)
        if (data.resultCode === 0) {
            dispatch(savePhotoSuccess(data.data.photos))
        }
    }

export type ProfileInitialStateType = typeof initialState
let initialState = {
    posts: [
        {id: 1, message: 'Hello bro', likeCount: 0},
    ] as Array<PostType>,
    profile: null as null | UserProfileType,
    status: ''
}
const profileReducer = (state: ProfileInitialStateType = initialState, action: profileActionsType): ProfileInitialStateType => {
    switch (action.type) {
        case PROFILE_ACTIONS_TYPE.ADD_POST : {
            let newPost: PostType = {
                id: 5,
                message: action.newPostText,
                likeCount: 0
            }
            if (action.newPostText !== '') {
                return {
                    ...state,
                    posts: [...state.posts, newPost],
                }
            }
            return state
        }
        case PROFILE_ACTIONS_TYPE.SET_USERS_PROFILE : {
            return {
                ...state,
                profile: action.profile
            }
        }
        case PROFILE_ACTIONS_TYPE.SET_STATUS : {
            return {
                ...state, status: action.status
            }
        }
        case "profile/DELETE_POST":
            return {...state, posts: state.posts.filter(p => p.id !== action.postId)}
        default :
            return state
    }
}
export default profileReducer