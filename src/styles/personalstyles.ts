import style from 'styled-components';

export const PersonalContainer = style.section`
    padding: 0px 100px;
    color: white;
    transition: 1s;
    display: flex;
    flex-direction: column;
    line-height: 20px;
    margin: 50px 0px;
    gap: 20px;

    h3,p{
        border-radius: 10px;
        background-color: rgba(0, 0, 0, 0.466);
    }

    div{
        background-color: rgba(0, 0, 0, 0.726);
        padding: 15px;
        border-radius: 10px;
    }

    @media(max-width:780px){

        padding:0;
        font-size: 15px;

        h3{
            padding: 0;
            height: 0;
            margin: 0;
            line-size: 350px;
        }

        p{
            padding: 0;
            height: 0;
            font-size: 13px;
        }
        div{
            text-align: center;
        }
    }
`;
export const AboutContainer = style.div`
    display: flex;
    flex-direction: column;
    gap: 50px;
`;
export const PortContainer = style.div`
    display: flex;
    flex-direction: column;
    margin: 250px 0px;
`;
export const SkillsContainer = style.div`
    display: flex;
    flex-direction: column;
    gap: 25px;
`;
export const ContactContainer = style.div`
    display:flex;
    flex-direction: column;
    gap: 10px;
    justify-content: center;
    align-items: center;
    text-align: center;

    div{
        display: flex;
        justify-content: center;
        gap: 30px;
    }

    @media(max-width:780px){

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
    gap: 20px;
    justify-content: center;
    border-radius: 10px;
    
`;
export const SkillImg = style.img<{sizex?: string,marg?: string}>`
    width: ${props=>props.sizex}
    height: 50px;
    padding: 0px 10px;
    margin: ${props=>props.marg}
`;
export const Input = style.input`
    width: 450px;
    padding: 0px 50px;
    height: 20px;
    border-radius: 10px;
    background-color: grey;
    color: white;
    font-size: 15px;
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
    height: 300px;
    color: white;
    font-size: 15px;

    @media(max-width:780px){
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