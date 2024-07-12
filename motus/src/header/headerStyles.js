import styled from "styled-components";


export const HeaderWrapper = styled.header`
    grid-column: span 2;
    display: flex;
    justify-content: flex-end;
    margin: 0`;

export const HeaderRow = styled.div`
    white-space: nowrap;
    width: 100%;
    margin: 0;

`;

export const HeaderNavList = styled.ul`
    display: flex;
    padding: 25px 19px 30px 18px;
    list-style-type: none;
    gap: 3em;
    font-size: 20px;
    margin: 0;

`;

export const HeaderNavListItem = styled.li`
`;

export const HeaderNavLink = styled.div`
    font-family: serif;
    color: #B3D420;
    cursor: pointer;
    &:hover { color: #F02D84; }
    &.selected { color: #F02D84; }
`;
