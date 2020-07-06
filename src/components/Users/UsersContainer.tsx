import {connect} from "react-redux";
import {
    followAC,
    setCurrentPageAC,
    setTotalUsersCountAC,
    setUsersAC,
    unfollowAC,
    usersArrayType
} from "../../redux/usersPageReducer";
import React from "react";
import axios from "axios";
import UsersFunctional from "./UsersFunctional";


type UsersContainerPageType = {
    usersPage: usersArrayType
}

class UsersC extends React.Component<any, any>{

    // constructor(props: any) {
    //     super(props);
    //     axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
    //         this.props.setUsers(response.data.items)
    //     });
    // }
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
        });
    }
    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
            let a = response.data.totalCount
            // если мы получим от сервера общее кол-во пользователей более 100, то отобразить только 100
            if (a > 100) {
                let b = 100
                this.props.setTotalUsersCount(b)
            } else {
                this.props.setTotalUsersCount(a)
            }
        });
    }

    render() {
        return <UsersFunctional totalPagesCount={this.props.totalPagesCount}
                                pageSize={this.props.pageSize}
                                currentPage={this.props.currentPage}
                                onPageChanged={this.onPageChanged}
                                users={this.props.users}
                                unfollow={this.props.unfollow}
                                follow={this.props.follow}
        />
    }
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

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersC)
export default UsersContainer
