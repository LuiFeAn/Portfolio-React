import style from 'styled-components';

export const SocialContainer = style.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;

    div{
        padding:15px;
        display: flex;
        gap: 25px;
        justify-content: center;
    }
`;
export const SocialImg = style.img`
    width: 30px;
    height: 30px;
    cursor: pointer;
`;
export const Topic = style.p`
    font-size: 15px;
`;