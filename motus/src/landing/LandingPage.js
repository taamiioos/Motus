import React from 'react';
import Header from "../header/Header";
import {Container, HeaderContainer, FooterContainer, SubscriptionContainer, RegistrationContainer} from "./landingPageStyles";
import Footer from "../footer/Footer";
import Subscription from "../subscription/Subscription";
import Registration from "../registration/Registration";

const LandingPage = () => {
    return (
        <Container>
            <HeaderContainer>
                <Header/>
            </HeaderContainer>
            <SubscriptionContainer>
                <Subscription/>
            </SubscriptionContainer>
            <RegistrationContainer>
                <Registration/>
            </RegistrationContainer>
            <FooterContainer>
                <Footer/>
            </FooterContainer>
        </Container>
    );
};

export default LandingPage;