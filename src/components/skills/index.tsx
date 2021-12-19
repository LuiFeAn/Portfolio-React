import * as S from './style';
import css from '../../img/css.png';
import html from '../../img/html.png';
import react from '../../img/react.png'
import node from '../../img/node.png'

const Skills = ()=>{
    return(
        <>
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
            </>
    )
}
export default Skills;