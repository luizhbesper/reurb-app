import React, {useState, useEffect} from 'react'
import Container, {NotificationsNumber} from './style'
import {MdNotifications} from 'react-icons/md'

export default function Notification( {notifications} ) {
    const [not, setNot] = useState([1,2,3,4,5])

    useEffect(() => {
        setNot(notifications)
    }, [notifications])

    return (
        <Container>
            <MdNotifications size = {32} color = "#333333"/>
            <NotificationsNumber notifications = {not.length}>
                {not.length}
            </NotificationsNumber>   
        </Container>
    )
}
