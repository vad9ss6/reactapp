import React from 'react';
import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo'
import MyPosts from './MyPost/MyPosts';

const Profile = (props) => {
    

    return (
        <div>
            <ProfileInfo descData={props.state.descData}  />
            <MyPosts postData={props.state.profilePage} addPost={props.addPost} updateNewPostText={props.updateNewPostText}/>
        </div>
    );
}

export default Profile