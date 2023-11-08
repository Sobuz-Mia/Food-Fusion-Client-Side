import axios from "axios";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const instance = axios.create({
  baseURL: "https://community-food-sharing-server-side.vercel.app/api/v1",
  withCredentials: true,
});

const useAxios = () => {
  const { loggedOut } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    instance.interceptors.response.use(
      (res) => {
        return res;
      },
      (error) => {
        if (error.response.status === 401 || error.response.status === 403) {
          loggedOut()
            .then(() => {
              navigate("/login");
            })
            .catch((error) => {
              console.log(error);
            });
        }
      }
    );
  }, [loggedOut,navigate]);
  return instance;
};

export default useAxios;
