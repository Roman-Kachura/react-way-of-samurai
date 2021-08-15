import axios from "axios";

const instance = axios.create({
    baseURL:'https://social-network.samuraijs.com/api/1.0/',
    withCredentials:true,
    headers:{
        'API-KEY': '3eae8282-0e66-4149-8ab6-0bcdf4ef50f2'
    }
})

export const loginAPI = {
    getLogin(){
        return instance.get('auth/me').then(response => response.data)
    }
}

export const userAPI = {
    getUsers(currentPage = 1, pageSize = 10){
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data)
    },

    unfollow(userId:number){
        return instance.delete(`follow/${userId}`).then(response => response.data)
    },

    follow(userId:number){
        return instance.post(`follow/${userId}`,{}).then(response => response.data)
    }
}

export const profileAPI = {
    getProfile(userId:number){
        return instance.get(`profile/` + userId).then(response => response.data);
    }
}