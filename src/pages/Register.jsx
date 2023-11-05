import { Link, useNavigate } from "react-router-dom";
import userLogo from "../assets/images/userLogin.jpg";
import useAuth from "../hooks/useAuth";
import { BiLogoFacebookCircle } from "react-icons/bi";
import { BiLogoLinkedin } from "react-icons/bi";
import { FcGoogle } from "react-icons/fc";
import Swal from "sweetalert2";

const Register = () => {
  const { createUser,updateUser } = useAuth();
  const navigate = useNavigate();
  const handleCreateUser = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photoUrl = form.photoUrl.value;
    createUser(email,password)
    .then(result=>{
        console.log(result.user)
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Your account create successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        updateUser(name,photoUrl)
        .then(()=>{
            navigate('/');
        })
        .catch((err)=>{
          if(err){
            Swal.fire({
              icon: "error",
              text: "Already exist email/ something wrong",
            });
          }
        })
    })
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
                Login
              </button>
            </div>
            <p className="text-center my-4"> Or login with</p>
            <div className="flex gap-5 justify-center mb-3">
              <button className=" w-10 h-10 rounded-full bg-[#F5F5F8]">
                <BiLogoFacebookCircle className="text-3xl text-[#3B5998] ml-1" />
              </button>
              <button className=" w-10 h-10 rounded-full bg-[#F5F5F8]">
                <BiLogoLinkedin className="text-3xl text-[#0A66C2] ml-1" />
              </button>
              <button className=" w-10 h-10 rounded-full bg-[#F5F5F8]">
                <FcGoogle className="text-3xl text-[#3B5998] ml-1" />
              </button>
            </div>
            <div className="text-sm font-medium text-gray-500 flex justify-center">
              Do not have an account?{" "}
              <Link
                to={"/login"}
                className="text-blue-700 hover:underline dark:text-blue-500"
              >
                Create Account
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
