import { applyMiddleware } from "redux";
import { legacy_createStore as createStore } from 'redux'
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./reducer/RootReducer";
const initialState = {};

const middleware = [thunk];
export const store = createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));
