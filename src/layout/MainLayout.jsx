import { Outlet } from "react-router-dom";
import Navbar from "../pages/Navbar";

const MainLayout = () => {
    return (
        <div className="max-w-6xl mx-auto">
            <Navbar/>
            <Outlet/>
        </div>
    );
};

export default MainLayout;