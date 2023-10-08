import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";

// First Step create context
export const AuthContext = createContext(null)

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);


const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)

    // loading
    const [loading, setLoading] = useState(true)


    // Create user
    const createUser = (email, password) => {
        // setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // signIn
    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // Logout
    const logOut = () => {
        return signOut(auth)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoading(false)
        })
        return () => {
            unSubscribe();
        }
    }, [])


    // Fifth Step authInfo
    const authInfo = { user, createUser, logOut, signIn, loading }

    // Sixth Step authInfo value added to <AuthContext.Provider value = {authInfo}>

    return (
        <div>
            {/* Second Step create <AuthContext.Provider>  */}
            <AuthContext.Provider value={authInfo}>

                {/* Third Step use prop children */}
                {children}

            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;