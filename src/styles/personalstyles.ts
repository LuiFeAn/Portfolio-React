import style from 'styled-components';

export const PersonalContainer = style.section`
    padding: 0px 100px;
    color: white;
    transition: 1s;
    display: grid;
    gap: 100px;
    @media(max-width:780px){
        padding:0;
        font-size: 10px;
        inline-size: 200px;
    }
`;
export const AboutContainer = style.div`

`;
export const PortContainer = style.div`

`;
export const SkillsContainer = style.div`

`;
export const ContactContainer = style.div`
    display:flex;
    gap: 10px;
    @media(max-width:780px){
        display: grid;
    }
`;
export const SocialContainer = style.div`
    display: flex;
    gap: 50px;
`;
export const Footer = style.footer`
    text-align:center;
    margin: 50px 0px;
    p{
        color: white;
        font-size: 10px;
    }
`;
export const SocialImg = style.img`
    width: 30px;
    height: 30px;
    cursor: pointer;
`;
export const SkillsImgContainer = style.div`
    background-color: black;
    display: flex;
    gap: 25px;
    padding: 30px;
`;
export const SkillImg = style.img`
    width: 50px;
    height: 50px;
`;
export const Input = style.input`
    width: 450px;
    height: 20px;
    background-color: grey;
    color: white;
    font-size: 15px;
    padding: 15px;
    border: none;
    outline: none;
    font-family: 'Press Start 2P', cursive;
`;
export const Topic = style.p`
    font-size: 15px;
`;
export const Desc = style.p`
    font-size: 15px;
    background-color: black;
    padding: 30px;
    height: 80px;
    @media(max-width:780px){
        inline-size: 310px;
    }
`;
export const Name = style.h3`
    background-color: black;
    padding: 10px;
    margin: 0px 170px;
    color: white;
    text-align: center;
`;