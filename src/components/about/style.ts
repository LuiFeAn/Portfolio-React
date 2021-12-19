import style from 'styled-components';

export const AboutContainer = style.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    background-color: rgba(0, 0, 0, 0.644);
    height:auto;
    @media(max-width: 1012px){
        gap: 50px;
        height:350px;
    }
`;
export const Topic = style.p`
    font-size: 15px;
`;
export const Desc = style.p`
    font-size: 15px;
    padding: 30px;
    height: 80px;
`;
export const Name = style.h3`
    padding: 10px;
    margin: 0px 170px;
    color: white;
    text-align: center;
`;