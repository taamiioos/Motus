import React from 'react';
import Header from "../header/Header";
import {
    Container,
    HeaderContainer,
    FooterContainer,
    Logo,
    TextBlock1,
    Pink,
    Par,
    TextBlock2, Pink2, TextBlock3, Pink3, Pic1
} from "./landingPageStyles";
import Footer from "../footer/Footer";
import BackgroundSVG from '../pictures/1 (1).svg';
import {LogoPic} from "../footer/footerStyles";

const LandingPage = () => {

    return (
        <Container style={{backgroundImage: `url(${BackgroundSVG})`}}>
            <Logo>
                <LogoPic src="path/to/logo.png" alt="Логотип"/>
            </Logo>
            <Pic1>
                <LogoPic src="path/to/logo.png" alt="Картиночка"/>

            </Pic1>
            <Pink>
                <TextBlock1>
                    <Par>Аудио-видео хостинг для <span style={{color: '#f02d84'}}>подкастов</span>,</Par>
                    <Par>где каждый пользователь сможет</Par>
                    <Par>записывать кроткие голосовые</Par>
                    <Par>и делиться ими с аудиторией</Par>
                </TextBlock1>
            </Pink>
            <Pink2>
                <TextBlock2>
                    О чем мы?
                </TextBlock2>
            </Pink2>
            <Pink3>
                <TextBlock3>
                    <Par>Площадка для саморазвития, образования</Par>
                    <Par>и поиска единомышленников.</Par>
                    <Par>Каждый пользователь может начать вести</Par>
                    <Par>собственный подкаст, как только наберет</Par>
                    <Par>аудиторию.</Par>

                </TextBlock3>
            </Pink3>
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
