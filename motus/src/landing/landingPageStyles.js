import { styled } from '@mui/system';

export const Container = styled('div')`
  display: grid;
  grid-template-columns: repeat(5, 1fr); 

`;

export const HeaderContainer = styled('div')`
  grid-column: 4 / 6;
  text-align: center;
  padding: 20px;
`;

export const FooterContainer = styled('div')`
grid-column: 1/6;
    text-align: center;
    left: 0;
    right: 0;
    bottom: 0;
    //z-index: 2;
    
`