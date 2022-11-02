export  const  Additemtolist=(item: { id: number; title: string })=>
{
    return{ type:"ADD_NEW_LIST",item}
}


export const  Removeitemtolist=(item: { id: number; title: string })=>
{
    return{ type:"REMOVE_FROM_LIST",item}
}
 
export const  RemoveAllItemtolist=()=>
{
    return{ type:"REMOVE_ALL_LIST"}
}
 