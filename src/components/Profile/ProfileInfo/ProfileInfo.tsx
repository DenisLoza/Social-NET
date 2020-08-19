import React from "react"
import s from "./ProfileInfo.module.css"
import {Preloader} from "../../common/Preloader/Preloader"
import {ProfileStatusWithHooks} from "./ProfileStatusWithHooks"


const ProfileInfo = (props: profileInfoType) => {
    // если данные с сервера не придут, то отрисовать Прелоадер
    if (!props.profile) {
        return < Preloader />
    }
    return (
        <div>
            <div className={s.avatar}>
                <div>
                   About ME: {props.profile.aboutMe}
                </div>
            </div>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large}/>
                <ProfileStatusWithHooks status={props.status}
                               updateStatus={props.updateStatus}/>
            </div>
        </div>
    )
}

type profileInfoType = {
    profile: any
    status: string
    updateStatus: (newStatus: string) => void
}

export default ProfileInfo
