import { useSAuthContext } from "./useSAuthContext";
import {useProductContext} from "./useProductContext";

export const useSLogout = () => {
    const { dispatch } = useSAuthContext();
    const {dispatch:productDispatch} = useProductContext();

    const slogout = () => {
        //remove the user from local storage
        localStorage.removeItem('seller');

        //dispatch the logout action
        dispatch({ type: 'LOGOUT' });
        productDispatch({type:'GET_PRODUCTS',payload:null})
    }
    return { slogout }
}