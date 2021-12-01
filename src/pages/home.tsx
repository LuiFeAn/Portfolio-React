import * as S from '../styles/personalstyles'
import HomeHeader from '../components/header';
import Hours from '../components/hours';
import Level from '../components/level';

const Home = ()=>{
    return(
        <>
        <HomeHeader/>
        <Hours/>
        <Level/>
        <S.PersonalContainer>
            <S.AboutContainer>
                <S.Topic>Sobre mim:</S.Topic>
                <S.Name>
                    Luis Fernando - Desenvolvedor
                </S.Name>
                <S.Desc>
                 Olá, me chamo Luís Fernando e sempre fui apaixonado por tecnologia.
                 Estou cursando engenharia de software e desenvolvo alguns projetos individuais para aprimorar minhas habiliades.
                 Adoro estudar e aprender coisas novas. Criei este ''portfólio'' para compartilhar meus projetos e afins.
                </S.Desc>
            </S.AboutContainer>
            <S.PortContainer>
                <S.Topic>Portfólio:</S.Topic>
                <S.Desc>
                Atualmente meus projetos estão totalmente disponíveis no GitHub. Periodicamente, irei atualizar as coisas por aqui e por lá.
                </S.Desc>
            </S.PortContainer>
            <S.SkillsContainer>
                <S.Topic>Skills:</S.Topic>
                <S.Topic>Front-End:</S.Topic>
                    <S.SkillsImgContainer>
                        <S.SkillImg src = {'./html.png'}/>
                        <S.SkillImg src = {'./css.png'}/>
                        <S.SkillImg src = {'./js.png'}/>
                        <S.SkillImg/>
                    </S.SkillsImgContainer>
                <S.Topic>Back-End:</S.Topic>
                    <S.SkillsImgContainer>
                        <S.SkillImg/>
                    </S.SkillsImgContainer>
            </S.SkillsContainer>
            <S.ContactContainer>
                <S.Topic>Contato:</S.Topic>
                <S.Input placeholder = "Seu Nome"></S.Input>
                <S.Input placeholder = "Seu Email"></S.Input>
            </S.ContactContainer>
            <S.SocialContainer>
                <a href="">
                    <S.SocialImg src = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/600px-Instagram_icon.png"/>
                </a>
                <a href="https://www.linkedin.com/in/luis-fernando-50a550212/">
                    <S.SocialImg src = "https://image.flaticon.com/icons/png/512/174/174857.png"/>
                </a>
                <a href="https://github.com/LuiFeAn">
                    <S.SocialImg src = "https://www.freeiconspng.com/uploads/git-github-hub-icon-25.png"/>
                </a>
            </S.SocialContainer>
        </S.PersonalContainer>
        <S.Footer>
            <p>Feito com ❤️ por Luis Fernando</p>
        </S.Footer>
        </>
    );
}
export default Home;