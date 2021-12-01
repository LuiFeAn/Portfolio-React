import * as S from "./style";
import { Link } from "react-router-dom";
const HomeHeader = ()=>{
    return(
        <S.HomeHeader>
            <nav>
                <ul>
                    <li>
                        <S.HomeHeaderText>
                            Sobre
                        </S.HomeHeaderText>
                    </li>
                    <li>
                        <S.HomeHeaderText>
                            Skills
                        </S.HomeHeaderText>
                    </li>
                     <li>
                        <S.HomeHeaderText>
                            Portóflio
                        </S.HomeHeaderText>
                    </li>
                    <li>
                        <S.HomeHeaderText>
                            Contato
                        </S.HomeHeaderText>
                    </li>
                </ul>
            </nav>
        </S.HomeHeader>
    )
}
export default HomeHeader;