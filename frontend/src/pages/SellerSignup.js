import { useState } from "react";
import { useSSignup } from "../hooks/useSellerSignup";
import {Link} from 'react-router-dom';

const SSignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [storename, setStorename] = useState('');
    const { error, loading, ssignup } = useSSignup();

    const handleSubmit = async (e) => {
        e.preventDefault();

        await ssignup(email, password, storename);
    }
    return (
        <form className="flex flex-col justify-center items-center p-0 my-16 mx-0 gap-y-5" onSubmit={handleSubmit}>
            <div className="border border-gray-500 rounded-lg py-8 px-16 flex flex-col justify-center items-center gap-y-5">
                <h2 className="text-3xl font-medium m-0 py-2 px-0">Sign Up for Sellers</h2>
                <div className="flex flex-col justify-center items-start gap-y-2">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        name="email"
                        className="py-2 px-4 rounded-md border border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="flex flex-col justify-center items-start gap-y-2">
                    <label htmlFor="password">Create Password</label>
                    <input
                        type="password"
                        name="password"
                        className="py-2 px-4 rounded-md border border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className="flex flex-col justify-center items-start gap-y-2">
                    <label htmlFor="storename">Your Store Name</label>
                    <input
                        type="text"
                        name="storename"
                        value={storename}
                        className="py-2 px-4 rounded-md border border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                        onChange={(e) => setStorename(e.target.value)}
                    />
                </div>
                <button type="submit" disabled={loading} className="border-black border font-medium py-2 px-4 rounded-md bg-black text-white mt-2 hover:bg-white hover:text-black">Sign Up</button>
                <div className="flex flex-wrap justify-center items-center gap-x-4">
                    Already have an Account?
                    <Link to="/slogin" className="underline">Login</Link>
                </div>
                {error && <div className="error  text-red-700">{error}</div>}
            </div>
        </form>
    )
}

export default SSignUp;