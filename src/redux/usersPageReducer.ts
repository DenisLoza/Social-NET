import {usersAPI} from "../api/api"
import {Dispatch} from "redux"


const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_USERS = "SET_USERS"
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE"
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT"
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING"
const TOGGLE_IS_FOLLOWING_PROGRESS = "TOGGLE_IS_FOLLOWING_PROGRESS"

const initialState: usersArrayType = {
    users: [],
    pageSize: 5,
    totalPagesCount: 30,
    currentPage: 1,
    isFetching: true,
    followingInProgress: [],
}
// let initialState = {
//     users: [
//         {
//             id: v1(),
//             fullName: "Denis L.",
//             status: "I'am programmer",
//             location: {city: "Helsinki", country: "Finland"},
//             avatarImg: man_5,
//             followed: true
//         },
//         {
//             id: v1(),
//             fullName: "Dmitry K.",
//             status: "I'am teacher",
//             location: {city: "Minsk", country: "Belarus"},
//             avatarImg: ava_man,
//             followed: true
//         },
//         {
//             id: v1(),
//             fullName: "Nastya L.",
//             status: "I'am photographer",
//             location: {city: "Moskow", country: "Russia"},
//             avatarImg: ava_girl,
//             followed: false
//         },
//         {
//             id: v1(),
//             fullName: "Anna A.",
//             status: "I'am consultant",
//             location: {city: "St.Petersburg", country: "Russia"},
//             avatarImg: girl_2,
//             followed: true
//         },
//         {
//             id: v1(),
//             fullName: "Andrew Z.",
//             status: "I'am engineer",
//             location: {city: "Lappeenranta", country: "Finland"},
//             avatarImg: man_4,
//             followed: true
//         }
//     ]
// }

const usersPageReducer = (state = initialState, action: usersACType): usersArrayType => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u
                })
            }

        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u
                })
            }

        case SET_USERS:
            return {...state, users: action.users}

        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage}

        case SET_TOTAL_USERS_COUNT:
            return {...state, totalPagesCount: action.totalCount}

        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching}

        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return<usersArrayType> {
                ...state,
                followingInProgress: action.isFetching
                    // если true в массив followingInProgress добавиться userId пришедший из action
                    ? [...state.followingInProgress, action.userId]
                    // если false, то массив followingInProgress будет отфильтрован так,
                    // чтобы пришедшаяя в action userId в не попала в отфильтрованный массив
                    : [state.followingInProgress.filter(id => id !== action.userId)]
            }

        default:
            return state
    }
}
// ACTION CREATOR
export type followSuccessACType = { type: typeof FOLLOW, userId: string }
export const followSuccessAC = (userId: string): followSuccessACType => ({type: FOLLOW, userId})

export type unfollowSuccessACType = { type: typeof UNFOLLOW, userId: string }
export const unfollowSuccessAC = (userId: string): unfollowSuccessACType => ({type: UNFOLLOW, userId})

export type setUsersACType = { type: typeof SET_USERS, users: Array<userType> }
export const setUsersAC = (users: Array<userType>): setUsersACType => ({type: SET_USERS, users})

export type setCurrentPageACType = { type: typeof SET_CURRENT_PAGE, currentPage: number }
export const setCurrentPageAC = (currentPage: number): setCurrentPageACType => ({type: SET_CURRENT_PAGE, currentPage})

export type setTotalUsersCountACType = { type: typeof SET_TOTAL_USERS_COUNT, totalCount: number }
export const setTotalUsersCountAC = (totalCount: number): setTotalUsersCountACType => ({
    type: SET_TOTAL_USERS_COUNT,
    totalCount
})

export type toggleIsFetchingACType = { type: typeof TOGGLE_IS_FETCHING, isFetching: boolean }
export const toggleIsFetchingAC = (isFetching: boolean): toggleIsFetchingACType => ({
    type: TOGGLE_IS_FETCHING,
    isFetching
})

export type toggleFollowingProgressACType = { type: typeof TOGGLE_IS_FOLLOWING_PROGRESS, isFetching: boolean, userId: string }
export const toggleFollowingProgressAC = (isFetching: boolean, userId: string): toggleFollowingProgressACType => ({
    type: TOGGLE_IS_FOLLOWING_PROGRESS,
    isFetching,
    userId
})

// THUNK
export const getUsersThunkCreator = (currentPage: number, pageSize: number) => {
    return (dispatch: Dispatch<usersACType>) => {
        dispatch(toggleIsFetchingAC(true))

        usersAPI.getUses(currentPage, pageSize).then(data => {
            dispatch(toggleIsFetchingAC(false))
            dispatch(setUsersAC(data.items))
            dispatch(setTotalUsersCountAC(data.totalCount))
        })
    }
}
export const followTC = (userId: string) => {
    return (dispatch: Dispatch<usersACType>) => {
        // статус загрузки при нажатии на кнопку FOLLOW будет включен
        dispatch(toggleFollowingProgressAC(true, userId))
        usersAPI.follow(userId)
            .then(response => {
                // если в ответе мы получили валидную авторизацию, то
                if (response.data.resultCode == 0) {
                    // ответ от сервера отправляем в диспатч follow
                    dispatch(followSuccessAC(userId))
                }
                // статус загрузки при нажатии на кнопку FOLLOW будет отменен
                dispatch(toggleFollowingProgressAC(false, userId))
            })
    }
}
export const unfollowTC = (userId: string) => {
    return (dispatch: Dispatch<usersACType>) => {
        // статус загрузки при нажатии на кнопку FOLLOW будет включен
        dispatch(toggleFollowingProgressAC(true, userId))
        usersAPI.unfollow(userId)
            .then(response => {
                // если в ответе мы получили валидную авторизацию, то
                if (response.data.resultCode == 0) {
                    // ответ от сервера отправляем в диспатч follow
                    dispatch(unfollowSuccessAC(userId))
                }
                // статус загрузки при нажатии на кнопку FOLLOW будет отменен
                dispatch(toggleFollowingProgressAC(false, userId))
            })
    }
}
export default usersPageReducer


export type userType = {
    id: string
    fullName: string
    status: string
    location: { city: string, country: string }
    avatarImg: any
    followed: boolean
}
export type usersArrayType = {
    users: Array<userType>
    pageSize: number
    totalPagesCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<string>
}

export type usersACType =
    followSuccessACType
    | unfollowSuccessACType
    | setUsersACType
    | setCurrentPageACType
    | setTotalUsersCountACType
    | toggleIsFetchingACType
    | toggleFollowingProgressACType
