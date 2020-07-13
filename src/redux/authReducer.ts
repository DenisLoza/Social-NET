const SET_USER_DATE: string = "SET_USER_DATE"

type authType = {
    id: number | null
    login: string | null
    email: string | null
    isAuth: boolean
    // isFetching: boolean
}

let initialState = {
    id: null,
    login: null,
    email: null,
    isAuth: false
    // isFetching: false
}
type setUserDataType = {
    type: string
    data: {
        id: number | null
        login: string | null
        email: string | null
        // isFetching: boolean
    }
}

const authReducer = (state: authType = initialState, action: setUserDataType) => {

    switch (action.type) {
        case SET_USER_DATE:
            return {...state, ...action.data, isAuth: true}

        default:
            return state
    }
}

// Функция ActionCreator
export const setUserData = (data: authType) => {
    return {
        type: SET_USER_DATE,
        data: data
    }
}

export default authReducer
