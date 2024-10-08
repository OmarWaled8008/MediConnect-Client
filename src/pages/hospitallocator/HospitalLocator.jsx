import React from "react";
import "./hospitallocator.css";
import hero1 from "../../assets/home-m4.png";
import "leaflet/dist/leaflet.css";
import MainSecComp from "../../components/mainSecComp/MainSecComp";

export default function HospitalLocator() {
  return (
    <>
      <MainSecComp
        hero={hero1}
        heading={`<p>Find Your Nearest Hospital,</p>
              <p>Book with Ease.</p>`}
      />
    </>
  );
}
