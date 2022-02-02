import {ADD_TO_CART} from "./ActionType";

const init={cart: []}
// Selector
export const getBasketTotal = (cart) =>
    cart?.reduce((amount, item) => item.price+amount, 0);
console.log(getBasketTotal);
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