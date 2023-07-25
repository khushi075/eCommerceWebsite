import { useContext } from "react";
import { SAuthContext } from "../context/SAuthContext";

export const useSAuthContext = () => {
    const context = useContext(SAuthContext);
    
    if (!context) {
        throw new Error("useSellerAuthContext must be used within an SellerAuthContextProvider");
    }
    return context;
}
