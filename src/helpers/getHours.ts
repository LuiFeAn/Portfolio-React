
const getHours = ()=>{
    const date = new Date();
    const hello = ['Bom Dia','Boa tarde','Boa noite'];
    return `${addZero(date.getHours())}:${addZero(date.getMinutes())}`
}
const addZero = (e:number)=>e < 10? `0${e}` : e
export default getHours;
