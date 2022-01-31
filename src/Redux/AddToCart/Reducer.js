import {ADD_TO_CART} from "./ActionType";

const init = {cart:[]}
export const reducer=(state=init,{type,payload}) => {
    switch (type) {
        case ADD_TO_CART: 
            return {
                ...state,
                cart :[...state.cart, payload]
            }
        default:
            return state
                
            
    }
}