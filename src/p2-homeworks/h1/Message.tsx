import React from 'react'
import s from './Message.module.css'

export type MessagePropsType = {
    avatar:string
    name:string
    message:string
    time:string
}

function Message(props:MessagePropsType) {
    return (<div className={s.wrapper}>
        <div className={s.message}>
                <img src={props.avatar} className={s.avatar} />
            <div className={s.messageInfo}>
                <span className={s.name}>{props.name}</span>
                <span className={s.messageText}>{props.message}</span>
                <span className={s.time}>{props.time}</span>

            </div>

        </div>
        </div>
    )
}

export default Message
