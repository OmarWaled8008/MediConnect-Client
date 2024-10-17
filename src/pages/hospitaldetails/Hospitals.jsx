import React, { useState } from "react";
import "./hospitaldetails.css"; // Ensure this path is correct
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate, Link, useParams } from "react-router-dom"; // Import Link
import hero2 from "../../assets/avatarm.svg";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const cardData = [
  // Your static card data goes here...
];

const getStarRating = (rating) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 >= 0.5;
  let stars = "⭐".repeat(fullStars);

  if (halfStar) {
    stars += "⭐️"; // Adding the half star
  }

  stars = stars.substring(0, 5); // Ensure the total stars do not exceed 5
  return stars;
};

const HospitalDetails = () => {
  const { type } = useParams();

  // Use useQuery to fetch data
  const { data, isLoading, error } = useQuery({
    queryKey: ["data", type],
    queryFn: () =>
      axios
        .get(`http://localhost:8000/api/data/${type}`)
        .then((res) => res.data),
  });

  const navigate = useNavigate();
  const [activeTabs, setActiveTabs] = useState(
    Array(cardData.length).fill("details")
  ); // Track the active tab for each card

  const handleTabClick = (index, tab) => {
    const newActiveTabs = [...activeTabs]; // Create a copy of the active tabs array
    newActiveTabs[index] = tab; // Update the active tab for the specific doctor
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
      <div className="max-w-[75rem] mx-auto py-5">
        <h2 className="text-center mb-5 text-4xl text-da font-semibold mt-5 capitalize">
          Available {type}
        </h2>
        <div className="row sm:p-3">
          {data?.map((doctor, index) => (
            <div key={index} className=" col-lg-4 col-md-6 col-12 mb-4">
              <div className="card text-center doctor-card">
                <img
                  src={hero2}
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

export default HospitalDetails;
