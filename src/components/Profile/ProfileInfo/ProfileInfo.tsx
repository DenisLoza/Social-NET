import React from 'react'
import s from './ProfileInfo.module.css'


const ProfileInfo = () => {
    return (
        <div>
            <div className={s.avatar}>
                AVATAR (profileInfo)
            </div>
            <div className={s.descriptionBlock}>
                description
            </div>
        </div>
    )
}
export default ProfileInfo
