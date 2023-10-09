import { useContext, useState } from "react";
import Navbar from "../Shared/Navbar";
import { AuthContext } from "../providers/AuthProvider";
import Aos from "aos"
import 'aos/dist/aos.css'
import { useEffect } from "react"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {

    const [registerError, setRegisterError] = useState('')

    if (registerError) {
        toast(`${registerError}`)
    }

    const [success, setSuccess] = useState('')

    if (success) {
        toast(`${success}`)
    }

    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, [])

    const { createUser } = useContext(AuthContext)

    // handle Login
    const handleRegister = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget)
        const name = form.get('name')
        const email = form.get('email')
        const password = form.get('password')
        console.log(name);

        // reset error
        setRegisterError('')
        setSuccess('')

        if (password.length < 6) {

            setRegisterError('Password should be at least 6 characters')

        } else if (/^[a-z0-9]{1,5}$/i.test(password)) {

            setRegisterError('Please use a proper password');
        }

        // Create user
        createUser(email, password)
            .then(result => {
                console.log(result.user);
                setSuccess('User Created Successfully')
            })
            // Error
            .catch(error => {
                console.error(error);
                setRegisterError(error.message)
            })
    }


    return (
        <div>
            <Navbar />
            <div data-aos="zoom-in-down" className="border-2 mt-10 rounded-lg p-5 lg:w-1/2 mx-auto">
                <h2 className="font-semibold text-center text-3xl">Register Now!</h2>
                <form onSubmit={handleRegister} className="space-y-3 mt-10">
                    <h2>Name</h2>
                    <input placeholder="Name" className="bg-gray-200 rounded-lg p-3 w-4/5" type="text" name="name" id="name" />
                    <h2>Email</h2>
                    <input placeholder="Email" className="bg-gray-200 rounded-lg p-3 w-4/5" type="email" name="email" id="email" />
                    <h2>Password</h2>
                    <input placeholder="Password" className="bg-gray-200 rounded-lg p-3 w-4/5" type="password" name="password" id="password" />
                    <button className="btn bg-sky-400 text-white block">Register</button>

                </form>
                <p className="mt-5 font-semibold">Go back to login</p>
                <ToastContainer />
            </div>
        </div>
    );
};

export default Register;