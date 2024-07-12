import { styled } from '@mui/system';

export const Container = styled('div')`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(10, 1fr);
`;

export const HeaderContainer = styled('div')`
    grid-column: 4 / 6;
    grid-row: 1 / 2;
    text-align: center;
    padding: 20px;
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
`;

