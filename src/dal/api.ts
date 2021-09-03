import axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '65933dcc-6afe-43bc-af50-63aed10a4c85'
    }
})
export const usersAPI = {
    getUsers(currentPage: number = 1, pageSize: number = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
    },
    follow(userId: number) {
        return instance.post(`follow/${userId}`)
    },
    unfollow(userId: number) {
        return instance.delete(`follow/${userId}`)
    },

    getProfileUser(userId: string) {
        console.log('Please use profileAPI ti get users.')
        return profileAPI.getUserProfile(userId)
    }

}
export const profileAPI = {
    getUserProfile(userId: string) {
        return instance.get(`profile/${userId}`)
    },
    getUserStatus(userId: string) {
        return instance.get(`profile/status/${userId}`)
    },
    updateUserStatus(status: string) {
        return instance.put(`profile/status`, {
            status: status
        })
    }

}
export const authAPI = {
    authMe() {
        return instance.get(`auth/me`);
    },
    login(email: string, password: string | number, rememberMe: boolean = false) {
        return instance.post(`auth/login`, {email, password, rememberMe});
    },
    logout() {
        return instance.delete(`auth/login`);
    }
}

