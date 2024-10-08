import React, { useState, useEffect } from "react";

export default function UserProfile() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // Fetch user data from localStorage
    const storedData = localStorage.getItem("userData");
    if (storedData) {
      setUserData(JSON.parse(storedData));
    }
  }, []);

  if (!userData) {
    return (
      <div className="h-[50vh] bg-dark text-light flex justify-center items-center font-bold text-3xl">
        Loading...
      </div>
    );
  }

  return (
    <div className="h-[100vh] bg-dark text-light p-5">
      <h2 className="text-center mb-4 text-3xl">User Profile</h2>
      <div className="container">
        <div className="row mb-3">
          <div className="col-md-6">
            <strong>Name:</strong> {userData.name}
          </div>
          <div className="col-md-6">
            <strong>Email:</strong> {userData.email}
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-md-6">
            <strong>Birthdate:</strong> {userData.birthdate}
          </div>
          <div className="col-md-6">
            <strong>Gender:</strong> {userData.gender}
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-md-6">
            <strong>Blood Type:</strong> {userData.bloodType}
          </div>
          <div className="col-md-6">
            <strong>Medical History:</strong> {userData.medicalHistory}
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-md-6">
            <strong>Allergies:</strong> {userData.allergies}
          </div>
          <div className="col-md-6">
            <strong>Current Medications:</strong> {userData.currentMedications}
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-md-6">
            <strong>Prior Surgeries:</strong> {userData.priorSurgeries}
          </div>
          <div className="col-md-6">
            <strong>Health Insurance:</strong>{" "}
            {userData.hasInsurance ? "Yes" : "No"}
          </div>
        </div>
        {userData.hasInsurance && (
          <div className="row mb-3">
            <div className="col-md-6">
              <strong>Insurance Provider:</strong> {userData.insuranceProvider}
            </div>
            <div className="col-md-6">
              {userData.insurancePhoto && (
                <div>
                  <strong>Insurance Card:</strong>
                  <img
                    src={URL.createObjectURL(userData.insurancePhoto)}
                    alt="Insurance Card"
                    className="img-thumbnail mt-2"
                    style={{ maxWidth: "200px" }}
                  />
                </div>
              )}
            </div>
          </div>
        )}
        <div className="row mb-3">
          <div className="col-md-6">
            <strong>Promo Code:</strong> {userData.promoCode}
          </div>
          <div className="col-md-6">
            {userData.patientPhoto && (
              <div>
                <strong>Patient Photo:</strong>
                <img
                  src={URL.createObjectURL(userData.patientPhoto)}
                  alt="Patient"
                  className="img-thumbnail mt-2"
                  style={{ maxWidth: "200px" }}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
