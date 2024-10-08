import React from "react";
// import notCSS from "./notfound.module.css";
// import { Link } from "react-router-dom";
import notsvg from "../../assets/404.svg";
export default function Notfound() {
  return (
    <>
      <div className="bg-c2  w-full h-[100vh] flex justify-center p-3 m-0">
        <div className="w-full sm:w-1/2 h-[100%] ">
          <img src={notsvg} alt="404" className="w-full mb-3" />
          <div className="text-da text-center ">
            <h1 className="text-4xl mb-3">Page Not Found</h1>
            <p className="text-2xl text-white">
              The page you are looking for might have been removed had its name
              changed or is temporarily unavailable.
            </p>
          </div>
        </div>
        
      </div>
    </>
  );
}
