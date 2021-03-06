import * as S from './style';

const Social = ()=>{
    return(
        <S.SocialContainer>
                <S.Topic>Redes:</S.Topic>
                <div>
                <a target="_blank" href="https://www.instagram.com/in4nd0/?utm_medium=copy_link">
                    <S.SocialImg src = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/600px-Instagram_icon.png"/>
                </a>
                <a target="_blank" href="https://www.linkedin.com/in/luis-fernando-50a550212/">
                    <S.SocialImg src = "https://image.flaticon.com/icons/png/512/174/174857.png"/>
                </a>
                <a target="_blank" href="https://github.com/LuiFeAn">
                    <S.SocialImg src = "https://www.freeiconspng.com/uploads/git-github-hub-icon-25.png"/>
                </a>
                </div>
        </S.SocialContainer>
    )
}
export default Social;