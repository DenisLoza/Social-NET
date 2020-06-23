import {connect} from "react-redux";
import {followAC, setUsersAC, unfollowAC, usersArrayType} from "../../redux/usersPageReducer";
import Users from "./Users";


type UsersContainerPageType = {
    usersPage: usersArrayType
}


// передает дочерней компоненте Users данные из state
let mapStateToProps = (state: UsersContainerPageType) => {
    return {
        users: state.usersPage.users
    }
}

// передает дочерней компоненте Users ф-ции callback
let mapDispatchToProps = (dispatch: any) => {
    return {
        follow: (userId: string) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId: string) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users: usersArrayType) => {
            dispatch(setUsersAC(users))
        }
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)
export default UsersContainer
