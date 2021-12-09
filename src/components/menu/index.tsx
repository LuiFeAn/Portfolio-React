import * as S from './style'

type Props = {
   action: ()=>void,
}
const Menu = (props: Props)=>{
    return(
        <S.MenuIconsContainer onClick={props.action}>
            <S.MenuIcons/>
            <S.MenuIcons/>
            <S.MenuIcons/>
        </S.MenuIconsContainer>
    )
}
export default Menu