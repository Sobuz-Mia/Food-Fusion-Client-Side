import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import auth from "./../config/firebase.config";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import useAxios from "./../hooks/useAxios";
import axios from "axios";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const provider = new GoogleAuthProvider();

  const createUser = (email, password) => {
    setIsLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const loggedInUser = (email, password) => {
    setIsLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const updateUser = (name, photo) => {
    setIsLoading(true);
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };
  const googleLogin = () => {
    setIsLoading(true);
    return signInWithPopup(auth, provider);
  };
  const loggedOut = () => {
    setIsLoading(true);
    return signOut(auth);
  };
  useEffect(() => {
    const subsCribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setIsLoading(false);
      const logInUser = { email: user?.email };
      console.log(logInUser);
      if (user) {
        axios
          .post("https://community-food-sharing-server-side.vercel.app/api/vi/jwt", logInUser, {
            withCredentials: true,
          })
          .then((res) => {
            console.log(res.data);
          });
      } else {
        axios
          .post("https://community-food-sharing-server-side.vercel.app/api/vi/logOut", logInUser, {
            withCredentials: true,
          })
          .then((res) => {
            console.log(res.data);
          });
      }
    });

    return () => {
      subsCribe();
    };
  }, []);

  const authInfo = {
    user,
    isLoading,
    createUser,
    loggedInUser,
    updateUser,
    loggedOut,
    googleLogin,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};
AuthProvider.propTypes = {
  children: PropTypes.node,
};
export default AuthProvider;
