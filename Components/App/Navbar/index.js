import React from 'react'
import Container, { Navigation } from './style'
import {MdDashboard, MdAdd, MdAssignment, MdPeople, MdExitToApp, MdSettingsApplications} from 'react-icons/md';
import Link from 'next/link'

export default function Navbar() {
    return (
        <Container>
            <Link href="/">
                <div className = "logo">
                    ReurbHUB
                </div>
            </Link>
            <Navigation>
                <div>
                    <Link href="/">
                        <div>
                            <MdDashboard />
                            <span>Dashboard</span>
                        </div>
                    </Link>
                    <Link href="/registro">
                        <div>
                            <MdAdd />
                            <span>Novo Registro</span>
                        </div>
                    </Link>
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
