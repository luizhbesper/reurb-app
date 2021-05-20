import React, {useCallback} from 'react'
import Container from './style'
import Image from 'next/image'



export default function Profile() {

    const profileClick = useCallback(() => {
        console.log("Abrir Menu Inferior")
    })

    return (
        <Container>
            <style jsx global>{`
                .avatar {
                    border-radius: 50%;
                    cursor: pointer;
                }
            `}</style>
            <Image
                src="/assets/pp.jpg"
                alt="Picture of the author"
                width={40}
                height={40}
                className = "avatar"
                onClick = {() => profileClick()} 
            />
        </Container>
    )
}
