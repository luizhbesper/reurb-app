import React from 'react'
import Container, { Navigation } from './style'
import {MdDashboard, MdAdd, MdAssignment, MdPeople, MdExitToApp, MdSettingsApplications} from 'react-icons/md';

export default function Navbar() {
    return (
        <Container>
            <div className = "logo">ReurbHUB</div>
            <Navigation>
                <div>
                    <div><MdDashboard /><span>Dashboard</span></div>
                    <div><MdAdd /><span>Novo Registro</span></div>
                    <div><MdPeople /><span>Parecer Social</span></div>
                    <div><MdAssignment /><span>Processos</span></div>
                </div>
            </Navigation>
            <div className = "navfooter down">
                <MdSettingsApplications /><span>Configurações</span>
            </div>
            <div className = "navfooter">
                <MdExitToApp /><span>Logout</span>
            </div>
        </Container>
    )
}
