import styled from 'styled-components'

export const MenuMobile = styled.aside<{pos?: string}>`
    display: flex;
    flex-direction: column;
    background-color: rgba(0, 0, 0, 0.93);
    align-items: center;
    transition: 1s;
    border-radius: 10px;
    height: auto;
    padding: 20px;
    position: fixed;
    color: white;
    top: 72px;
    z-index:999;
    box-shadow: 0px 0px 10px white;
    right:${props=>props.pos};
    @media(min-width: 780px){
        display: none;
    }
`;
export const MenuItems = styled.p`
    
`;