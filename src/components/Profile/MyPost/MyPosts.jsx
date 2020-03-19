import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
   
    let postElement = props.postData.map(post => <Post message={post.messages} likeCount={post.likeCount}  /> )

    let newPostElement = React.createRef();
    let addPost = () => {
        debugger;
        props.addPost();
        
    }

    let onPostChange = () =>{
        let text =  newPostElement.current.value;
        props.updateNewPostText(text);
    }

    return (
        <div className={s.mypost}>
            My post
            <div>
                <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText} />
            </div>
            <div>
                <button onClick={addPost}>Add post</button>
            </div>
            <div>
                {postElement}                
            </div>
        </div>

    );
}

export default MyPosts