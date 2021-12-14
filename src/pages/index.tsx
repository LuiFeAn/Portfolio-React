import { useState } from 'react';
import * as S from './style'
import HomeHeader from '../components/header';
import Level from '../components/level';
import Menu from '../components/menu';
import MenuMobile from '../components/menumobile';

import css from '../img/css.png';
import html from '../img/html.png';
import react from '../img/react.png'
import node from '../img/node.png'

const Home = ()=>{

    const [menuClick,setMenuClick] = useState<Boolean>(true);
    const [clicked,setClicked] = useState<Boolean>(false);
    const [menuPos,setMenuPos] = useState<string>("-550px");


    const HandleMenuClick = ()=>{
       if(!clicked){
           setClicked(true)
           setMenuPos("-550px");
       }
       else{
           setClicked(false)
           setMenuPos("0px");
       }
    }

    return(
        <>
        <HomeHeader/>
        
        <Level/>

        <S.PersonalContainer>

           <Menu action = {HandleMenuClick}/>

            {!!menuClick? <MenuMobile pos={menuPos}/> : null}
    
            <S.AboutContainer>
                <S.Topic>Sobre mim:</S.Topic>
                <S.Name>
                    Luis Fernando - Desenvolvedor
                </S.Name>
                <S.Desc>
                 Olá, me chamo Luís Fernando e sempre fui apaixonado por tecnologia.
                 Estou cursando engenharia de software e desenvolvo alguns projetos individuais para aprimorar minhas habiliades.
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
                        <S.SkillImg width = "70px" src = {html}/>
                        <S.SkillImg width = "70px" src = {css}/>
                        <S.SkillImg marg="0px -14px" width = "100px" src = {react}/>
                    </S.SkillsImgContainer>
            </S.SkillsContainer>

            <S.SkillsContainer>
            <S.Topic>Back-End:</S.Topic>
                    <S.SkillsImgContainer>
                        <S.SkillImg width = "60px" src = {node}/>
                    </S.SkillsImgContainer>
            </S.SkillsContainer>

            <S.ContactContainer>
                <S.Topic>Contato:</S.Topic>
                <div>
                    <S.Input placeholder = "Seu Nome"></S.Input>
                    <S.Input placeholder = "Seu Email"></S.Input>
                </div>
                <S.Topic>
                    Quest:
                </S.Topic>
                <S.TextArea>

                </S.TextArea>
            </S.ContactContainer>
            
            <S.SocialContainer>
                <S.Topic>Redes:</S.Topic>
                <div>
                <a href="">
                    <S.SocialImg src = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/600px-Instagram_icon.png"/>
                </a>
                <a href="https://www.linkedin.com/in/luis-fernando-50a550212/">
                    <S.SocialImg src = "https://image.flaticon.com/icons/png/512/174/174857.png"/>
                </a>
                <a href="https://github.com/LuiFeAn">
                    <S.SocialImg src = "https://www.freeiconspng.com/uploads/git-github-hub-icon-25.png"/>
                </a>
                </div>
            </S.SocialContainer>
        </S.PersonalContainer>
        
        <S.Footer>
            <p>Feito com ❤️ por Luis Fernando</p>
        </S.Footer>
        </>
    );
}
export default Home;