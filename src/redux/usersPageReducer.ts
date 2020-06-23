import {v1} from "uuid";
import ava_man from "../img/avatar/ava_man.jpg"
import ava_girl from "../img/avatar/ava_girl.jpg"
import man_5 from "../img/avatar/man_5.jpg"
import girl_2 from "../img/avatar/girl_2.jpg"
import man_4 from "../img/avatar/man_4.jpg"

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
}
export type actionUsersType = {
    type: string
    userId: string
    users: Array<userType>
}

const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_USERS = "SET_USERS"


let initialState = {
    users: [
        {
            id: v1(),
            fullName: "Denis L.",
            status: "I'am programmer",
            location: {city: "Helsinki", country: "Finland"},
            avatarImg: man_5,
            followed: true
        },
        {
            id: v1(),
            fullName: "Dmitry K.",
            status: "I'am teacher",
            location: {city: "Minsk", country: "Belarus"},
            avatarImg: ava_man,
            followed: true
        },
        {
            id: v1(),
            fullName: "Nastya L.",
            status: "I'am photographer",
            location: {city: "Moskow", country: "Russia"},
            avatarImg: ava_girl,
            followed: false
        },
        {
            id: v1(),
            fullName: "Anna A.",
            status: "I'am consultant",
            location: {city: "St.Petersburg", country: "Russia"},
            avatarImg: girl_2,
            followed: true
        },
        {
            id: v1(),
            fullName: "Andrew Z.",
            status: "I'am engineer",
            location: {city: "Lappeenranta", country: "Finland"},
            avatarImg: man_4,
            followed: true
        }
    ]
}

const usersPageReducer = (state: usersArrayType = initialState, action: actionUsersType) => {

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
            return {...state, users: [...state.users, ...action.users]}

        default:
            return state
    }
}

export const followAC = (userId: string) => ({type: FOLLOW, userId})
export const unfollowAC = (userId: string) => ({type: UNFOLLOW, userId})
export const setUsersAC = (users: usersArrayType) => ({type: SET_USERS, users})


// export const updateTextAreaChangeActionCreator = (newMessage: string | null) => {
//     return {
//         type: UPDATE_TEXT_AREA_CHANGE,
//         newMessage: newMessage
//     }
// };

export default usersPageReducer
