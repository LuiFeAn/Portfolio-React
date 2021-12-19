import style from 'styled-components';

export const SkillsContainer = style.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 25px;
`;
export const SkillsImgContainer = style.div`
    background-color: black;
    display: flex;
    justify-content: center;
    border-radius: 10px;
    
`;
export const SkillImg = style.img<{sizex?: string,marg?: string}>`
    &hover{
        transform:scale(1.1);
    }
    width: ${props=>props.sizex}
    height: 50px;
    padding: 0px 10px;
    margin: ${props=>props.marg};
`;
export const Topic = style.p`
    font-size: 15px;
`;