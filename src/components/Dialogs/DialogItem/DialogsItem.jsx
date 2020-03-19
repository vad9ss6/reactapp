import React from 'react';
import s from './../Dialogs.module.css';
import {NavLink} from 'react-router-dom';


const DialogItem = (props) =>{
    return(
        <div className={s.dialog + ' ' + s.active}>
            <img className={s.avatar} src={props.avatar}/>
            <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
        </div>
    )
}



export default DialogItem;