import {connect} from "react-redux"
import {addPostNameActionCreator, postsType
} from "../../../redux/profilePageReducer"
import MyPosts from "./MyPosts"
import {appStateType} from "../../../redux/redux-store"



let mapStateToProps = (state: appStateType): mapStateToPropsType => {
    return {
        posts: state.profilePage.posts
    }
}

let mapDispatchToProps = (dispatch: any) => {
    return {
        addPostName: (newPostText: string) => {
            dispatch(addPostNameActionCreator(newPostText))
        }
    }
}

const MyPostsContainer = connect (mapStateToProps, mapDispatchToProps)(MyPosts)

type mapStateToPropsType = {
    posts: Array<postsType>
}

export default MyPostsContainer
