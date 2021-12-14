import style from 'styled-components';

export const PersonalContainer = style.section`
    color: white;
    transition: 1s;
    line-height: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin: 40px 0px;
    gap: 50px;

    input{
        width: 300px;
    }
    textarea{
        width: 600px;
    }

    div{
        padding: 10px;
        box-shadow: 0px 0px 10px white;
        border-radius:10px;
        inline-size: 750px;
    }

    @media(max-width:1012px){
        padding: 0px;
        font-size: 15px;
        align-items: unset;
        justify-content: center;

        h3{
            padding: 0;
            height: 0;
            margin: 0;
            line-size: 350px;
        }

        p{
            padding: 0;
            height: 0;
            font-size: 12px;
        }
        div{
            text-align: center;
            margin: 20px 0px;
            inline-size: auto;
            padding: 10px;
        }
        textarea{
            width: 300px;
        }
    }
`;
export const AboutContainer = style.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    background-color: rgba(0, 0, 0, 0.644);
    height: 300px;
    @media(max-width: 1012px){
        width: auto;
        gap: 50px;
        height: 350px;
    }
`;
export const PortContainer = style.div`
    display: flex;
    flex-direction: column;
    background-color: rgba(0, 0, 0, 0.644);
    height: 200px;
`;
export const SkillsContainer = style.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color:rgba(0, 0, 0, 0.644);
    gap: 25px;
`;
export const ContactContainer = style.div`
    display:flex;
    flex-direction: column;
    gap: 10px;
    justify-content: center;
    align-items: center;
    text-align: center;
    background-color: rgba(0, 0, 0, 0.644);
    height: 600px;

    div{
        display: flex;
        justify-content: center;
        gap: 30px;
    }

    @media(max-width:1012px){

        div{
            flex-direction: column;
        }

        input{
            width: 300px;
        }
    }
`;
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
export const Input = style.input`
    width: 450px;
    padding: 0px 50px;
    height: 20px;
    border-radius: 10px;
    background-color: grey;
    color: white;
    font-size: 12px;
    padding: 15px;
    border: none;
    outline: none;
    font-family: 'Press Start 2P', cursive;
`;
export const TextArea = style.textarea`
    outline: none;
    width: 750px;
    border: none;
    background-color: grey;
    border-radius: 10px;
    height: 220px;
    color: white;
    font-size: 12px;

    @media(max-width:1012px){
        width: 320px;
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
export const WarriorContainer = style.div`
    justify-content: center;
    align-items: center;
    align-content: center;
`;
export const WarriroGif = style.img`
    width: 140px;
    hegith: 150px;
    position: absolute;
`;