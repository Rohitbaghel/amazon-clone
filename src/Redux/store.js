import {reducer as AddToCartReducer} from "./AddToCart/Reducer";
import {reducer as RemoveFromCartReducer} from "./RemoveToCart/Reducer";
import {combineReducers, createStore} from "redux";
import {reducer as AuthReducer} from "./Auth/reducer";

const rootReducer = combineReducers({AddToCart:AddToCartReducer, Auth:AuthReducer,RemoveFromCart:RemoveFromCartReducer})
export const store = createStore(rootReducer)