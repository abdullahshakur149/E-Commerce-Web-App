import React, { useEffect } from "react";
import Login from '../components/Login/Login'
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LoginPage = () => {
  const navigate = useNavigate()
  const { isAuthenticated } = useSelector((state) => state.user);

  useEffect(() => {
    if (isAuthenticated === true) {
      toast.error("You are already logged in")
      navigate("/");
    }
  }, [isAuthenticated]); // Add isAuthenticated to the dependency array

  return (
    <div>
      {isAuthenticated !== true && <Login />}
      <ToastContainer />
    </div>
  );
};

export default LoginPage;
