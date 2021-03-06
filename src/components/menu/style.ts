import styled from 'styled-components'

export const MenuIconsContainer = styled.section`
    position: fixed;
    top: 10px;
    right:5px;
    display: grid;
    z-index: 999;
    gap: 5px;
    @media(min-width: 600px){
        display: none;
    }
`;
export const MenuIcons = styled.section`
    background-color: white;
    image-rendering: pixelate;
    border-radius: 10px;
    width: 30px;
    height: 12px;
`;