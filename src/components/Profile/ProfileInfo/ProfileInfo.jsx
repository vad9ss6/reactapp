import React from 'react';
import s from './ProfileInfo.module.css';


const ProfileInfo = (props) => {

    

    return (
        <div>
            <div>
                <img className={s.bgProfile} src='https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg'></img>
            </div>
            <div className={s.profileavatar}>
                desc ava
            </div>
           
        </div>
    );
}

export default ProfileInfo