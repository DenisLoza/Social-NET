import React from "react"
import Header from "./Header"
import {connect} from "react-redux"
import {logoutTC} from "../../redux/authReducer"
import {appStateType} from "../../redux/redux-store"


class HeaderC extends React.Component<propsHeaderCType> {

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
    {logoutTC: logoutTC})(HeaderC)


type mapStateToPropsType = {
    isAuth: boolean
    login: string | null
}
type mapDispatchToPropsType = {
    logoutTC: () => void
}
type propsHeaderCType = mapStateToPropsType & mapDispatchToPropsType

