import {connect} from "react-redux"
import {
    getUsersThunkCreator,
    setCurrentPageAC,
    followTC, unfollowTC,
    userType, setCurrentPageACType,
} from "../../redux/usersPageReducer"
import React from "react"
import {Preloader} from "../common/Preloader/Preloader"
import UsersFunctional from "./UsersFunctional"
import {withAuthRedirect} from "../../hoc/withAuthRedirect"
import {compose} from "redux"
import {appStateType} from "../../redux/redux-store"


class UsersC extends React.Component<propsUCType> {

    componentDidMount() {
        this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize)
        // когда начинается запрос на сервер лоадер появляется на странице
        // this.props.toggleIsFetching(true)
        // usersAPI.getUses(this.props.currentPage, this.props.pageSize)
        //     .then(data => {
        //     // когда будет получен ответ от сервера лоадер исчезнет со страницы
        //     this.props.toggleIsFetching(false)
        //     this.props.setUsers(data.items)
        //     // this.props.setTotalUsersCount(response.data.totalCount)
        //
        // });
    }

    onPageChanged = (pageNumber: number) => {
        this.props.getUsersThunkCreator(pageNumber, this.props.pageSize)
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <UsersFunctional totalPagesCount={this.props.totalPagesCount}
                             pageSize={this.props.pageSize}
                             currentPage={this.props.currentPage}
                             onPageChanged={this.onPageChanged}
                             users={this.props.users}
                             unfollow={this.props.unfollow}
                             follow={this.props.follow}
                             followingInProgress={this.props.followingInProgress}
                             toggleFollowingProgress={this.props.toggleFollowingProgress}
            />
        </>
    }
}

// передает дочерней компоненте Users данные из state
let mapStateToProps = (state: appStateType): mapStateToPropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalPagesCount: state.usersPage.totalPagesCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress,
    }
}
// передает дочерней компоненте Users ф-ции callback
// let mapDispatchToProps = (dispatch: any) => {
//     return {
//         follow: (userId: string) => {
//             dispatch(followAC(userId))
//         },
//         unfollow: (userId: string) => {
//             dispatch(unfollowAC(userId))
//         },
//         setUsers: (users: usersArrayType) => {
//             dispatch(setUsersAC(users))
//         },
//         setCurrentPage: (currentPage: number) => {
//             dispatch(setCurrentPageAC(currentPage))
//         },
//         setTotalUsersCount: (totalCount: number) => {
//             dispatch(setTotalUsersCountAC(totalCount))
//         },
//         toggleIsFetching: (isFetching: boolean) => {
//             dispatch(toggleIsFetchingAC(isFetching))
//         },
//     }
// }

export default compose(
    connect<mapStateToPropsType, mapDispatchToPropsType,
        ownPropsType, appStateType>
    (mapStateToProps, {
        follow: followTC,
        unfollow: unfollowTC,
        setCurrentPage: setCurrentPageAC,
        getUsersThunkCreator: getUsersThunkCreator,
    }),
    // HOC авторизации пользователя
    withAuthRedirect,
)(UsersC)

type mapStateToPropsType = {
    currentPage: number
    pageSize: number
    totalPagesCount: number
    isFetching: boolean
    users: Array<userType>
    followingInProgress: Array<string>
}
type mapDispatchToPropsType = {
    unfollow: (id: string) => void
    follow: (id: string) => void
    setCurrentPage: (currentPage: number) => setCurrentPageACType
    getUsersThunkCreator: (currentPage: number, pageSize: number) => void
}
type ownPropsType = {
    toggleFollowingProgress: any
}
type propsUCType = mapStateToPropsType & mapDispatchToPropsType & ownPropsType
