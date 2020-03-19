import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogsItem';
import Message from './Message/Message'


const Dialogs = (props) =>{
    
    let dialogElement = props.state.dialogsData.map(dialog => < DialogItem name={dialog.name} id={dialog.id} avatar={dialog.avatar} />)

    let messagesElement = props.state.messagesData.map( message => <Message message={message.messages} />)

    return(
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogElement} 
            </div>
            <div className={s.messages}>
                {messagesElement}                
            </div>
        </div>
    )
}

export default Dialogs;