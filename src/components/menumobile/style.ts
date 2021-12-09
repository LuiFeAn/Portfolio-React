import styled from 'styled-components'

export const MenuMobile = styled.aside<{pos?: string}>`
    display: flex;
    flex-direction: column;
    background-color: black;
    transition: 1s;
    border-radius: 10px;
    height: auto;
    padding: 50px;
    position: fixed;
    color: white;
    top: 72px;
    z-index:999;
    right:${props=>props.pos};
    @media(min-width: 780px){
        display: none;
    }
`;
export const MenuItems = styled.p`
    
`;