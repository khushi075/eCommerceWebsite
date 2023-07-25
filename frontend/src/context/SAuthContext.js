import {useReducer, createContext, useEffect} from 'react';

export const SAuthContext = createContext()

export const SAuthReducer = (state, action) => {
    switch (action.type) {
        case 'LOGIN':
            return {
                ...state,
                seller: action.payload
            }
        case 'LOGOUT':
            return {
                ...state,
                seller: null
            }
        default:
            return state;
    }
}

export const SAuthContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(SAuthReducer, {
        seller: null
    })

    useEffect(() => {
        const seller = JSON.parse(localStorage.getItem('seller'));
        if(seller) {
            dispatch({type: 'LOGIN', payload: seller})
        }
    },[])

    console.log('AuthContext state: ',state)

    return (
        <SAuthContext.Provider value={{...state, dispatch}}>
            {children}
        </SAuthContext.Provider>
    )
}