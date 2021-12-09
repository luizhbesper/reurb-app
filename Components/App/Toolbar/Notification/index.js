import React, {useState, useCallback, useEffect} from 'react'
import Container, {NotificationsNumber} from './style'
import {MdNotifications} from 'react-icons/md'
import NotificationCenter from './NotificationCenter'

export default function Notification( {notifications} ) {
    const [not, setNot] = useState([])
    const [notRead, setNotRead] = useState(0)
    const [showCenter, setShowCenter] = useState(false)

    useEffect(() => {
        setNot(notifications)
    }, [notifications])

    useEffect(() => {
        let count = 0
        not.forEach((notification) => {
            if(!notification.read) count++
        })
        setNotRead(count)
    }, [not])

    return (
        <>
            <Container 
                onMouseEnter = {() => setShowCenter(true)}
                onMouseLeave = {() => setShowCenter(false)}
            >
                <MdNotifications size = {32} color = "#333333"/>
                <NotificationsNumber notifications = {notRead}>
                    {notRead}
                </NotificationsNumber>   
            </Container>
            <NotificationCenter 
                show = {showCenter}
                notifications = {not}
            />
        </>
    )
}
