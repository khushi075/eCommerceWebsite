import { ProductContext } from "../context/productContext";
import { useContext } from "react";

export const useProductContext = () => {
    const context = useContext(ProductContext);

    if (!context) {
        throw Error('useProductContext must be used within a ProductProvider')
    }
    return context; 
}