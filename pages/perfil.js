import React from 'react'
import Container from '../styles/perfil.style'
import Image from 'next/image'

const user = {
    id: 0,
    pic: "/assets/pp.jpg",
    name: "Luiz Henrique Esper",
    email: "luiz@reurbhub.com.br",
    role: "Premium",
    company: "ReurbHUB",
    phone: "+55 31 99777 3619"
}

export default function profile() {
    return (
        <Container>
            <div className = "profilePic">
                <Image
                    src = {user.pic}
                    alt ="Picture of the author"
                    width ={200}
                    height ={200}
                    className = "avatar"
                />
                <div className = "newPic" onClick = {() => {alert("Upload")}}>
                    Fazer upload de outra foto
                </div>
            </div>
            <div className = "profileSection">
                <h2>{user.name}</h2>
                <div className = "userType">{user.role}</div>
                <div className = "infosSection">
                    <div className = "company">{user.company}</div>
                    <div className = "email">{user.email}</div> 
                    <div className = "phone">{user.phone}</div>           
                </div>
                <div className = "edit">
                    Editar Informações
                </div>
            </div>
            
            
        </Container>
    )
}
