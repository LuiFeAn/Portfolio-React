import styled from 'styled-components';
export const HoursContainer = styled.section`
    color: white;
    text-align: center;
`;
export const HoursContainerText = styled.p<{color: string}>`
    font-size: 15px;
    transition: 1s;
    padding: 50px;
    border-radius: 10px;
    color: ${props=>props.color}
`;