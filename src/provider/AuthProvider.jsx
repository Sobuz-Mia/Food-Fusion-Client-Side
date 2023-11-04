import { createContext, useState } from "react";
import PropTypes from 'prop-types';

export const AuthContext = createContext();
const AuthProvider = ({children}) => {
    const [user,setUser] = useState();
    const [isLoading,setIsLoading] = useState(true);


    const createUser = (email,password)=>{
        
    }

    const authInfo = {
        user,
        isLoading,
    }
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