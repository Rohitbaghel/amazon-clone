import {LOGIN_USER} from "./ActionType";

export const LoginUser=(user) => {
    return {
        type: LOGIN_USER,
        payload: user
    }
}