import {reducer} from "./AddToCart/Reducer";
import {createStore} from "redux";

export const store = createStore(reducer)