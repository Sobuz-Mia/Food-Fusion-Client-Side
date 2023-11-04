import { NavLink } from "react-router-dom";
import defaultUser from '../assets/images/defaultUser.jpg'
const Navbar = () => {
  const navLink = (
    <>
      <li>
        <NavLink
          to={"/"}
          className={(isActive) => (isActive ? "bg-primary" : "")}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to={"/available-food"}>Available Foods</NavLink>
      </li>
      <li>
        <NavLink to={"/add-food"}>Add Food</NavLink>
      </li>
      <li>
        <NavLink to={"/manage-food"}>Manage Foods</NavLink>
      </li>
      <li>
        <NavLink to={"/food-request"}>Food Request</NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar my-5">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLink}
          </ul>
        </div>
        <a className="normal-case text-xl font-extrabold">
          Food<span className="primary-color">Fusion</span>
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLink}</ul>
      </div>
      <div className="navbar-end">
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-20 rounded-full">
              <img src={defaultUser} />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <button>Logout</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
