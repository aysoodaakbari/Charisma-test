import React from "react"
import Additemtolist from '../redux/List1/FirstListAction'


 interface itemsType{
    id:string,
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
    
        default:
            return state
    }

}

export default Reducer