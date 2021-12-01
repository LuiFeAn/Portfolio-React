
const getHours = ()=>{
    const date = new Date();
    return `${addZero(date.getHours())}:${addZero(date.getMinutes())}`
}
const addZero = (e:number)=>e < 10? `0${e}` : e
export default getHours;
