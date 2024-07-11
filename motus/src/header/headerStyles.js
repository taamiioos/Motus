import { styled } from '@mui/system';


export const HeaderWrapper = styled("header")`
    margin-top: 10px;
    padding: 25px 20px 30px 19px;
    grid-column: 4 / 6; 
`;

export const HeaderRow = styled('div')`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const HeaderNavList = styled('ul')`
    display: grid;
    grid-template-columns: repeat(4, 1fr); 
    column-gap: 20px;
    align-items: center;
    list-style-type: none;
    margin: 0;
    padding: 0;
`;

export const HeaderNavListItem = styled('li')`
    text-align: center;
`;

export const HeaderNavLink = styled('div')`
  font-family: serif;
  font-weight: 400;
  font-size: 20px;
  line-height: 148.6%;
  color: #B3D420;
  cursor: pointer;
  &:hover { color: #F02D84; }
  &.selected { color: #F02D84; }
`;