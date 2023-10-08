import Navbar from "../Shared/Navbar";

const Register = () => {
    return (
        <div>
            <Navbar />
            <div className="border-2 mt-10 rounded-lg p-5 lg:w-1/2 mx-auto">
                <h2 className="font-semibold text-center text-3xl">Register Now!</h2>
                <form className="space-y-3 mt-10">
                    <h2>Name</h2>
                    <input placeholder="Name" className="bg-gray-200 rounded-lg p-3 w-4/5" type="text" name="" id="" />
                    <h2>Email</h2>
                    <input placeholder="Email" className="bg-gray-200 rounded-lg p-3 w-4/5" type="email" name="" id="" />
                    <h2>Password</h2>
                    <input placeholder="Password" className="bg-gray-200 rounded-lg p-3 w-4/5" type="password" name="" id="" />
                    <button className="btn bg-sky-400 text-white block">Login</button>
                </form>
                <p className="mt-5 font-semibold">Go back to login</p>
            </div>
        </div>
    );
};

export default Register;