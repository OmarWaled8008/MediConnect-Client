// import React, { useState } from 'react';
// // import { GoogleLogin } from 'react-google-login';
// import './login.css'; // Import your custom CSS file if you have one
// import { GoogleLogin } from '@react-oauth/google';

// export default function Login() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleGoogleSuccess = (response) => {
//     console.log('Google login successful:', response.profileObj);
//     // Handle Google login success (e.g., store user info, redirect, etc.)
//   };

//   const handleGoogleFailure = (response) => {
//     console.error('Google login error:', response);
//     // Handle Google login error
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission (e.g., authentication logic)
//     console.log('Login submitted:', { email, password });
//   };

//   return (
//     <div className="container d-flex justify-content-center align-items-center vh-100 bg-dark text-light">
//       <div className="card p-4" style={{ maxWidth: '400px', width: '100%' }}>
//         <h2 className="text-center mb-4">Login</h2>

//         {/* Google Sign-In */}
//         <div className="mb-4">
//           <GoogleLogin
//             clientId="YOUR_GOOGLE_CLIENT_ID" // Replace with your actual client ID
//             buttonText="Login with Google"
//             onSuccess={handleGoogleSuccess}
//             onError={handleGoogleFailure}
//             cookiePolicy={'single_host_origin'}
//             className="btn btn-outline-light w-100"
//           />
//         </div>

//         <hr className="my-4" />

//         {/* Login Form */}
//         <form onSubmit={handleSubmit}>
//           <div className="mb-3">
//             <label htmlFor="email" className="form-label">Email address</label>
//             <input
//               type="email"
//               className="form-control"
//               id="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//           </div>
//           <div className="mb-3">
//             <label htmlFor="password" className="form-label">Password</label>
//             <input
//               type="password"
//               className="form-control"
//               id="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//           </div>
//           <button type="submit" className="btn btn-primary w-100">Login</button>
//         </form>
//       </div>
//     </div>
//   );
// }
import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from 'axios';
import hospitalImage from "../../assets/hospital.jpg";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    // try{
    //     const response = await axios.post('http://localhost:5000',{
    //         email,password
    //     });
    //     if (response.data.token){
    //         const token = response.data.token;
    //         // Handle token
    //     }
    // } catch(error) {
    //     console.error('Login failed');
    // }
  };

  return (
    <div className="flex h-screen">
      <div className="hidden lg:flex w-1/2 bg-gray-100">
        <img
          src={hospitalImage}
          alt="Sign-in"
          className="object-cover w-full h-full"
        />
      </div>

      {/* Right side with login form */}
      <div className="flex flex-col justify-center items-center w-full lg:w-1/2 px-8 lg:px-16 bg-white">
        <h2 className="text-4xl font-extrabold mb-6 text-blue-400">
          Welcome Back!
        </h2>
        <p className="mb-8 text-gray-500 text-center text-sm">
          Please sign in to your account to continue
        </p>

        <form onSubmit={handleLogin} className="w-full max-w-md">
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-semibold mb-2">
              Email Address
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="you@gmail.com"
              required
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-semibold mb-2">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="••••••••"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-400 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-200 ease-in-out font-semibold"
          >
            Sign In
          </button>
        </form>

        <div className="mt-6 text-sm text-gray-500">
          Don't have an account?{" "}
          <a href="/Signup" className="text-blue-400 hover:underline">
            Sign Up
          </a>
        </div>
      </div>
    </div>
  );
}

export default Login;
