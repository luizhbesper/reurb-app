import React, {useState, useEffect} from 'react'
import Container, {Notification} from './style'
import Link from 'next/link'

export default function NotificationCenter({ notifications, show }) {
    const [showCenter, setShowCenter] = useState(false);

    if(showCenter || show)
        return (
            <Container 
                onMouseEnter = {() => {setShowCenter(true)}}
                onMouseLeave = {() => {setShowCenter(false)}}
            >
                <span>Central de Notificações</span>
                <div className = "notificationList">
                    {
                        notifications.map((notification) => {
                            return(
                                <Notification read = {notification.read}>
                                    <span className = "text">{notification.message}</span>
                                    <span className = "timeAgo">{notification.time}</span>
                                </Notification>
                            );
                        })
                    }                
                </div>
                <Link href="/notificacoes">
                    <span className = "seeAll">Ver Todas</span>
                </Link>
            </Container>
        )
    else return null;
}
