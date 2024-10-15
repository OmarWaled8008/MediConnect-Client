import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setToken } from "../../store/tokenslice";
import hospitalImage from "../../assets/undraw_medicine_b-1-ol.svg";
import { motion } from "framer-motion";

function Login({ toggleView }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8000/api/patients/login",
        {
          email,
          password,
        }
      );
      console.log("Login successful");
      dispatch(setToken(response.data.token));
      localStorage.setItem("token", response.data.token);
      navigate("/home");
    } catch (error) {
      console.error("Login failed");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      className="flex justify-center items-center h-screen"
    >
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-lg relative">
        <img
          src={hospitalImage}
          alt="Decoration"
          className="absolute w-[40%] -top-16 -left-16"
        />
        <h2 className="text-center text-3xl font-extrabold text-da">Sign In</h2>

        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-da"
            >
              Email Address
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 w-full px-4 py-3 border rounded-lg shadow-sm focus:ring-pr focus:border-pr"
              placeholder="you@example.com"
              required
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-da"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 w-full px-4 py-3 border rounded-lg shadow-sm focus:ring-pr focus:border-pr"
              placeholder="••••••••"
              required
            />
          </div>

          <div>
            <button type="submit" className="ourbtn w-full">
              Sign In
            </button>
          </div>
        </form>

        <div className="text-center text-sm text-da">
          Don't have an account?{" "}
          <button onClick={toggleView} className="text-pr hover:underline">
            Sign Up
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export default Login;
