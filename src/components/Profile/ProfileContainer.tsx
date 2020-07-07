import React from "react"
import Profile from "./Profile"
import axios from "axios";
import {connect} from "react-redux";
import {profilePageType, setUserProfileAC} from "../../redux/profilePageReducer";

type profileContainerType = {
    profilePage: profilePageType
}
class ProfileContainer extends React.Component<any, any> {

    // все сайд эффекты делаются в методе жизненного цикла
    // т.е. объекты, которые созданны с помощью этого класса
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
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

export default connect(mapStateToProps, {
    setUserProfile: setUserProfileAC
}) (ProfileContainer)
