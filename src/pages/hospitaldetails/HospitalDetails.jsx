import React, { useState } from "react";
import "./hospitaldetails.css"; // Ensure this path is correct
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate, Link } from "react-router-dom";
import hero1 from "../../assets/docs.png";
import hero2 from "../../assets/avatarm.svg";
import MainSecComp from "../../components/mainSecComp/MainSecComp";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { BallTriangle } from "react-loader-spinner";

// Sample Doctor Data (replace this with your actual data source)
const doctorData = [
  {
    name: "Prof. Ayman Ibrahim Bais",
    specialties:
      "Tuberculosis and adult respiratory system, sensitivity and adult immunity, sensitivity and children's immunity, respiratory sensitivity, chest and respiratory system",
    address:
      "The East Panorama Building, the third floor, administrative - tram station, Sidi Jaber Al -Sheikh, the highest national bank - Alexandria - Egypt",
    cityArea: "Alexandria - Sidi Jaber",
    imageUrl: hero2,
  },
  // Add other doctor objects here...
];

export default function HospitalDetails() {
  const navigate = useNavigate();
  const [activeTabs, setActiveTabs] = useState(
    Array(doctorData.length).fill("details")
  ); // Array to hold active tab state for each doctor
  const [type, setType] = useState("hospitals"); // State to control type, e.g., hospitals, doctors

  // Fetch data using React Query
  const { data, isLoading, error } = useQuery({
    queryKey: ["data", type],
    queryFn: () =>
      axios
        .get(`http://localhost:8000/api/data/${type}`)
        .then((res) => res.data),
    enabled: !!type, // Ensure type is available before making the request
  });

  const handleTabClick = (index, tab) => {
    const newActiveTabs = [...activeTabs]; // Create a copy of the active tabs array
    newActiveTabs[index] = tab; // Update the active tab for the specific doctor
    setActiveTabs(newActiveTabs); // Set the new active tabs array
  };

  // const handleBookingClick = () => {
  //   navigate("/appointmentbooking"); // Navigate to the booking page
  // };

  const handleTypeChange = (newType) => {
    setType(newType); // Change type when the user clicks a different nav button
  };

  // Render loading or error states for API call
  if (isLoading) return (
    <div className="absolute top-0 left-0 w-full h-[100vh] bg-white z-50 flex justify-center items-center">
      <BallTriangle
        height={100}
        width={100}
        radius={5}
        color="#317bc4"
        ariaLabel="ball-triangle-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
  if (error) return <div>Error fetching data...</div>;

  return (
    <>
      <MainSecComp
        hero={hero1}
        heading={`<p>Discover Hospitals,</p>
              <p>Book Instantly.</p>`}
      />

      <nav className="navbar navbar-expand-lg  max-w-[75rem] mx-auto py-3">
        <div className="container-fluid">
          <Link className="navbar-brand text-dark" to="#">
            <strong>Explore 💨</strong>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <ul className="navbar-nav ms-auto">
            {/* Hospitals Navigation Button */}
            <li className="nav-item">
              <button
                className={`nav-link mr-3 ${
                  type === "hospitals" ? "active" : ""
                }`}
                onClick={() => handleTypeChange("hospitals")}
              >
                Hospitals
              </button>
            </li>

            {/* Doctors Navigation Button */}
            <li className="nav-item">
              <button
                className={`nav-link mr-3 ${
                  type === "doctors" ? "active" : ""
                }`}
                onClick={() => handleTypeChange("doctors")}
              >
                Doctors
              </button>
            </li>

            {/* Add more nav items as needed */}
            <li className="nav-item">
              <button
                className={`nav-link mr-3 ${
                  type === "medical-centers" ? "active" : ""
                }`}
                onClick={() => handleTypeChange("medical-centers")}
              >
                Medical Centers
              </button>
            </li>
          </ul>

          {/* Search Bar */}
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="ourbtn p-2" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>

      <div className="max-w-[75rem] mx-auto py-5">
        <h2 className="text-center mb-5 text-4xl text-da font-semibold mt-5">
          Available {type.charAt(0).toUpperCase() + type.slice(1)}{" "}
          {/* Dynamic heading */}
        </h2>
        <div className="row sm:p-3">
          {data.map((doctor, index) => (
            <div key={index} className="col-lg-4 col-md-6 col-12 mb-4">
              <div className="card text-center doctor-card">
                <img
                  src={doctor.imageUrl}
                  className="card-img-top doctor-image"
                  alt={doctor.name}
                />
                <div className="card-header">
                  <h5 className="card-title py-3 text-da font-medium">
                    {doctor.name}
                  </h5>
                  <ul className="nav nav-tabs card-header-tabs">
                    <li className="nav-item">
                      <button
                        className={`nav-link ${
                          activeTabs[index] === "details" ? "active" : ""
                        }`}
                        onClick={() => handleTabClick(index, "details")}
                      >
                        Details
                      </button>
                    </li>
                    <li className="nav-item">
                      <button
                        className={`nav-link ${
                          activeTabs[index] === "contact" ? "active" : ""
                        }`}
                        onClick={() => handleTabClick(index, "contact")}
                      >
                        Contact
                      </button>
                    </li>
                    <li className="nav-item">
                      <button
                        className={`nav-link ${
                          activeTabs[index] === "location" ? "active" : ""
                        }`}
                        onClick={() => handleTabClick(index, "location")}
                      >
                        Location
                      </button>
                    </li>
                    <li className="nav-item">
                      <button
                        className={`nav-link ${
                          activeTabs[index] === "booking" ? "active" : ""
                        }`}
                        onClick={() => handleTabClick(index, "booking")}
                      >
                        Book
                      </button>
                    </li>
                  </ul>
                </div>
                <div className="card-body">
                  {activeTabs[index] === "details" && (
                    <p className="card-text">
                      <strong>Specialties:</strong> {doctor.specialties}
                    </p>
                  )}
                  {activeTabs[index] === "contact" && (
                    <p className="card-text">
                      <strong>Address:</strong> {doctor.address}
                    </p>
                  )}
                  {activeTabs[index] === "location" && (
                    <p className="card-text">
                      <strong>City/Area:</strong> {doctor.cityArea}
                    </p>
                  )}
                  {activeTabs[index] === "booking" && (
                    <button
                      className="btn btn-primary"
                      onClick={function () {
                        navigate(`/appointmentbooking/${doctor._id}`);
                      }}
                    >
                      Book Now
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
