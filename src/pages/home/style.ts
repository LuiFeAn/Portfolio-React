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
    color: white;
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
        background-color: rgba(0, 0, 0, 0.644);
    }

    @media(max-width:600px){
        padding: 0px;
        align-items: unset;
        justify-content: center;

        h3{
            padding: 0;
            height: 0;
            margin: 0;
        }

        p{
            padding: 0;
            font-size: 12px;
        }
        div{
            text-align: center;
            margin: 20px 0px;
            inline-size: auto;
            height:auto;
            padding: 10px;
        }
        textarea{
            width: 300px;
        }
    }
`