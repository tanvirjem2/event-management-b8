import { useContext, useState } from "react";
import Navbar from "../Shared/Navbar";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

import Aos from "aos"
import 'aos/dist/aos.css'
import { useEffect } from "react"

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {

    const [logInError, setLogInError] = useState('')

    if (logInError) {
        toast(`${logInError}`)
    }

    const [success, setSuccess] = useState('')

    if (success) {
        toast(`${success}`)
    }

    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, [])


    const { signIn } = useContext(AuthContext)

    const location = useLocation()

    const navigate = useNavigate();

    // handle Login
    const handleLogin = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget)
        console.log(form.get('password'))
        const email = form.get('email')
        const password = form.get('password')

        setLogInError('')
        setSuccess('')

        // SignIn
        signIn(email, password)
            .then(result => {
                console.log(result.user)
                setSuccess('Login Successfully')

                // navigate after login
                navigate(location?.state ? location.state : '/')
            })
            .catch(error => {
                console.error(error)
                setLogInError(error.message)
            })
    }

    return (
        <div>
            <Navbar />
            <div data-aos="fade-right" className="border-2 mt-10 rounded-lg p-7 lg:w-1/2 mx-auto">
                <h2 className="font-semibold text-center text-3xl">Login Now!</h2>
                <form onSubmit={handleLogin} className="space-y-3 mt-10">
                    <h2>Email</h2>
                    <input placeholder="Email" className="bg-gray-200 rounded-lg p-3 w-4/5" type="email" name="email" id="" />
                    <h2>Password</h2>
                    <input placeholder="Password" className="bg-gray-200 rounded-lg p-3 w-4/5" type="password" name="password" id="" />
                    <button className="btn bg-sky-400 text-white block">Login</button>
                </form>
                <ToastContainer />
                <h2 className="my-8">Don't Have An Account ?
                    <Link to={'/register'}>
                        <span className="text-sky-400 ml-2">Register</span>
                    </Link>
                </h2>
            </div>
        </div>
    );
};

export default Login;
