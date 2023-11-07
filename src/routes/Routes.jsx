import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ErrorPage from "../pages/ErrorPage";
import AvailavleFoods from "../pages/AvailavleFoods";
import FoodDetails from "../pages/Home/FoodDetails";
import AddFood from "../pages/AddFood";
import ManageFoods from "../pages/ManageFoods";
import ManageUpdate from "../components/ManageUpdate";
import FoodRequest from "../pages/FoodRequest";
import ManageSingleFood from "../pages/ManageSingleFood";
import PrivateRoute from "./PrivateRoute";

const createRoute = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "available-foods",
        element: <AvailavleFoods />,
      },
      {
        path: "/food-Details/:id",
        element: (
          <PrivateRoute>
            <FoodDetails />,
          </PrivateRoute>
        ),
      },
      {
        path: "/add-Food",
        element: (
          <PrivateRoute>
            <AddFood />
          </PrivateRoute>
        ),
      },
      {
        path: "/manage-foods",
        element: (
          <PrivateRoute>
            <ManageFoods />
          </PrivateRoute>
        ),
      },
      {
        path: "/manage-update/:id",
        element: (
          <PrivateRoute>
            <ManageUpdate />
          </PrivateRoute>
        ),
      },
      {
        path: "/food-request",
        element: (
          <PrivateRoute>
            <FoodRequest />
          </PrivateRoute>
        ),
      },
      {
        path: "/manage-page/:id",
        element: (
          <PrivateRoute>
            <ManageSingleFood />
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

export default createRoute;
