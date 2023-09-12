

import { combineReducers } from 'redux';
import ProductReducer from './ProductReducer';
import FilterReducer from './FilterReducer';

const rootReducer = combineReducers({
    product: ProductReducer,
    filter: FilterReducer,
    // Add more reducers here if needed
});

export default rootReducer;