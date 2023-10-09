import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import { FcGoogle } from 'react-icons/fc';
import app from "../firebase/firebase.config";
import { GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";

const Navbar = () => {

    // useState ()
    const [googleUser, setGoogleUser] = useState(null)

    const { user, logOut } = useContext(AuthContext)

    // Auth
    const auth = getAuth(app);

    // Provider
    const provider = new GoogleAuthProvider()

    // handle Google sign in
    const handleGoogleSignIn = () => {
        signInWithPopup(auth, provider)
            .then(result => {
                const loggedInUser = result.user;
                setGoogleUser(loggedInUser);
            })
            .catch(error => {
                console.log('error', error.message)
            })
        console.log('clicked');
    }

    // handle sign out
    const handleGoogleSignOut = () => {
        signOut(auth)
            .then((result) => {
                setGoogleUser(null)
                console.log(result);
            })
            .catch((error) => {
                console.log('error', error.message)
            })
    }

    const handleSignOut = () => {
        logOut()
            .then(result => {
                console.log(result.user)
            })
            .catch(error => {
                console.error(error)
            })
    }

    const navLinks = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/details'>Details</NavLink></li>
        <li><NavLink to='/features'>Features</NavLink></li>
        <li><NavLink to='/login'>Login</NavLink></li>
        <li><NavLink to='/register'>Register</NavLink></li>
    </>
    return (
        <div className="border-2 mt-5 rounded-lg">
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 gap-6">
                            {navLinks}
                        </ul>
                    </div>
                    <Link to={'/'}>
                        <a className="btn btn-ghost normal-case text-xl">Social Events</a>
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-6">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end gap-6">

                    {googleUser &&
                        <div className="">
                            <img className="rounded-full w-[40px] h-[40px] mx-auto" src={googleUser.photoURL} alt="" />
                            <div>
                                <h2 className="text-center"><span className="font-semibold">Name:</span> {googleUser.displayName}</h2>
                            </div>
                        </div>
                    }

                    {googleUser ?
                        <button onClick={handleGoogleSignOut}
                            className="btn">Sign Out
                        </button>
                        :
                        <button onClick={handleGoogleSignIn}
                            className="btn"><FcGoogle />login with google
                        </button>
                    }
                    {user ?
                        <button onClick={handleSignOut} className="btn">Logout</button>
                        :
                        <Link to={'/login'}>
                            <button className="btn text-white bg-[#403F3F]">Login</button>
                        </Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;