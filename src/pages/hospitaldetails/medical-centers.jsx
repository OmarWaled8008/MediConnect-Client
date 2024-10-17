import React, { useState } from "react";
import "./hospitaldetails.css"; // Ensure this path is correct
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate, Link, useParams } from "react-router-dom"; // Import Link
import hero2 from "../../assets/avatarm.svg";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import hero1 from "../../assets/docs.png";
import MainSecComp from "../../components/mainSecComp/MainSecComp";

const MedicalCenters = () => {
  const { type } = useParams();

  // Use useQuery to fetch data
  const { data, isLoading, error } = useQuery({
    queryKey: ["data", type],
    queryFn: () =>
      axios
        .get(`http://localhost:8000/api/data/medical`) // Updated endpoint for medical centers
        .then((res) => res.data),
  });

  const navigate = useNavigate();
  const [activeTabs, setActiveTabs] = useState(
    Array(data?.length || 0).fill("details")
  ); // Initialize active tabs based on data length

  const handleTabClick = (index, tab) => {
    const newActiveTabs = [...activeTabs]; // Create a copy of the active tabs array
    newActiveTabs[index] = tab; // Update the active tab for the specific center
    setActiveTabs(newActiveTabs); // Set the new active tabs array
  };

  const handleBookingClick = () => {
    navigate("/appointmentbooking"); // Change this path to your booking page route
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error fetching data: {error.message}</div>;
  }

  return (
    <>
      <MainSecComp
        hero={hero1}
        heading={`<p>Discover Medical Centers,</p>
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
                to="/hospitaldetails" // Update your path here
              >
                Hospitals
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className={`nav-link mr-3 ${type === "doctors" ? "active" : ""}`}
                to="/doctors" // Update your path here
              >
                Doctors
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className={`nav-link mr-3 ${type === "medical-centers" ? "active" : ""}`}
                to="/medical-centers" // Keep this path as it is
              >
                Medical Centers
              </Link>
            </li>
          </ul>

          <form className="d-flex" role="search" onSubmit={(e) => e.preventDefault()}>
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
        <h2 className="text-center mb-5 text-4xl text-da font-semibold mt-5 capitalize">
          Available Medical Centers
        </h2>
        <div className="row sm:p-3">
          {data?.map((center, index) => (
            <div key={center._id} className="col-lg-4 col-md-6 col-12 mb-4">
              <div className="card text-center doctor-card">
                <img
                  src={hero2} // Use center's image or default avatar
                  className="card-img-top doctor-image"
                  alt={center.name}
                />
                <div className="card-header">
                  <h5 className="card-title py-3 text-da font-medium">
                    {center.name}
                  </h5>
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
                        className={`nav-link ${activeTabs[index] === "contact" ? "active" : ""}`}
                        onClick={() => handleTabClick(index, "contact")}
                      >
                        Contact
                      </button>
                    </li>
                    <li className="nav-item">
                      <button
                        className={`nav-link ${activeTabs[index] === "location" ? "active" : ""}`}
                        onClick={() => handleTabClick(index, "location")}
                      >
                        Location
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
                      <strong>Services Offered:</strong> {center.services} {/* Update key to match API */}
                    </p>
                  )}
                  {activeTabs[index] === "contact" && (
                    <p className="card-text">
                      <strong>Email:</strong> {center.email}
                    </p>
                  )}
                  {activeTabs[index] === "location" && (
                    <p className="card-text">
                      <strong>Address:</strong> {center.address}<br />
                      <strong>City/Area:</strong> {center.city}
                    </p>
                  )}
                  {activeTabs[index] === "booking" && (
                    <button
                      className="btn btn-primary"
                      onClick={handleBookingClick}
                    >
                      Book Now{" "}
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
};

export default MedicalCenters;
