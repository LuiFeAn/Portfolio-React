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
`