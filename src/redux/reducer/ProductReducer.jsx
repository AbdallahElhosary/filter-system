import { ADIDAS, ALL_PRODUCTS, NIKE, PUMA, VANS, SNEAKERS, HEELS, FLATS, SANDALS, OVER0, OVER50, OVER100, OVER150,BLACK,WHITE,GREEN,RED,BLUE } from "../type";
import data from "../../db/data"
const initialState = {
    selectedCompany: ALL_PRODUCTS,
    filteredData: data, // Array to hold the filtered products
};

// i can make an array contains all the types and make a for loop to make my logic 



const ProductReducer = (state = initialState, action) => {
    switch (action.type) {
        case NIKE:
            return {
                ...state,
                selectedCompany: NIKE,
                filteredData: data.filter((product) => product.company === NIKE),
            };
        case PUMA:
            return {
                ...state,
                selectedCompany: PUMA,
                filteredData: data.filter((product) => product.company === PUMA),
            };
        case ADIDAS:
            return {
                ...state,
                selectedCompany: ADIDAS,
                filteredData: data.filter((product) => product.company === ADIDAS),
            };
        case VANS:
            return {
                ...state,
                selectedCompany: VANS,
                filteredData: data.filter((product) => product.company === VANS),
            };
        case SNEAKERS:
            return {
                ...state,
                selectedCategory: SNEAKERS,
                filteredData: data.filter((product) => product.category === SNEAKERS),
            };
        case HEELS:
            return {
                ...state,
                selectedCategory: HEELS,
                filteredData: data.filter((product) => product.category === HEELS),
            };
        case SANDALS:
            return {
                ...state,
                selectedCategory: SANDALS,
                filteredData: data.filter((product) => product.category === SANDALS),
            };
        case FLATS:
            
            return {
                ...state,
                selectedCategory: FLATS,
                filteredData: data.filter((product) => product.category === FLATS),
            };
        case OVER0:
            return {
                ...state,
                selectedPrice: OVER0,
                filteredData: data.filter((product) => parseInt(product.newPrice) < 50),
            };
        case OVER50:
            return {
                ...state,
                selectedPrice: OVER50,
                filteredData: data.filter((product) => parseInt(product.newPrice) >= 50 && parseInt(product.newPrice) < 100),
            };
        case OVER100:
            return {
                ...state,
                selectedPrice: OVER100,
                filteredData: data.filter((product) => parseInt(product.newPrice) >= 100 && parseInt(product.newPrice) < 150),
            };
        case OVER150:
            return {
                ...state,
                selectedPrice: OVER150,
                filteredData: data.filter((product) => parseInt(product.newPrice) >= 150 ),
            };
        case BLACK:
            return {
                ...state,
                selectedColor: BLACK,
                filteredData: data.filter((product) => product.color===BLACK),
            };
        case RED:
            return {
                ...state,
                selectedColor: RED,
                filteredData: data.filter((product) => product.color === RED),
            };
        case WHITE:
            return {
                ...state,
                selectedColor: WHITE,
                filteredData: data.filter((product) => product.color === WHITE),
            };
        case GREEN:
            return {
                ...state,
                selectedColor: GREEN,
                filteredData: data.filter((product) => product.color === GREEN),
            };
        case BLUE:
            return {
                ...state,
                selectedColor: BLUE,
                filteredData: data.filter((product) => product.color === BLUE),
            };
        default:
            return {
                ...state,
                selectedCompany: ALL_PRODUCTS,
                filteredData: data,
            };
    }
}

export default ProductReducer;