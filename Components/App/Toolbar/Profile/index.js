import React from 'react'
import Container from './style'
import Image from 'next/image'
import Link from 'next/link'

export default function Profile() {
    return (
        <Container>
            <style jsx global>{`
                    .avatar {
                        border-radius: 50%;
                        cursor: pointer;
                    }
                `}</style>
            <Link href = "/perfil">
                <Image
                    src="/assets/pp.jpg"
                    alt="Picture of the author"
                    width={40}
                    height={40}
                    className = "avatar"
                />
            </Link>
        </Container>
    )
}
