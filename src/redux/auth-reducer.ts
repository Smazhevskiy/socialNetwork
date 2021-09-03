import {AllActionTypes} from "./redux-store";
import {Dispatch} from "redux";
import {authAPI} from "../dal/api";
import {stopSubmit} from "redux-form";

export enum AUTH_ACTIONS_TYPE {
    SET_USER_DATA = 'SET_USER_DATA',
}


type initialStateType = typeof initialState
let initialState = {
    userId: null as null | number,
    email: null as null | string,
    login: null as null | string,
    isAuth: false
}

export const getAuthUserData = () => {
    return (dispatch: Dispatch) => {
        authAPI.authMe()
            .then(response => {
                if (response.data.resultCode === 0) {
                    let {userId, email, login} = response.data.data
                    dispatch(setUserAuthData(userId, email, login, true))
                }
            })
    }
}

export const login = (email: string, password: string | number, rememberMe: boolean,) => (dispatch: Dispatch) => {
    authAPI.login(email, password, rememberMe)
        .then(res => {
            if (res.data.resultCode === 0) {
                let {userId, email, login} = res.data.data
                dispatch(setUserAuthData(userId, email, login, true))
            } else {
                let message = res.data.messages.length > 0 ? res.data.messages[0] : 'Some error'
                dispatch(stopSubmit('login', {_error: message}))
            }
        })

}

export const logout = () => (dispatch: Dispatch) => {
    authAPI.logout()
        .then(res => {
            if (res.data.resultCode === 0) {
                dispatch(setUserAuthData(null, null, null, false))
            }
        })
}


export const authReducer = (state: initialStateType = initialState, action: AllActionTypes): initialStateType => {
    switch (action.type) {
        case AUTH_ACTIONS_TYPE.SET_USER_DATA: {
            return {
                ...state,
                ...action.payload,
            }
        }
        default:
            return state
    }
}


export const setUserAuthData = (userId: number | null, email: string | null, login: string | null, isAuth: boolean) => ({
    type: 'SET_USER_DATA', payload: {userId, email, login, isAuth}
} as const)
