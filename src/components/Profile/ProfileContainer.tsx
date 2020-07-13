import React from "react"
import Profile from "./Profile"
import axios from "axios";
import {connect} from "react-redux";
import {profilePageType, setUserProfileAC} from "../../redux/profilePageReducer";
import {withRouter} from "react-router-dom"

type profileContainerType = {
    profilePage: profilePageType
}
class ProfileContainer extends React.Component<any, any> {

    // все сайд эффекты делаются в методе жизненного цикла
    // т.е. объекты, которые созданны с помощью этого класса
    componentDidMount() {
        // получаем из ответа сервера объект где берем префикс URL /profile/...
        let userId = this.props.match.params.userId
        // если userId не существует, то отобразить userId 2
        if (!userId) {userId = 2}
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
            .then(response => {
            this.props.setUserProfile(response.data)
        })
    }

    render() {
        return (
            <div>
                < Profile {...this.props} profile={this.props.profile}/>
            </div>
        )
    }
}
let mapStateToProps = (state: profileContainerType) => ({
    profile: state.profilePage.profile
})
// подключаем withRouter для передачи URL адреса в стейт
let WithURLProfileContainer = withRouter(ProfileContainer)

export default connect(mapStateToProps, {
    setUserProfile: setUserProfileAC
}) (WithURLProfileContainer)
