import React from "react"
import Header from "./Header"
import {connect} from "react-redux"
import {getUserDataTC, logoutTC} from "../../redux/authReducer"
import {appStateType} from "../../redux/redux-store"


class HeaderC extends React.Component<propsHeaderCType> {
    // что сделать, когда компонента вмонтированна в JSX
    componentDidMount() {
        this.props.getUserDataTC()
    }

    render() {
        return <Header isAuth={this.props.isAuth}
                       login={this.props.login}
                       logoutTC={this.props.logoutTC}/>
    }
}

const mapStateToProps = (state: appStateType): mapStateToPropsType => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login,
    }
}
// оборачиваем в connect, что даст нам возможность доступа к глобальному state
export const HeaderContainer = connect(mapStateToProps,
    {getUserDataTC: getUserDataTC, logoutTC: logoutTC})(HeaderC)

type mapStateToPropsType = {
    isAuth: boolean
    login: string | null
}
type mapDispatchToPropsType = {
    getUserDataTC: () => void
    logoutTC: () => void
}

type propsHeaderCType = mapStateToPropsType & mapDispatchToPropsType

