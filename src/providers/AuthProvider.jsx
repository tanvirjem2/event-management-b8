import { createContext } from "react";
import { getAuth } from "firebase/auth";
import app from "../firebase/firebase.config";

// First Step create context
export const AuthContext = createContext(null)

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

const AuthProvider = () => {
    return (
        <div>

        </div>
    );
};

export default AuthProvider;