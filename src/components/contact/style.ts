import style from 'styled-components';

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

    @media(max-width:600px){

        div{
            flex-direction: column;
        }

        input{
            width: 300px;
        }
    }
`;
export const Button = style.button`
    width: 350px;
    height: 50px;
    background-color: grey;
    border: 5px solid white;
    cursor: pointer;
    font-size: 12px;
    border-radius: 10px;

    @media(max-width:1012px){
        width: 200px;
    }
`;
export const TextArea = style.textarea`
    outline: none;
    width: 750px;
    border: 3px solid white;
    background-color: grey;
    border-radius: 10px;
    height: 220px;
    color: white;
    font-size: 12px;

    @media(max-width:600px){
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
export const Input = style.input`
    width: 450px;
    padding: 0px 50px;
    height: 20px;
    border-radius: 10px;
    background-color: grey;
    color: white;
    font-size: 10px;
    padding: 15px;
    border: none;
    outline: none;
    border: 3px solid white;
    font-family: 'Press Start 2P', cursive;
`;