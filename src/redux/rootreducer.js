import { combineReducers } from "redux"
import reducer2 from "./reducer2"
import Reducer1 from "./Reducer"
 
const rootReducer=combineReducers({
    list1:Reducer1,
    list2:reducer2
})
export default rootReducer