import * as S from "./style";
import { useState,useEffect } from 'react';

const Level = ()=>{

    const [level,setLevel] = useState(20);
    const [hp,setHp] = useState(100);
    const [mana,setMana] = useState(100);
    const [color,setColor] = useState('');

    useEffect(()=>{
        setInterval(()=>{
            setColor("black");
        },500)
        setInterval(() => {
            setColor("white");
        }, 1000);
    },[])

    return(
        <S.LevelContainer>
            <S.LevelContainerText color = {color}>
                Level: {level}
            </S.LevelContainerText>
            <S.LevelContainerText color = {color}>
                HP: {hp}
            </S.LevelContainerText>
            <S.LevelContainerText color = {color}>
                Mana: {mana}
            </S.LevelContainerText>
        </S.LevelContainer>
    );
}
export default Level;