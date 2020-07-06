import {connect} from "react-redux";
import {
    followAC,
    setCurrentPageAC,
    setTotalUsersCountAC,
    setUsersAC,
    unfollowAC,
    usersArrayType
} from "../../redux/usersPageReducer";
import Users from "./UsersC";


type UsersContainerPageType = {
    usersPage: usersArrayType
}


// передает дочерней компоненте Users данные из state
let mapStateToProps = (state: UsersContainerPageType) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalPagesCount: state.usersPage.totalPagesCount,
        currentPage: state.usersPage.currentPage
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
        },
        setCurrentPage: (currentPage: number) => {
            dispatch(setCurrentPageAC(currentPage))
        },
        setTotalUsersCount: (totalCount: number) => {
            dispatch(setTotalUsersCountAC(totalCount))
        }
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)
export default UsersContainer
