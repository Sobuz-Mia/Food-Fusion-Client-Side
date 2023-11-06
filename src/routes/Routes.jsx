import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ErrorPage from "../pages/ErrorPage";
import AvailavleFoods from "../pages/AvailavleFoods";
import FoodDetails from "../pages/Home/FoodDetails";
import AddFood from "../pages/AddFood";

const createRoute = createBrowserRouter([
    {
        path:'/',
        element:<MainLayout/>,
        errorElement:<ErrorPage/>,
        children:[
            {
                path:'/',
                element:<Home/>
            },
            {
                path:'available-foods',
                element:<AvailavleFoods/>
            },
            {
                path:'/food-Details/:id',
                element:<FoodDetails/>
            },
            {
                path:'/add-Food',
                element:<AddFood/>
            }
        ]
    },
    {
        path:'/login',
        element:<Login/>
    },
    {
        path:'/register',
        element:<Register/>
    }
])


export default createRoute;