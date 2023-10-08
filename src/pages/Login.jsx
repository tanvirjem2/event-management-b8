import Navbar from "../Shared/Navbar";
import { FcGoogle } from 'react-icons/fc';

const Login = () => {
    return (
        <div>
            <Navbar />
            <div className="border-2 mt-10 rounded-lg p-5 lg:w-1/2 mx-auto">
                <h2 className="font-semibold text-center text-3xl">Login Now!</h2>
                <form className="space-y-3 mt-10">
                    <h2>Email</h2>
                    <input placeholder="Email" className="bg-gray-200 rounded-lg p-3 w-4/5" type="email" name="" id="" />
                    <h2>Password</h2>
                    <input placeholder="Password" className="bg-gray-200 rounded-lg p-3 w-4/5" type="password" name="" id="" />
                    <button className="btn bg-sky-400 text-white block">Login</button>
                </form>
                <p className="mt-5 font-semibold">New ?? Go for Registration</p>
                <div className="flex items-center justify-center mt-2">
                    <button className="btn"><FcGoogle />login with google</button>
                </div>
            </div>
        </div>
    );
};

export default Login;
