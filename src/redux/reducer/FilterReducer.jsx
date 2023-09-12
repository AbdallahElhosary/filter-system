import { ADIDAS, ALL_PRODUCTS, NIKE, PUMA, SNEAKERS, VANS } from "../type"
import data from "../../db/data"
const initialState = {
    selectedCompany: ALL_PRODUCTS,
    filteredData: data, // Array to hold the filtered products
};
const FilterReducer = (state = initialState, action) => {
    switch (action.type) {
        case SNEAKERS:
            return {
                ...state,
                selectedCategory: SNEAKERS,
                filteredData: data.filter((product) => product.company === SNEAKERS),
            };
        default:
            return {
                ...state,
                selectedCompany: ALL_PRODUCTS,
                filteredData: data,
            };
    }
}

export default FilterReducer;