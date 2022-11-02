interface itemsType{
    id:number,
    title:string,
}
interface initStateType{
    newitems:itemsType[]
}
 
const initState:initStateType={
newitems:[]

}

const reducer2 = (state=initState,action: { type: any ,item:itemsType})=>{
    switch (action.type) {
        case "ADD_LIST":
            return{
          newitem:state.newitems.concat(action.item),

            }
   
        default:
            return state
    }

}

export default reducer2