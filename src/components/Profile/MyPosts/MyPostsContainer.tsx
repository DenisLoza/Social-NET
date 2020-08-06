import {connect} from "react-redux"
import {addPostNameActionCreator,
    postsType,
    profilePageType
} from "../../../redux/profilePageReducer"
import MyPosts from "./MyPosts"


type containerMyPostsType = {
    profilePage: profilePageType
    posts: postsType
    // newPostText: string
}

let mapStateToProps = (state: containerMyPostsType) => {
    return {
        // newPostText: state.profilePage.newPostText,
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

export default MyPostsContainer
