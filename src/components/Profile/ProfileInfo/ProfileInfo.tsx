import React from 'react'
import s from './ProfileInfo.module.css'
import {Preloader} from "../../common/Preloader/Preloader";


const ProfileInfo = (props: any) => {
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
            </div>
        </div>
    )
}
export default ProfileInfo
