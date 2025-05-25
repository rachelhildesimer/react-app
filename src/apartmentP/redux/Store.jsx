import { createStore } from "redux";
import {produce} from 'immer'

const  Store = {
   currentUser:{}
}
const reducer = produce((state,action)=>{
    switch(action.type){
        case 'SET_CURRENT_USER':
         state.currentUser=action.payload
        break;
    default:
    }
},Store)

const myStore =createStore(reducer)
window.store=myStore
export default myStore;