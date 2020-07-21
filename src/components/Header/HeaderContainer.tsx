import React from "react"
import Header from "./Header"
import {connect} from "react-redux"
import {getUserDataTC} from "../../redux/authReducer"


class HeaderC extends React.Component<any, any> {
    // что сделать, когда компонента вмонтированна в JSX
    componentDidMount() {
        this.props.getUserDataTC()
    }

    render() {
        return <Header {...this.props}/>
    }
}

const mapStateToProps = (state: any) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login,
    }
}
// оборачиваем в connect, что даст нам возможность доступа к глобальному state
export const HeaderContainer = connect(mapStateToProps, {getUserDataTC})(HeaderC)





