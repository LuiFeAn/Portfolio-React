import styled from 'styled-components'

export const MenuIconsContainer = styled.section`
    position: fixed;
    top: 10px;
    right:5px;
    display: grid;
    z-index: 999;
    gap: 5px;
    @media(min-width: 780px){
        display: none;
    }
`;
export const MenuIcons = styled.section`
    background-color: white;
    border-radius: 10px;
    width: 30px;
    height: 12px;
`;