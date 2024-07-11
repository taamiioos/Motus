import React from 'react';
import Header from "../header/Header";
import { Container, HeaderContainer, FooterContainer } from "./landingPageStyles";
import Footer from "../footer/Footer";

const LandingPage = () => {
    return (
        <Container>
            <HeaderContainer>
                <Header/>
            </HeaderContainer>

            <FooterContainer>
                <Footer/>
            </FooterContainer>
        </Container>
    );
};

export default LandingPage;