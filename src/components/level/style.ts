import styled from 'styled-components';
export const LevelContainer = styled.section`
    color: white;
    display: flex;
    flex-direction: row;
    text-align: center;
    gap: 30px;
    justify-content: center;

    @media(max-width:600px){
       p{
           font-size: 10px;
       }
    }
`;
export const LevelContainerText = styled.p<{color: string}>`
    font-size: 17px;
    transition: 1s;
    color: ${props=>props.color}
`;