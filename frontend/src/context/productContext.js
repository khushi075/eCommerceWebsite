import { createContext,  useReducer } from "react";

export const ProductContext = createContext();

export const productReducer = (state, action) => {
    switch (action.type) {
      case 'GET_PRODUCTS':
        return {
          ...state,
          products: action.payload
        }
      case 'ADD_PRODUCT':
        return {
          ...state,
          products: state.products.concat(action.payload),
        }
      case 'DELETE_PRODUCT':
        return {
          ...state,
          products: state.products.filter((td) => td._id !== action.payload._id)
        }
      default:
        return state;
    }
  };
  
  export const ProductProvider = ({ children }) => {
    const [state, dispatch] = useReducer(productReducer, {
      products: [] // Initialize products as an empty array
    });
  
    return (
      <ProductContext.Provider value={{ ...state, dispatch }}>
        {children}
      </ProductContext.Provider>
    );
  };
  