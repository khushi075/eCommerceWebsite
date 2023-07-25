import { useState} from "react";    
import {useSAuthContext} from './useSAuthContext';

export const useSSignup = () => {
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false)
    const {dispatch} = useSAuthContext();

    const ssignup = async (email, password, storename) => {
        setLoading(true);
        setError(null);

        const res = await fetch('api/sellers/ssignup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email, password, storename})
        });

        const json = await res.json();
        if(!res.ok) {
            setLoading(false);
            setError(json.error);
       
        }
        if (res.ok) {
            //save the user to local storage
            localStorage.setItem('seller', JSON.stringify(json));

            //update the auth context
            dispatch({type: 'LOGIN', payload: json});

            setLoading(false);
            
        }
    }
    return {error, loading, ssignup}
}