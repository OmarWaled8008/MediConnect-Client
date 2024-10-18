import React, { useState } from "react";
import "./hospitaldetails.css"; // Ensure this path is correct
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate, Link } from "react-router-dom";
import hero1 from "../../assets/docs.png";
import hero2 from "../../assets/hh.jpg"; // Placeholder for hospital image
import MainSecComp from "../../components/mainSecComp/MainSecComp";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export default function HospitalDetails() {
  const navigate = useNavigate();
  const [activeTabs, setActiveTabs] = useState([]); // Active tabs for each hospital
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
    newActiveTabs[index] = tab; // Update the active tab for the specific hospital
    setActiveTabs(newActiveTabs); // Set the new active tabs array
  };

  const handleBookingClick = (id) => {
    // navigate(`/appointmentbooking/${id}`); // Navigate to the booking page with the hospital ID
     navigate(`/appointmentbooking`);
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
            <li className="nav-item">
              <Link
                className={`nav-link mr-3 ${type === "hospitals" ? "active" : ""}`}
                to="/hospitaldetails"
              >
                Hospitals
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link mr-3 ${type === "doctors" ? "active" : ""}`}
                to="/hospitals"
              >
                Doctors
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link mr-3 ${type === "medical-centers" ? "active" : ""}`}
                to="/medicalCenters"
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
        </h2>
        <div className="row sm:p-3">
          {data.map((hospital, index) => (
            <div key={hospital._id} className="col-lg-4 col-md-6 col-12 mb-4">
              <div className="card text-center doctor-card">
                <img
                  src={hero2} // Fallback to hero2 if photos are not available
                  className="card-img-top doctor-image"
                  alt={hospital.name}
                />
                <div className="card-header">
                  <h5 className="card-title py-3 text-da font-medium">{hospital.name}</h5>
                  <ul className="nav nav-tabs card-header-tabs">
                    <li className="nav-item">
                      <button
                        className={`nav-link ${activeTabs[index] === "details" ? "active" : ""}`}
                        onClick={() => handleTabClick(index, "details")}
                      >
                        Details
                      </button>
                    </li>
                    <li className="nav-item">
                      <button
                        className={`nav-link ${activeTabs[index] === "services" ? "active" : ""}`}
                        onClick={() => handleTabClick(index, "services")}
                      >
                        Services
                      </button>
                    </li>
                    <li className="nav-item">
                      <button
                        className={`nav-link ${activeTabs[index] === "contact" ? "active" : ""}`}
                        onClick={() => handleTabClick(index, "contact")}
                      >
                        Contact
                      </button>
                    </li>
                    <li className="nav-item">
                      <button
                        className={`nav-link ${activeTabs[index] === "booking" ? "active" : ""}`}
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
                      <strong>Description: All specializations are available</strong> <br />
                      <strong>Address:</strong> {hospital.address}<br />
                      <strong>City:</strong> {hospital.city}
                    </p>
                  )}
                  {activeTabs[index] === "services" && (
                    <p className="card-text">
                      <strong>Services:</strong> {hospital.hospital_info || "N/A"}
                    </p>
                  )}
                  {activeTabs[index] === "contact" && (
                    <p className="card-text">
                      <strong>Email:</strong> {hospital.email}<br />
                      <strong>Telephone:</strong> {hospital.telephone}<br />
                      <strong>Contact Info:</strong> {hospital.contactInfo}
                    </p>
                  )}
                  {activeTabs[index] === "booking" && (
                    <button
                      className="btn btn-primary"
                      onClick={() => handleBookingClick(hospital._id)} // Pass hospital ID to the booking handler
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
