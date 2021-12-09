import styled from 'styled-components';
export const LevelContainer = styled.section`
    padding: 20px;
    background-color: black;
    border-radius: 10px;
    color: white;
    display: flex;
    gap: 30px;
    justify-content: center;

    @media(max-width:780px){
       margin:0;
       padding: 0;
    }
`;
export const LevelContainerText = styled.p<{color: string}>`
    font-size: 12px;
    transition: 1s;
    color: ${props=>props.color}
`;