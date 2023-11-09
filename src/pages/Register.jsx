import { Link, useNavigate } from "react-router-dom";
import userLogo from "../assets/images/userLogin.jpg";
import useAuth from "../hooks/useAuth";
import Swal from "sweetalert2";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const Register = () => {
  const {updateUser } = useAuth();
  const {createUser} = useContext(AuthContext)
  const regEx = /^(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}[\]:;<>,.?~\\-]).{6,}$/;
  const navigate = useNavigate();
  const handleCreateUser = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photoUrl = form.photoUrl.value;
    if (!regEx.test(password)) {
      Swal.fire({
        icon: "error",
        text: "Password must be 6 characters with one capital letter and special characters",
      });
    } else{
      try {
        const result = await createUser(email, password);
        console.log(result.user);
    
        await updateUser(name, photoUrl);
    
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Your account created successfully",
          showConfirmButton: false,
          timer: 1500,
        });
    
        navigate('/');
      } catch (error) {
        if (error) {
          Swal.fire({
            icon: "error",
            text: "Already exist email/something wrong",
          });
        }
      }
    }
   
  };
  
  
  return (
    <div className="hero min-h-screen bg-base-200 my-3 rounded-md">
      <div className="hero-content flex-col lg:flex-row">
        <div className="text-center lg:text-left mr-10">
          <img src={userLogo} alt="" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <h2 className="text-4xl font-semibold text-center pt-2">Register</h2>
          <form onSubmit={handleCreateUser} className="card-body">
            <div className="form-control">
              <label className="block mb-2 text-sm font-medium">
                Your name
              </label>
              <input
                type="text"
                name="name"
                className="bg-gray-50 border border-gray-300 text-sm rounded-lg block w-full p-2.5 "
                placeholder="Your name"
                required
              />
            </div>
            <div className="form-control">
              <label className="block mb-2 text-sm font-medium">
                Your email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-sm rounded-lg block w-full p-2.5 "
                placeholder="name@gmail.com"
                required
              />
            </div>
            <div className="form-control">
              <label className="block mb-2 text-sm font-medium">
                Your Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                className="bg-gray-50 border border-gray-300 text-sm rounded-lg block w-full p-2.5 "
                placeholder="******"
                required
              />
            </div>
            <div className="form-control">
              <label className="block mb-2 text-sm font-medium">
                Your Profile picture
              </label>
              <input
                type="text"
                name="photoUrl"
                className="bg-gray-50 border border-gray-300 text-sm rounded-lg block w-full p-2.5 "
                placeholder="http//:photo.url.com"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn text-white normal-case bg-[#FF3811]">
                Register
              </button>
            </div>
  
            <div className="text-sm font-medium text-gray-500 flex justify-center">
            have a already account?{" "}
              <Link
                to={"/login"}
                className="text-blue-700 hover:underline dark:text-blue-500"
              >
                Login
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
