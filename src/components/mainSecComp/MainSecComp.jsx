import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import mainCss from "./mainSecComp.module.css";
import "../../assets/circlescatterhaikei.svg";

export default function MainSecComp({ heading, hero }) {
  const [first, setfirst] = useState("");
  useEffect(() => {
    document.getElementById("head1").innerHTML = heading;
    setfirst(hero);
  }, [heading, hero]);
  return (
    <>
      <main className={`${mainCss.mainSec}`}>
        <div className=" md:h-[90vh] max-w-[75rem] mx-auto px-3 pt-20 pb-10 flex flex-col items-center md:flex-row justify-between">
          <div
            className={` py-3 h-full xl:w-1/2 text-start  flex flex-col justify-center  `}
          >
            <h3 className="text-pr text-lg font-normal underline mb-2 capitalize">
              Your Health, Our Priority
            </h3>
            <h1 className="text-da mb-5 text-5xl font-bold capitalize">
              <div id="head1"></div>
              <p className="font-normal w-full md:w-3/4 text-sm text-white mt-2">
                Connecting you to trusted healthcare providers quickly and
                conveniently.
              </p>
            </h1>
            <div
              id="headlink"
              className="flex w-full justify-center md:justify-start space-x-4"
            >
              <Link to="/hospitallocator" className="ourbtn text-light">
                Find a Hospital
              </Link>
              <Link to="/appointmentbooking" className="ourbtn2">
                Book an Appointment
              </Link>
            </div>
          </div>
          <div className="h-full xl:w-1/2 flex flex-col justify-center">
            <img
              src={hero}
              className={`w-full block  scale-[1.15]`}
              alt=""
            />
          </div>
        </div>
      </main>
    </>
  );
}
