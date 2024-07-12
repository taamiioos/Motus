import { styled } from '@mui/system';

export const Container = styled('div')`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: 0.5fr 0.5fr 0.7fr 0.4fr 0.5fr 0.5fr 0.5fr 0.5fr 0.5fr 0.3fr; `;

export const HeaderContainer = styled('div')`
    grid-column: 4 / 6;
    grid-row: 1 / 2;
    padding: 20px;
    right: 0;
    left: auto;
    position: fixed;
    z-index: 1000;
    
`;

export const Logo = styled('div')`
    grid-column: 1 / 4;
    grid-row: 1 / 2;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 813px;
    height: 350px;

`;
export const Pic1 = styled('div')`
    grid-column: 4 / 6;
    grid-row: 2/ 3;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 555px;
    height: 400px;

`;
export const Pic2 = styled('div')`
    grid-column: 4 / 6;
    display: flex;
    margin-top: 260px;
    flex-direction: column;
    justify-content: center;
    width: 555px;
    height: 400px;
`;
export const TextBlock1 = styled('div')`
    justify-content: center;
    font-size: 30px;
    padding: 39px 40px 41px 43px;
    border-radius: 40px;
    background-color: #ffffff; 
`;

export const Pink = styled('div')`
    grid-column: 2 / 4;
    grid-row: 3 / 4;
    align-self: flex-start;
    background-color: #f02d84;
    position: relative;
    text-align: left;
    margin: 0;
`;

export const Par = styled('div')`
    margin: 0;
    padding: 0;
    line-height: 1.2;
`;
export const TextBlock2 = styled('div')`
    justify-content: center;
    font-size: 55px;
    padding: 44px 793px 43px 40px;
    border-radius: 40px;
    white-space: nowrap;
    background-color: #ffffff; /* Цвет фона для наглядности */
`;
export const Pink2 = styled('div')`
    background-color: #f02d84;
    grid-column: 1 / 4;
    margin-right: 10px;
    text-align: left;
    grid-row: 4 / 5;
    align-self: flex-start;
    margin-bottom: 10px;
`;
export const TextBlock3 = styled('div')`
    justify-content: center;
    font-size: 30px;
    white-space: nowrap;
    padding: 39px 45px 81px 43px;
    border-radius: 40px;
    background-color: #ffffff; /* Цвет фона для наглядности */
`;
export const Pink3 = styled('div')`
    background-color: #f02d84;
    position: relative;
    align-self: flex-start;
    grid-column: 4 / 6;
    text-align: left;
    grid-row: 4 / 5;
`;
export const TextBlock4 = styled('div')`
    justify-content: center;
    white-space: nowrap;
    border-radius: 40px;
    background-color: #ffffff; /* Цвет фона для наглядности */
`;
export const Pink4 = styled('div')`
    background-color: #f02d84;
    position: relative;
    grid-column: 4 / 6;
    text-align: left;
    grid-row: 5 / 6;
    

`;
export const RegistrationContainer = styled('div')`
    grid-column: 1 / 6;
    grid-row:  8/ 9;
    padding: 20px;
`;
export const SubscriptionContainer = styled('div')`
    grid-column: 1 / 6;
    grid-row: 9 / 10;
    padding: 20px;
`;
export const FooterContainer = styled('div')`
    grid-column: 1 / 6;
    grid-row: 10/ 11;
    text-align: center;
    left: 0;
    right: 0;
    bottom: 0;
    margin: 0;
`;