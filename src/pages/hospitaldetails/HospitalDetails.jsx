import React, { useState } from 'react'
import "./hospitaldetails.css"; // Ensure this path is correct
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate, Link } from "react-router-dom";
import hero1 from "../../assets/docs.png";
import hero2 from "../../assets/avatarm.svg";
import MainSecComp from "../../components/mainSecComp/MainSecComp";




const doctorData = [
  {
    name: "Prof. Ayman Ibrahim Bais",
    specialties:
      "Tuberculosis and adult respiratory system, sensitivity and adult immunity, sensitivity and children's immunity, respiratory sensitivity, chest and respiratory system",
    address:
      "The East Panorama Building, the third floor, administrative - tram station, Sidi Jaber Al -Sheikh, the highest national bank - Alexandria - Egypt",
    cityArea: "Alexandria - Sidi Jaber",
    imageUrl: hero2, // Use the specified image link
  },
  {
    name: "Tariq Reda",
    specialties: "Extreme feeding and feeding, slimming and feeding",
    address: "Zamalek: Taha Hussein, Zamalek",
    cityArea: "Cairo - Zamalek",
    imageUrl: hero2, // Use the specified image link
  },
  {
    name: "Nutrition expert Muhammad Ibrahim Al -Shafi’i",
    specialties: "Adult feeding and feeding, slimming and feeding",
    address: "Nasr City: Abbas Al -Akkad Street",
    cityArea: "Cairo - Nasr City",
    imageUrl: hero2, // Use the specified image link
  },
  {
    name: "Nutrition expert Muhammad Ibrahim Al -Shafi’i",
    specialties: "Extreme loss and feeding, slimming and feeding",
    address: "Engineers: The League of Arab States",
    cityArea: "Giza - Engineers",
    imageUrl: hero2, // Use the specified image link
  },
  {
    name: "Nutrition expert Muhammad Othman Muhammad",
    specialties:
      "Extreme feedback and feeding, child feeding and feeding, slimming and feeding",
    address: "Sheikh Zayed: Aquan Mall",
    cityArea: "Giza - Sheikh Zayed",
    imageUrl: hero2, // Use the specified image link
  },
];

export default function HospitalDetails() {
  const navigate = useNavigate();
  const [activeTabs, setActiveTabs] = useState(Array(doctorData.length).fill('details')); // Array to hold active tab state for each doctor

  const handleTabClick = (index, tab) => {
    const newActiveTabs = [...activeTabs]; // Create a copy of the active tabs array
    newActiveTabs[index] = tab; // Update the active tab for the specific doctor
    setActiveTabs(newActiveTabs); // Set the new active tabs array
  };
  const handleBookingClick = () => {
    navigate('/appointmentbooking'); // Change this path to your booking page route
  };


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
            <li className="nav-item">
              <Link className="nav-link mr-3" to="/hospitals">
                Hospitals
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link mr-3 active" aria-current="page" to="#">
                Doctors
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link mr-3" to="#">
                Pricing
              </Link>
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
        {/* <button className="btn btn-secondary mb-3" onClick={() => navigate(-1)}>
          Back
        </button> */}
        <h2 className="text-center mb-5 text-4xl text-da font-semibold mt-5">
          Available Doctors
        </h2>
        <div className="row sm:p-3">
          {doctorData.map((doctor, index) => (
            <div key={index} className=" col-lg-4 col-md-6 col-12 mb-4">
              <div className="card text-center doctor-card">
                <img
                  src={doctor.imageUrl} 
                  className="card-img-top doctor-image"
                  alt={doctor.name}
                />
                <div className="card-header">
                  <h5 className="card-title py-3 text-da font-medium">{doctor.name}</h5>
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
                      onClick={handleBookingClick}
                    >
                      Book 4 Now{" "}
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
