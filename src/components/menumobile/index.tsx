import * as S from './style'

type Props = {
    pos: string,
}

const MenuMobile = (props: Props)=>{

    const handleAbout = ()=>{
        window.scrollTo({top:60})
    }

    const handlePort = ()=>{
        window.scrollTo({top:480})
    }

    const handleSkills = ()=>{
        window.scrollTo({top:755})
    }

    const handleContact = ()=>{
        window.scrollTo({top:1435})
    }

    return(
        <S.MenuMobile pos = {props.pos}>
            Viagem Rápida
            <S.MenuItems onClick={handleAbout}>
                Sobre
            </S.MenuItems>

            <S.MenuItems onClick={handlePort}>
                Portfólio
            </S.MenuItems>

            <S.MenuItems onClick={handleSkills}>
                Skills
            </S.MenuItems>

            <S.MenuItems onClick = {handleContact}>
                Contato
            </S.MenuItems>
        </S.MenuMobile>
    );
}
export default MenuMobile
