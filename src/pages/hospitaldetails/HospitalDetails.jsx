import React, { useState } from "react";
import "./hospitaldetails.css"; // Ensure this path is correct
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate, Link } from "react-router-dom";
import hero1 from "../../assets/docs.png";
import hero2 from "../../assets/avatarm.svg";
import MainSecComp from "../../components/mainSecComp/MainSecComp";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

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
    Array(doctorData.length).fill("details") // Default active tab set to "details"
  );
  const [type, setType] = useState("hospitals"); // State to control type, e.g., hospitals, doctors
  const [searchQuery, setSearchQuery] = useState(""); 
  // Fetch data using React Query
  const { data, isLoading, error } = useQuery({
    queryKey: ["data", type],
    queryFn: () =>
      axios
        .get(`http://localhost:8000/api/data/hospitals`)
        .then((res) => res.data),
    enabled: !!type, // Ensure type is available before making the request
  });

  console.log(data);
  const handleTabClick = (index, tab) => {
    const newActiveTabs = [...activeTabs]; // Create a copy of the active tabs array
    newActiveTabs[index] = tab; // Update the active tab for the specific doctor
    setActiveTabs(newActiveTabs); // Set the new active tabs array
  };

  const handleBookingClick = () => {
    navigate("/appointmentbooking"); // Navigate to the booking page
  };

  const handleTypeChange = (newType) => {
    setType(newType); // Change type when the user clicks a different nav button
  };

  // Render loading or error states for API call
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching data...</div>;

  return (
    <>
      <MainSecComp
        hero={hero1}
        heading={`<p>Discover Hospitals,</p>
              <p>Book Instantly.</p>`}
      />

<nav className="navbar navbar-expand-lg max-w-[75rem] mx-auto py-3">
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
              <Link
                className={`nav-link mr-3 ${type === "hospitals" ? "active" : ""}`}
                onClick={() => handleTypeChange("hospitals")}
                to="/hospitaldetails" // Add your path here
              >
                Hospitals
              </Link>
            </li>

            {/* Doctors Navigation Button */}
            <li className="nav-item">
              <Link
                className={`nav-link mr-3 ${type === "doctors" ? "active" : ""}`}
                onClick={() => handleTypeChange("doctors")}
                to="/hospitals" // Add your path here
              >
                Doctors
              </Link>
            </li>

            {/* Add more nav items as needed */}
            <li className="nav-item">
              <Link
                className={`nav-link mr-3 ${type === "medical-centers" ? "active" : ""}`}
                onClick={() => handleTypeChange("medical-centers")}
                to="/medicalCenters" // Add your path here
              >
                Medical Centers
              </Link>
            </li>
          </ul>

          {/* Search Bar */}
          <form className="d-flex" role="search" onSubmit={(e) => e.preventDefault()}>
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)} // Update search query on input change
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
          {data.map((hospitals, index) => (
            <div key={index} className="col-lg-4 col-md-6 col-12 mb-4">
              <div className="card text-center doctor-card">
                <img
                  src={hospitals.imageUrl}
                  className="card-img-top doctor-image"
                  alt={hospitals.name}
                />
                <div className="card-header">
                  <h5 className="card-title py-3 text-da font-medium">
                    {hospitals.name}
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
                          activeTabs[index] === "info" ? "active" : ""
                        }`}
                        onClick={() => handleTabClick(index, "info")}
                      >
                        Info
                      </button>
                    </li>
                    <li className="nav-item">
                      <button
                        className={`nav-link ${
                          activeTabs[index] === "Contact" ? "active" : ""
                        }`}
                        onClick={() => handleTabClick(index, "Contact")}
                      >
                        Contact
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
                      <strong>Specialties:</strong> has all the specializations<br></br>
                      <strong>Address:</strong> {hospitals.address}
                    </p>
                  )}
                  {activeTabs[index] === "info" && (
                    <p className="card-text">
                      <strong>Info:</strong> {hospitals.hospital_info}
                    </p>
                  )}
                  {activeTabs[index] === "Contact" && (
                    <p className="card-text">
                      <strong>Contact:</strong> {hospitals.contactInfo}<br></br>
                      <strong>telephone:</strong> {hospitals.telephone}<br></br>
                      <strong>city:</strong> {hospitals.city}
                    </p>
                  )}
                  {activeTabs[index] === "booking" && (
                    <button
                      className="btn btn-primary"
                      onClick={handleBookingClick}
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
