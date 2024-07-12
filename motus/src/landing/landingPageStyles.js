import { styled } from '@mui/system';

export const Container = styled('div')`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    background-color: #FFFFF;

`;

export const HeaderContainer = styled('div')`
    grid-column: 4 / 6;
    text-align: right;
    position: fixed;
    margin: 0;
    z-index: 1000; 
    background-color: rgba(255, 255, 255, 0.9); 
    border-radius: 20px 20px 20px 20px; 
    right: 0;
    left: auto;
`;

export const FooterContainer = styled('div')`
grid-column: 1/6;
    text-align: center;
    left: 0;
    right: 0;
    bottom: 0;
    //z-index: 2;
`

export const Logo = styled('div')`
    grid-column: 1 / 4;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 813px;
    height: 350px;
`;
export const Pic1 = styled('div')`
    grid-column: 4 / 6;
    display: flex;
    margin-top: 260px;
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
    background-color: #ffffff; /* Цвет фона для наглядности */
`;
export const Pink = styled('div')`
    background-color: #f02d84;
    position: relative;
    grid-column: 2/ 4;
    text-align: left;
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
    margin-top: 300px;
    grid-column: 1 / 4;
    margin-right: 10px;
    text-align: left;
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
    grid-column: 4 / 6;
    margin-top: 300px;
    text-align: left;
    margin-bottom: 10px;
`;
export const Subsription =styled('div')`
grid-column: 1/6;
    padding: 20px;
`