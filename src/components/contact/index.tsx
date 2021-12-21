import * as S from './style';

const Contact = ()=>{
    return(
        <S.ContactContainer>
        <S.Topic>Contato:</S.Topic>
        <form action="/arq/sendemail.php" method='POST'>
            <div className='inpts'>
                <S.Input name='n' placeholder = "Seu Nome"></S.Input>
                <S.Input name='e' placeholder = "Seu Email"></S.Input>
            </div>
            <S.Topic>
                Quest:
            </S.Topic>
            <S.TextArea name='q'/>
            <S.Button>Enviar</S.Button>
        </form>
    </S.ContactContainer>
    )
}
export default Contact