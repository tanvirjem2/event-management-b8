import { useContext } from "react";
import Navbar from "../Shared/Navbar";
import { AuthContext } from "../providers/AuthProvider";

const Register = () => {

    const { createUser } = useContext(AuthContext)

    // handle Login
    const handleRegister = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget)
        const name = form.get('name')
        const email = form.get('email')
        const password = form.get('password')
        console.log(name);

        // Create user
        createUser(email, password)
            .then(result => {
                console.log(result.user);
            })
            // Error
            .catch(error => {
                console.error(error);
            })
    }

    return (
        <div>
            <Navbar />
            <div className="border-2 mt-10 rounded-lg p-5 lg:w-1/2 mx-auto">
                <h2 className="font-semibold text-center text-3xl">Register Now!</h2>
                <form onSubmit={handleRegister} className="space-y-3 mt-10">
                    <h2>Name</h2>
                    <input placeholder="Name" className="bg-gray-200 rounded-lg p-3 w-4/5" type="text" name="name" id="name" />
                    <h2>Email</h2>
                    <input placeholder="Email" className="bg-gray-200 rounded-lg p-3 w-4/5" type="email" name="email" id="email" />
                    <h2>Password</h2>
                    <input placeholder="Password" className="bg-gray-200 rounded-lg p-3 w-4/5" type="password" name="password" id="password" />
                    <button className="btn bg-sky-400 text-white block">Login</button>
                </form>
                <p className="mt-5 font-semibold">Go back to login</p>
            </div>
        </div>
    );
};

export default Register;