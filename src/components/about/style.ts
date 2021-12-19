import style from 'styled-components';

export const AboutContainer = style.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    @media(max-width: 600px){
        gap: 50px;
    }
`;
export const Topic = style.p`
    font-size: 15px;
`;
export const Desc = style.p`
    font-size: 15px;
    padding: 30px;
`;
export const Name = style.h3`
    padding: 10px;
    margin: 0px 170px;
`;