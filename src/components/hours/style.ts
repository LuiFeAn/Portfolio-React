import styled from 'styled-components';
export const HoursContainer = styled.section`
    padding: 100px;
    color: white;
    height: auto;
    text-align: center;
`;
export const HoursContainerText = styled.p<{color: string}>`
    font-size: 15px;
    transition: 1s;
    color: ${props=>props.color}
`;