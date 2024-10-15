import React, { useState } from "react";
import SignupForm from "../signup/Signup";
import Login from "../login/Login";

export default function RegisterLS() {
  const [isLogin, setIsLogin] = useState(true);

  const toggleView = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div>
      {isLogin ? (
        <Login toggleView={toggleView} />
      ) : (
        <SignupForm toggleView={toggleView} />
      )}
    </div>
  );
}
