import styled from "styled-components";

export const Box = styled.div`
    padding: 2%;
    background: #e52c7e;
    gap: 1em;
`;

export const FooterContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 2fr;
    width: 100%;
    gap: 1em;
    @media (max-width: 1000px) {
        grid-template-columns: repeat(2, 1fr);
    }
    @media (max-width: 600px) {
        grid-template-columns: 1fr;
    }
`;

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
    line-height: 220%;
`;

export const LogoColumn = styled.div`
    grid-column: 1 / 2;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const Contacts = styled.div`
    grid-column: 3 / 4;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const Politics = styled.div`
    grid-column: 4 / 6;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const FooterLink = styled.a`
    color: #fff;
    font-size: 18px;
    text-decoration: none;

    &:hover {
        color: #000000;
        transition: 200ms ease-in;
    }
`;

export const LogoPic = styled.img`
    width: 100%;
    height: auto;
    max-width: 150px; /* Adjust as necessary */
`;
export const HeaderNavList = styled.ul`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 20px;
    align-items: center;
    list-style-type: none;
    margin: 0;
    padding: 0;
`;

export const HeaderNavListItem = styled.li`
    text-align: center;
`;
export const SimpText = styled.p`
    text-align: left;
    color: azure;
    font-family: "Arial";
    margin: 0;
`;
export const FirstLine = styled.div`
    margin-bottom: 8dvh;
`;