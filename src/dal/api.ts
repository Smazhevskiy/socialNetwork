import axios from "axios";

export type UserResponseType = {
    items: UserType[]
    totalCount: number
    error: string
}

export interface ResponseType<T = {}> {
    resultCode: number
    messages: string[],
    data: T
}

export type UserType = {
    id: number
    name: string
    status: string
    photos: {
        small: string
        large: string
    }
    followed: boolean
}
export type AuthDataType = {
    id: number
    email: string
    login: string
}
export type UserProfileType = {
    aboutMe: string
    contacts: {
        facebook: string
        website: string
        vk: string
        twitter: string
        instagram: string
        youtube: string
        github: string
        mainLink: string
    }
    lookingForAJob: boolean,
    lookingForAJobDescription: string
    fullName: string
    userId: number
    photos: {
        small: string
        large: string
    }
}

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '65933dcc-6afe-43bc-af50-63aed10a4c85',
        // 'Content-Type': 'multipart/form-data'
    }
})
export const usersAPI = {
    getUsers(currentPage: number = 1, pageSize: number = 10, friend?:boolean) {
        return instance.get<UserResponseType>(`users?page=${currentPage}&count=${pageSize}`)
    },
    follow(userId: number) {
        return instance.post<ResponseType<UserType>>(`follow/${userId}`)
    },
    unfollow(userId: number) {
        return instance.delete<ResponseType>(`follow/${userId}`)
    },

    getProfileUser(userId: number) {
        return profileAPI.getUserProfile(userId)
    },
    getFriends() {
        return instance.get<UserResponseType>(`users?users?page=${1}&count=${10}friend=${true}`)
    }

}
export const profileAPI = {
    getUserProfile(userId: number) {
        return instance.get<UserProfileType>(`profile/${userId}`)
    },
    getUserStatus(userId: number) {
        return instance.get(`profile/status/${userId}`)
    },
    updateUserStatus(status: string) {
        return instance.put<ResponseType<UserType>>(`profile/status`, {
            status
        })
    },
    savePhoto(photoFile: File) {
        const formData = new FormData()
        formData.append('image', photoFile)
        return instance.put(`profile/photo`, formData, {})
            .then(res => res.data)
    },

}
export const authAPI = {
    authMe() {
        return instance.get<ResponseType<AuthDataType>>(`auth/me`)
    },
    login(email: string, password: string, rememberMe: boolean = false, captcha: boolean) {
        return instance.post<ResponseType<{ userId: number }>>(`auth/login`, {
            email,
            password,
            rememberMe,
            captcha
        })
    },
    logout() {
        return instance.delete<ResponseType>(`auth/login`)
    }
}