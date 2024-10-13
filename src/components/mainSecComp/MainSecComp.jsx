import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

export default function MainSecComp({ hero, heading }) {
    const [first, setfirst] = useState('')
  useEffect(() => {
    document.getElementById("head1").innerHTML = heading;
    setfirst(hero)
    
  }, [heading , hero]);
  return (
    <>
      <main>
        <div className=" md:h-[90vh] max-w-[75rem] mx-auto p-0 pt-20 pb-10 flex flex-col items-center md:flex-row justify-between">
          <div
            className={` py-3 h-full xl:w-1/2 flex flex-col justify-center  `}
          >
            <h3 className="text-pr text-lg font-normal underline mb-2 capitalize">
              Your Health, Our Priority
            </h3>
            <h1 className="text-da mb-5 text-5xl font-bold capitalize">
              <div id="head1"></div>
              <p className="font-normal w-3/4 text-sm text-gr mt-2">
                Connecting you to trusted healthcare providers quickly and
                conveniently.
              </p>
            </h1>
            <div id="headlink" className="flex w-full justify-start space-x-4">
              <Link to="/hospitallocator" className="button2 text-light">
                Find a Hospital
              </Link>
              <Link to="/appointmentbooking" className="button1">
                Book an Appointment
              </Link>
            </div>
          </div>
          <div className=" h-full">
            <img src={first} className={`w-full block scale-[1.15]`} alt="" />
          </div>
        </div>
      </main>
    </>
  );
}
