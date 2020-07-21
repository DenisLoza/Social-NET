import {connect} from "react-redux"
import {
    getUsersThunkCreator,
    setCurrentPageAC,
    followTC, unfollowTC,
    usersArrayType,
} from "../../redux/usersPageReducer"
import React from "react"
import {Preloader} from "../common/Preloader/Preloader"
import UsersFunctional from "./UsersFunctional"


type UsersContainerPageType = {
    usersPage: usersArrayType
}

class UsersC extends React.Component<any, any> {

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
        // this.props.setCurrentPage(pageNumber)
        // // когда начинается запрос на сервер лоадер появляется на странице
        // this.props.toggleIsFetching(true)
        // usersAPI.getUses(pageNumber, this.props.pageSize)
        //     .then(data => {
        //     // когда будет получен ответ от сервера лоадер исчезнет со страницы
        //     this.props.toggleIsFetching(false)
        //     this.props.setUsers(data.items)
        //     let a = data.totalCount
        //     // если мы получим от сервера общее кол-во пользователей более 100, то отобразить только 100
        //     if (a > 100) {
        //         let b = 100
        //         this.props.setTotalUsersCount(b)
        //     } else {
        //         this.props.setTotalUsersCount(a)
        //     }
        // });
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
let mapStateToProps = (state: UsersContainerPageType) => {
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

const UsersContainer = connect(mapStateToProps, {
    follow: followTC,
    unfollow: unfollowTC,
    setCurrentPage: setCurrentPageAC,
    getUsersThunkCreator: getUsersThunkCreator,
})(UsersC)

export default UsersContainer
