import React from 'react'
import Container from './style'
import {MdSearch} from 'react-icons/md'
import Profile from './Profile'
import Notification from './Notification'

const notificationsAPI = [
    {
        id: 0,
        message: "Processo REURB #0001 concluído com sucesso",
        read: false,
        time: "5h"
    },
    {
        id: 1,
        message: "Anexe o documento XYZ para conclusão do processo #0002",
        read: false,
        time: "12h"
    },
    {
        id: 2,
        message: "Anexe o documento XYZ para conclusão do processo #0004",
        read: true,
        time: "1d"
    },
]

export default function Toolbar() {
    return (
        <Container>
            <div className = "searchBar">
                <MdSearch size = {24} color = "#8a8a8a" className = "icon"/>
                <input placeholder = "Buscar"/>
            </div>
            <Notification notifications = {notificationsAPI}/>
            <Profile />
        </Container>
    )
}
