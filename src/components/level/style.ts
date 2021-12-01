import styled from 'styled-components';
export const LevelContainer = styled.section`
    padding: 10px;
    background-color: black;
    color: white;
    display: flex;
    gap: 30px;
    margin: 0px 250px;
    justify-content: center;
    @media(max-width:780px){
       margin:0;
       inline-size: 400px;
    }
`;
export const LevelContainerText = styled.p<{color: string}>`
    font-size: 15px;
    transition: 1s;
    color: ${props=>props.color}
`;