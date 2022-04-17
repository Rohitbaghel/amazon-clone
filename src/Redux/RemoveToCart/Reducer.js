import { REMOVE_FROM_CART} from "./ActionType";

const init={cart: []}
// Selector

export const reducer=(state=init,{type,payload}) => {
    switch (type) {
        case REMOVE_FROM_CART:
            return {
                ...state,
                cart:[payload]
            }
        default:
            return state
                
            
    }
}