import React from "react"
import Profile from "./Profile"
import {connect} from "react-redux"
import {getUserProfileTC, profilePageType} from "../../redux/profilePageReducer"
import {Redirect, withRouter} from "react-router-dom"
import {authType} from "../../redux/authReducer"

type profileContainerType = {
    profilePage: profilePageType,
    auth: authType,
    isAuth: boolean,
}

class ProfileContainer extends React.Component<any, any> {

    // все сайд эффекты делаются в методе жизненного цикла
    // т.е. объекты, которые созданны с помощью этого класса
    componentDidMount() {
        // получаем из ответа сервера объект где берем префикс URL /profile/...
        let userId = this.props.match.params.userId
        // если userId не существует, то отобразить userId 2
        if (!userId) {
            userId = 2
        }
        this.props.getUserProfileTC(userId)
    }

    render() {
        // если пользователь не авторизован, то редирект на страницу авторизации
        if (!this.props.isAuth ) {
            return <Redirect to={"/login"}/>
        }
        return (
            <div>
                < Profile {...this.props} profile={this.props.profile}/>
            </div>
        )
    }
}

let mapStateToProps = (state: profileContainerType) => ({
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth,
})
// подключаем withRouter для передачи URL адреса в стейт
let WithURLProfileContainer = withRouter(ProfileContainer)

export default connect(mapStateToProps, {getUserProfileTC})(WithURLProfileContainer)
