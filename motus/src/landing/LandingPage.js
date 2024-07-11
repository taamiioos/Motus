import React from 'react';
import Header from "../header/Header";
import { Container, HeaderContainer } from "./landingPageStyles";

const LandingPage = () => {
    return (
        <Container>
            <HeaderContainer>
                <Header/>
            </HeaderContainer>
        </Container>
    );
};

export default LandingPage;