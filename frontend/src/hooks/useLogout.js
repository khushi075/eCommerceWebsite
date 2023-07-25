import { useAuthContext } from "./useAuthContext";
import {useProductContext} from "./useProductContext";

export const useLogout = () => {
    const { dispatch } = useAuthContext();
    const {dispatch:productDispatch} = useProductContext();

    const logout = () => {
        //remove the user from local storage
        localStorage.removeItem('user');

        //dispatch the logout action
        dispatch({ type: 'LOGOUT' });
        productDispatch({type:'GET_PRODUCTS',payload:null})
    }
    return { logout }
}