import React from "react"
import Profile from "./Profile"
import {connect} from "react-redux"
import {getStatusTC, getUserProfileTC, profilePageType, updateStatusTC} from "../../redux/profilePageReducer"
import {withRouter} from "react-router-dom"
import {authType} from "../../redux/authReducer"
import {withAuthRedirect} from "../../hoc/withAuthRedirect"
import {compose} from "redux"

type profileContainerType = {
    profilePage: profilePageType,
    auth: authType,
    autorizedUserId: string,
    isAuth: boolean
}

class ProfileContainer extends React.Component<any, any> {

    // все сайд эффекты делаются в методе жизненного цикла
    // т.е. объекты, которые созданны с помощью этого класса
    componentDidMount() {
        // получаем из ответа сервера объект где берем префикс URL /profile/...
        let userId = this.props.match.params.userId
        // если userId не существует, то отобразить userId 2
        if (!userId) {
            userId = this.props.autorizedUserId
        }
        this.props.getUserProfileTC(userId)
        this.props.getStatusTC(userId)
    }

    render() {
        return (
            <div>
                < Profile profile={this.props.profile}
                          status={this.props.getStatusTC}
                          updateStatus={this.props.updateStatusTC}
                          {...this.props}
                />
            </div>
        )
    }
}

let mapStateToProps = (state: profileContainerType) => ({
    status: state.profilePage.status,
    profile: state.profilePage.profile,
    autorizedUserId: state.auth.id,
    isAuth: state.auth.isAuth
})

export default compose(
    connect(mapStateToProps, {getUserProfileTC, getStatusTC, updateStatusTC}),
    withRouter,
    // HOC авторизации пользователя
    withAuthRedirect,
)(ProfileContainer)
