import { BackIcon,BackButton, Container, Logo } from "./styles";



import logoImg from '@assets/logo.png';
import React from "react";
type Props = {
    showBackButton?: boolean
}


export function Header({showBackButton = false}:Props){
    return(

        <Container>
            {
                showBackButton &&
                <BackButton>
                <BackIcon/>
                </BackButton>
            }
           
           
            
            <Logo  source={logoImg}/>
        </Container>
    );
}