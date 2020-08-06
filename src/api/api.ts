import axios from "axios"

// подготавливаем специальный объект instance, который передает св-ва в axios
const instance = axios.create({
    // базовый baseURL, который подставляется в начало всех ссылок автоматически
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    // определяет необходимость аутентификации при выполнении междоменного CORS запроса
    withCredentials: true,
    // определяет необходимость аутентификации при выполнении междоменного CORS запроса
    headers: {"API-KEY": "db4e48f9-ec7e-4d71-a9d1-0523c2d4dc78"}
})

// export const getUses = (currentPage = 1, pageSize = 10) => {
//     return instance.get(`users?page=${currentPage}&count=${pageSize}`)
//         //возвращаем из ответа только объект data
//         .then(response => {
//             return response.data
//         })
// }

// упаковываем ф-цию getUses, как метод для объекта usersAPI (это не обязательно)
// и в компанентах, соотвественно можно вместо ф-ции getUses вызывать метод
// например, usersAPI.getUses()
export const usersAPI = {
    getUses(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            //возвращаем из ответа только объект data
            .then(response => {
                return response.data
            })
    },
    follow(userId: string) {
        return instance.post(`follow/${userId}`)
    },
    unfollow(userId: string) {
        return instance.delete(`follow/${userId}`)
    },
    getProfile(userId: string) {
        return profileAPI.getProfile(userId)
    }
}

export const profileAPI = {
    getProfile(userId: string) {
        return instance.get(`profile/${userId}`)
    },
    getStatus(userId: string) {
        return instance.get(`profile/status/${userId}`)
    },
    updateStatus(status: string) {
        return instance.put(`profile/status`, {status: status})
    }
}

export const authAPI = {
    me() {
        return instance.get(`auth/me`)
    },
    login(email: string, password: string, rememberMe = false) {
        return instance.post(`auth/login`, {email, password, rememberMe})
    },
    logout () {
        return instance.delete(`auth/login`)
    },
}
