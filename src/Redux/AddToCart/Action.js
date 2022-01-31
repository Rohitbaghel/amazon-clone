import {ADD_TO_CART} from "./ActionType";

export const AddToCart=({id,title,price,image,rating}) => {
    return {
        type: ADD_TO_CART,
        payload: {
            id,title,price,image,rating
        }
    }
}