import * as S from './style';

const Contact = ()=>{
    return(
        <S.ContactContainer>
        <S.Topic>Contato:</S.Topic>
        <div>
            <S.Input placeholder = "Seu Nome"></S.Input>
            <S.Input placeholder = "Seu Email"></S.Input>
        </div>
        <S.Topic>
            Quest:
        </S.Topic>
        <S.TextArea/>
        <S.Button>Enviar</S.Button>
    </S.ContactContainer>
    )
}
export default Contact