import styled from 'styled-components';
export const HomeHeader = styled.header`
    background-color: black;
    display: flex;
    padding: 20px 100px;
    color: white;
    @media(max-width:780px){
        display: none;
    }
`;
export const HomeHeaderText = styled.a`
    font-size: 15px;
    cursor: pointer;
    transition:1s;
    &:hover{
        color: darkgrey;
    }
    @media(max-width:780px){
        display: none;
    }
`;
