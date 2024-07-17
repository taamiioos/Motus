import styled from "styled-components";


export const RegistrationBlock =styled.div `
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-gap: 5px;
`;

export const PhotoBlock = styled.div `
    grid-column: 1/2;
    grid-row: 1/1;
    border-radius: 15px;
    background: linear-gradient(to right, #4ee413, #ee2d83, #ff00ff);
`;

export const Photo = styled.img `
`;
export const Pink= styled.div `
background: deeppink;
    grid-column: 2/4;
    grid-row: 1/2;
`
export const UserPink = styled.div `
    background: deeppink;
margin-bottom: 2%;
    
height: 38px;    


`;
export const PasswordPink =styled.div `
    background: deeppink;

`;
export const LabelBlock =styled.div `
    padding: 20px;
    flex-direction: column;
    background-color: #ffffff;
    border-radius: 30px;
    height: 80%;
`;
export const Label =styled.p `
    text-align: left;
    font-size: 32px;
    font-family: Arial;
    font-weight: bold;
    line-height: 100%;
`;
export const RedLabel =styled.p `
    color: #ee2d83;
`;
export const FormBlock = styled.div`
    grid-column: 4 / 6;
    grid-row: 1/1;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(5, auto);
    
`;

export const Form = styled.form`
    grid-template-columns: 1fr;
    grid-template-rows: repeat(5, auto);
    align-items: center;
`;

export const UsernameField = styled.input`
    text-align: left;
    border-radius: 10px;
    padding: 10px;
    font-size: 16px;
    //grid-row: 1 / 2;
    margin-bottom: 1%;
    background: #ffffff;
    border: 0;
    width: 90%;
    color: black;
    transition: all 0.5s ease-in-out;

    &:hover {
        background: linear-gradient(to right, #d2e8b3, #90e413);
        transform: scale(1.01);
        color: black;
    }

    &:focus,
    &:not(:placeholder-shown) {
        background: linear-gradient(to right, #d2e8b3, #90e413);
        transform: scale(1.01);
        color: black;
        border: 0px;
    }

    &.valid {
        background: linear-gradient(to right, #a8e063, #56ab2f); /* Updated colors */
        border: 0;
        transform: scale(1.00);
        color: black;
    }

    &.invalid {
        border: 0;
        background: linear-gradient(to right, #ff7e5f, #feb47b); /* Updated colors */
        color: black;
    }
`;

export const PasswordField = styled.input`
    text-align: left;
    border-radius: 10px;
    padding: 10px;
    font-size: 16px;
    grid-row: 2 / 3;
    width: 90%;
    background: #ffffff;
    border: 0;
    transition: all 0.5s ease-in-out;

    &:hover {
        background: linear-gradient(to right, #d2e8b3, #90e413);
        transform: scale(1.01);
        color: black;
    }


    &:focus,
    &:not(:placeholder-shown) {
        background: linear-gradient(to right, #d2e8b3, #90e413);
        transform: scale(1.01);
        color: black;
        border: 0px;
    }

    &.valid {
        background: linear-gradient(to right, #a8e063, #56ab2f); /* Updated colors */
        border: 0;
        color: black;
        transform: scale(1.00);
    }

    &.invalid {
        border: 0;
        background: linear-gradient(to right, #ff7e5f, #feb47b); /* Updated colors */
        color: black;
    }
`;


export const PersonalDataConsent = styled.div`
    display: flex;
    align-items: center;
    font-size: 16px;
    margin-top: 2%;
    margin-bottom: 2%;

    & input {
        appearance: none;
        width: 20px;
        height: 20px;
        margin-right: 10px;
        border: 2px solid #FF1493;
        border-radius: 3px;
        position: relative;
        cursor: pointer;
    }

    & input:checked {
        background-color: #FF1493;
    }

    & input:checked::after {
        content: '';
        position: absolute;
        top: 2px;
        left: 5px;
        width: 5px;
        height: 10px;
        border: solid white;
        border-width: 0 2px 2px 0;
        transform: rotate(45deg);
    }

    & label {
        cursor: pointer;
    }

    & span {
        color: black;
        font-weight: normal;
    }

    & span.highlight {
        color: #FF1493;
        font-weight: bold;
    }

`;

export const RegistrationButton = styled.button`
    border-radius: 10px;
    text-align: center;
    background: linear-gradient(to right, #ea3cfd, #fc0d79);
    color: white;
    font-size: 18px;
    font-weight: bold;
    width: 94%;
    padding: 15px;
    grid-row: 4 / 5;
    cursor: pointer;
    border: none;
    margin-bottom: 0;
    transition: background 0.5s ease-in-out, transform 0.3s ease-in-out;

    &:hover {
        background: linear-gradient(to right, #d2e8b3, #90e413);
        transform: scale(1.01);
        color: black;
    }
`;


