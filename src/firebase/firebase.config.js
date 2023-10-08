// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD4nHQgmHxc76JP8SgB3TIP0rHeYTALxV4",
    authDomain: "react-event-management-b8.firebaseapp.com",
    projectId: "react-event-management-b8",
    storageBucket: "react-event-management-b8.appspot.com",
    messagingSenderId: "732975283129",
    appId: "1:732975283129:web:9bf60c49302f9899545468"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;