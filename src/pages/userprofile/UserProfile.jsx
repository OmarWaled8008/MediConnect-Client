import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useSelector } from "react-redux";
import pic from "../../assets/circlescatterhaikei.svg";
import { BallTriangle } from "react-loader-spinner";

export default function UserProfile() {
  // Get the token from Redux store
  const token = useSelector((state) => state.auth.token);

  const { data, isLoading, error } = useQuery({
    queryKey: ["profileData"],
    queryFn: getProfile,
  });

  async function getProfile() {
    return await axios.get("http://localhost:8000/api/patients/profile", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }

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

  const userData = data?.data?.patient || {};

  // Placeholder image in case no patient image is provided
  const profileImage =
    userData.profileImage || "https://via.placeholder.com/150";

  return (
    <div className="min-h-screen flex items-center justify-center py-10 relative">
      <div className="absolute top-0 left-0 w-full h-auto justify-center">
        <img
          src={pic}
          alt="Background Design"
          className="w-full object-cover h-64"
        />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-da mt-2">
          <h1 className="text-5xl font-bold">Profile</h1>
          <p className="text-lg mt-1">We are here to assist you.</p>
        </div>
      </div>

      <div className="w-full max-w-4xl bg-white p-10 rounded-lg shadow-md z-10 relative mt-40">
        {/* Profile Header Section */}
        <div className="flex items-center mb-4">
          <img
            src={profileImage}
            alt="Profile"
            className="w-24 h-24 rounded-full object-cover mr-4"
          />
          <div className="flex-1">
            <h2 className="text-3xl font-bold text-red-500">
              {userData.name || "N/A"}
            </h2>
            <div className="flex space-x-2 mt-1">
              <a href="#" className="text-blue-600">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" className="text-blue-400">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-blue-500">
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>
          <div>
            <button className="text-red-500">
              <i className="fas fa-pencil-alt"></i>
            </button>
          </div>
        </div>

        {/* Basic Info */}
        <div className="grid grid-cols-2 gap-4 text-lg">
          <div>
            <strong>Date Of Birth:</strong>{" "}
            {new Date(userData.createdAt).toLocaleDateString() || "N/A"}
          </div>
          <div>
            <strong>Gender:</strong> {userData.gender || "N/A"}
          </div>
          <div>
            <strong>Email:</strong> {userData.email || "N/A"}
          </div>
          <div>
            <strong>Phone:</strong> {userData.phone || "N/A"}
          </div>
          <div>
            <strong>Address:</strong> {userData.address || "N/A"}
          </div>
          <div>
            <strong>Blood Group:</strong> {userData.blood_type || "N/A"}
          </div>
        </div>

        {/* Medical Info */}
        <h3 className="text-2xl font-semibold mt-6">Medical Information</h3>
        <div className="mt-4">
          <div className="mb-2">
            <strong>Medical History:</strong>
            <p>
              {userData.medical_history && userData.medical_history.length > 0
                ? userData.medical_history.join(", ")
                : "No medical history available"}
            </p>
          </div>
          <div className="mb-2">
            <strong>Allergies:</strong>
            <p>
              {userData.allergies && userData.allergies.length > 0
                ? userData.allergies.join(", ")
                : "No allergies"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
