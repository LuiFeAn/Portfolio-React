import * as S from "./style";
import getHours from "../../helpers/getHours";
import { useState,useEffect } from "react";

const Hours = ()=>{
    
    const [date,setDate] = useState(0);
    const [color,setColor] = useState('white');

    useEffect(()=>{
        setDate(getHours)
    },[getHours])

    return(
        <S.HoursContainer>
           <S.HoursContainerText color = {color}>
                 {date}
           </S.HoursContainerText>
        </S.HoursContainer>
    );
}
export default Hours;