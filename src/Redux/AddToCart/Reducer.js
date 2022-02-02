import {ADD_TO_CART, REMOVE_FROM_CART} from "./ActionType";

const init={cart: []}
// Selector

export const reducer=(state=init,{type,payload}) => {
    switch (type) {
        case ADD_TO_CART: 
            return {
                ...state,
                cart :[...state.cart, payload]
            }
        case REMOVE_FROM_CART:
            return {
                ...state,
                cart:[payload]
            }
        default:
            return state
                
            
    }
}