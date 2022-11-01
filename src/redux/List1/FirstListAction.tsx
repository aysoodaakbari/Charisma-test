 const  Additemtolist=(item: { id: number; title: string })=>
{
    return{ type:"ADD_NEW_LIST",item}
}
const  Removeitemtolist=(item: { id: number; title: string })=>
{
    return{ type:"REMOVE_FROM_LIST",item}
}
export default Additemtolist