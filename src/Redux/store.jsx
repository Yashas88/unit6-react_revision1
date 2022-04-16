import { createStore, applyMiddleware, compose} from "redux";

import cityCountryReducer from "../Components/reducer";

import thunk from "reduc-thunk";
import {combineReducers} from "redux";

const reducer = combineReducers({
    cityCountry : cityCountryReducer
})

const composeEnhancer = ((process.env.NODE_ENV !== "production" && window._REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose)

export const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)))