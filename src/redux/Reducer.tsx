import React from "react"



 interface itemsType{
    id:number,
    title:string,
}
interface initStateType{
    items:itemsType[]
}
 
const initState:initStateType={
items:[]

}

const Reducer = (state=initState,action: { type: any ,item:itemsType})=>{
    switch (action.type) {
        case "ADD_NEW_LIST":
            return{
          items:state.items.concat(action.item),

            }
            case "REMOVE_FROM_LIST":
            return{
           items:state.items.filter(delitem=>delitem.id!== action.item.id),

            }
            case "REMOVE_ALL_LIST":
                return{
               items:[],
    
                }
        default:
            return state
    }

}

export default Reducer