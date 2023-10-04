import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";

const auth = getAuth(app);
export const AuthContext = createContext();

const AuthProvider = ({children}) => {

    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(true);

    const createUser = (email,password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password);
    }

    const loggedIn = (email,password) =>{
        setLoading(true)
       return signInWithEmailAndPassword(auth,email,password)
    }
    const loggedOut = () =>{
        return signOut(auth)
    }
    useEffect(()=>{
        const unSubcribe = onAuthStateChanged(auth,user=>{
            setUser(user);
            setLoading(false)
        })
        return ()=>{
            unSubcribe()
        }
    },[])


   const AuthInfo = {createUser,loggedIn,loggedOut,user,loading}
    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;