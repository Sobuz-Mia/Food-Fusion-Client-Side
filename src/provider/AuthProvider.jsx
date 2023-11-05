import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import auth from './../config/firebase.config';
import {createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, updateProfile } from "firebase/auth";

export const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const [user,setUser] = useState();
    const [isLoading,setIsLoading] = useState(true);


    const createUser = (email,password)=>{
        setIsLoading(true);
        return createUserWithEmailAndPassword(auth,email,password);
    }
    const loggedInUser = (email,password)=>{
        setIsLoading(true);
        return signInWithEmailAndPassword(auth,email,password);
    }
    const updateUser = (name,photo) =>{
        return updateProfile(auth.currentUser,{
            displayName:name,
            photoURL:photo
        })
    }
    const authInfo = {
        user,
        isLoading,
        createUser,
        loggedInUser,
        updateUser
    }
    useEffect(()=>{
        const subsCribe = onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser);
            setIsLoading(false)
        })

        return ()=>{
            subsCribe();
        }
    },[])
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};
AuthProvider.propTypes = {
    children:PropTypes.node
}
export default AuthProvider;