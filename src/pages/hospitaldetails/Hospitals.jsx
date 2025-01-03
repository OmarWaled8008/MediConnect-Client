import React, { useState } from "react";
import "./hospitaldetails.css"; // Ensure this path is correct
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate, Link, useParams } from "react-router-dom"; // Import Link
import hero2 from "../../assets/portrait-3d-male-doctor (1).jpg";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import hero1 from "../../assets/docs.png";
import MainSecComp from "../../components/mainSecComp/MainSecComp";
import { BallTriangle } from "react-loader-spinner";
const HospitalDetails = () => {
  const { type } = useParams();
  const navigate = useNavigate();

  // Fetch doctors data using React Query
  const { data, isLoading, error } = useQuery({
    queryKey: ["doctors", type],
    queryFn: () =>
      axios
        .get(`http://localhost:8000/api/data/doctors`)
        .then((res) => res.data),
  });

  // Initialize active tabs based on the number of doctors available
  const [activeTabs, setActiveTabs] = useState(
    Array(data?.length || 0).fill("details")
  );

  const handleTabClick = (index, tab) => {
    setActiveTabs((prevTabs) => ({
      ...prevTabs,
      [index]: tab,
    }));
  };

 
  // if (isLoading) {
  //   return <div>Loading...</div>;
  // }

  // if (error) {
  //   return <div>Error fetching data: {error.message}</div>;
  // }
  if (isLoading)
    return (
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
 if (error) {
   return (
     <div className="h-[50vh] bg-gray-900 text-white flex justify-center items-center font-bold text-3xl">
       Error loading profile
     </div>
   );
 }

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
              // value={searchQuery}
              // onChange={(e) => setSearchQuery(e.target.value)} // Update search query on input change
            />
            <button className="ourbtn p-2" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>

      <div className="max-w-[75rem] mx-auto py-5">
        <h2 className="text-center mb-5 text-4xl text-da font-semibold mt-5 capitalize">
          Available Doctors
        </h2>
        <div className="row sm:p-3">
          {data?.map((doctor, index) => (
            <div key={doctor._id} className="col-lg-4 col-md-6 col-12 mb-4">
              <div className="card text-center doctor-card">
                <img
                  src={hero2} // Use doctor's image or default avatar
                  className="card-img-top doctor-image"
                   alt={doctor.name}
                />
                {/* <div className="card-header">
                  <h5 className="card-title py-3 text-da font-medium">
                    {doctor.name}
                  </h5>
                  <ul className="nav nav-tabs card-header-tabs">
                    {["details", "contact", "location", "booking"].map((tab) => (
                      <li className="nav-item" key={tab}>
                        <button
                          className={`nav-link ${activeTabs[index] === tab ? "active" : ""}`}
                          onClick={() => handleTabClick(index, tab)}
                        >
                          {tab.charAt(0).toUpperCase() + tab.slice(1)}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div> */}
                  <div className="card-header">
                  <h5 className="card-title py-3 text-da font-medium">{doctor.name}</h5>
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
                      <strong>Specialties:</strong> {doctor.services}
                      
                    </p>
                  )}
                  {activeTabs[index] === "contact" && (
                    <p className="card-text">
                      <strong>Email:</strong> {doctor.email}
                    </p>
                  )}
                  {activeTabs[index] === "location" && (
                    <p className="card-text">
                      <strong>Address:</strong> {doctor.address}<br />
                      <strong>City/Area:</strong> {doctor.city}
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
};

export default HospitalDetails;