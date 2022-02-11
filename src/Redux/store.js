import {reducer as AddToCartReducer} from "./AddToCart/Reducer";
import {combineReducers, createStore} from "redux";
import {reducer as AuthReducer} from "./Auth/reducer";

const rootReducer = combineReducers({AddToCart:AddToCartReducer, Auth:AuthReducer})
export const store = createStore(rootReducer)