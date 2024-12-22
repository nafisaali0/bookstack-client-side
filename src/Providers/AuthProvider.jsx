import PropTypes from 'prop-types';
import auth from './../FireBase/firebase.config';
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useState } from "react";
import { useEffect } from "react";


// export const AuthContext = createContext(null)
export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {

    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState(null)

    // add googleAuth
    const provider = new GoogleAuthProvider();

    const googleLogIn = () => {
        setLoading(true)
        return signInWithPopup(auth, provider)
    }
    //email/password authentication
    const signUpUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    //user have or not
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setLoading(false)
            setUser(currentUser)
        })
        return () => {
            unSubscribe();
        }
    }, [])

    // logOut user
    const logOut = () => {
        return signOut(auth)
    }
    const userInfo = {
        googleLogIn,
        signUpUser,
        signInUser,
        loading,
        user,
        logOut
    }
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node
};

export default AuthProvider;