import React, { useState } from "react";
import "./hospitaldetails.css"; // Ensure this path is correct
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate, Link } from "react-router-dom";
import hero1 from "../../assets/docs.png";
import hero2 from "../../assets/mm.jpg";
import MainSecComp from "../../components/mainSecComp/MainSecComp";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export default function MedicalCenters() {
  const navigate = useNavigate();
  const [type, setType] = useState("medical-centers");
  const [searchQuery, setSearchQuery] = useState("");

  // Fetch data using React Query
  const { data, isLoading, error } = useQuery({
    queryKey: ["data", type],
    queryFn: () =>
      axios
        .get(`http://localhost:8000/api/data/medical-centers`)
        .then((res) => res.data),
    enabled: !!type, // Ensure type is available before making the request
  });

  // Initialize activeTabs to have all tabs default to 'details'
  const [activeTabs, setActiveTabs] = useState(
    data?.map(() => "details") || []
  );

  const handleTabClick = (index, tab) => {
    setActiveTabs((prevTabs) => ({
      ...prevTabs,
      [index]: tab,
    }));
  };

 

  const handleTypeChange = (newType) => {
    setType(newType);
  };

  // Render loading or error states for API call
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching data...</div>;

  return (
    <>
      <MainSecComp
        hero={hero1}
        heading={`<p>Discover Medical Centers,</p><p>Book Instantly.</p>`}
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
                // onClick={() => handleTypeChange("hospitals")}
                to="/hospitaldetails" // Add your path here
              >
                Hospitals
              </Link>
            </li>

            {/* Doctors Navigation Button */}
            <li className="nav-item">
              <Link
                className={`nav-link mr-3 ${type === "doctors" ? "active" : ""}`}
                // onClick={() => handleTypeChange("doctors")}
                to="/hospitals" // Add your path here
              >
                Doctors
              </Link>
            </li>

            {/* Add more nav items as needed */}
            <li className="nav-item">
              <Link
                className={`nav-link mr-3 ${type === "medical-centers" ? "active" : ""}`}
                // onClick={() => handleTypeChange("medical-centers")}
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
          Available {type.charAt(0).toUpperCase() + type.slice(1)}
        </h2>
        <div className="row sm:p-3">
          {data?.map((center, index) => (
            <div key={index} className="col-lg-4 col-md-6 col-12 mb-4">
              <div className="card text-center doctor-card">
                <img
                  src={hero2}
                  className="card-img-top doctor-image"
                  alt={center.name}
                />
                <div className="card-header">
                  <h5 className="card-title py-3 text-da font-medium">{center.name}</h5>
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
                      <strong>Location:</strong> {center.city}<br />
                      <strong>Address:</strong> {center.address || "N/A"}<br />
                      <strong>Detail Page:</strong> <a href={center.detailPageUrl} target="_blank" rel="noopener noreferrer">View More</a>
                    </p>
                  )}
                  {activeTabs[index] === "services" && (
                    <p className="card-text">
                      <strong>Services:</strong> {center.services || "N/A"}
                    </p>
                  )}
                  {activeTabs[index] === "contact" && (
                    <p className="card-text">
                      <strong>Email:</strong> {center.email || "N/A"}<br />
                      <strong>Telephone:</strong> {center.telephone || "N/A"}<br />
                      <strong>Contact Info:</strong> {center.contactInfo || "N/A"}
                    </p>
                  )}
                  {activeTabs[index] === "booking" && (
                    <button
                      className="btn btn-primary"
                      onClick={function () {
                        navigate(`/appointmentbooking/${center._id}`);
                      }} //
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
