import React from 'react';
import Header from "../header/Header";
import {Container, HeaderContainer, FooterContainer, Subsription} from "./landingPageStyles";
import Footer from "../footer/Footer";
import Subscription from "../subscription/Subscription";

const LandingPage = () => {
    return (
        <Container>
            <HeaderContainer>
                <Header/>
            </HeaderContainer>
            <Subsription>
                <Subscription/>
            </Subsription>
            <FooterContainer>
                <Footer/>
            </FooterContainer>
        </Container>
    );
};

export default LandingPage;