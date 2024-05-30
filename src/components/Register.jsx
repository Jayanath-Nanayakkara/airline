import React from "react";
import { FaUser, FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  return (
    <div className="flex justify-center items-center min-h-screen bg-custom-image bg-cover bg-center ">
      <div className="min-w-96 text-white bg-gradient-to-r from-custom-hsla-1 via-custom-hsla-2 to-custom-hsla-3 p-1 rounded-custom-40 py-30 px-40 border-2 border-white">
        <form action="">
          <h1 className="text-3xl text-center">Register</h1>
          <div className="input-box">
            <input type="email" placeholder="Email" required />
            <MdEmail className="icon" />
          </div>
          <div className="input-box">
            <input type="text" placeholder="User Name" required />
            <FaUser className="icon" />
          </div>
          <div className="input-box">
            <input type="password" placeholder="Password" required />
            <FaLock className="icon" />
          </div>
          <button
            className=" w-full h-11 bg-white rounded-full text-slate-700 dark:md:hover:bg-fuchsia-600"
            type="submit"
          >
            Register
          </button>
          <div className="flex text-sm my-0.5 justify-center mt-6">
            <label>Do not have a account?</label>
            <a
              onClick={() => navigate("/")}
              className="text-white no-underline ml-2"
              href="#"
            >
              Login
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
