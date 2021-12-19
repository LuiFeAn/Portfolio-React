import { useState } from 'react';
import * as S from './style'
//Componentes
import Level from '../../components/level';
import Menu from '../../components/menu';
import MenuMobile from '../../components/menumobile';
import Port from '../../components/port';
import About from '../../components/about';
import Skills from '../../components/skills';
import Contact from '../../components/contact';
import Social from '../../components/social';


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
        <S.PersonalContainer>
            <Menu action = {HandleMenuClick}/>
            {!!menuClick? <MenuMobile pos={menuPos}/> : null}
            <About/>
            <Port/>
            <Skills/>
            <Contact/>
            <Social/>
            <Level/>
        </S.PersonalContainer>
    );
}
export default Home;