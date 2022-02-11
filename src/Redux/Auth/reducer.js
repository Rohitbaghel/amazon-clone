import {LOGIN_USER} from "./ActionType";
const init = {user: null}
 
export const reducer=(state=init, {type, payload}) => {
    switch (type) {
        case LOGIN_USER:
            return {
                ...state,
                user: payload,

            }
        default: return state
     }
 }