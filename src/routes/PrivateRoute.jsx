import { Navigate, useLocation } from 'react-router-dom';
import useAuth from './../hooks/useAuth';
const PrivateRoute = ({children}) => {
    const location = useLocation();
    const {user,isLoading} = useAuth();
    console.log(isLoading);
    if (isLoading)
    return (
      <div className="w-24 mx-auto flex items-center h-screen">
        <span className="loading loading-spinner text-secondary w-full"></span>
      </div>
    );
    if(user){
        return children
    }
    return <Navigate state={location.pathname} to={"/login"}></Navigate>;
};

export default PrivateRoute;