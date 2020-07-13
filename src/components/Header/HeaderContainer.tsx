import React from "react"
import Header from "./Header"
import axios from "axios";
import {connect} from "react-redux";
import {setUserData} from "../../redux/authReducer"


class HeaderC extends React.Component<any, any> {
    // что сделать, когда компонента вмонтированна в JSX
    componentDidMount() {

        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            // если в запросе отправлять этот объект, то браузер автоматически отправит cooke файл для авторизации
            withCredentials: true
        }).
        then(response => {
            if (response.data.resultCode === 0) {
                let {data} = response.data
                this.props.setUserData(data)
            }
        })
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

export const HeaderContainer = connect(mapStateToProps, {
    setUserData
})(HeaderC)





