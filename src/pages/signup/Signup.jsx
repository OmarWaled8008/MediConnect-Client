// import React, { useState, useEffect } from "react";
// import { GoogleLogin } from "@react-oauth/google";
// import { useNavigate } from "react-router-dom"; // Import useNavigate
// import "./signup.css";

// export default function Signup() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//     birthdate: "",
//     gender: "",
//     bloodType: "",
//     medicalHistory: "",
//     allergies: "",
//     currentMedications: "",
//     priorSurgeries: "",
//     hasInsurance: false,
//     insuranceProvider: "",
//     insurancePhoto: null,
//     promoCode: "",
//     agreeToTerms: false,
//     patientPhoto: null,
//   });

//   const [patientPhotoPreview, setPatientPhotoPreview] = useState("");
//   const [insurancePhotoPreview, setInsurancePhotoPreview] = useState("");

//   const navigate = useNavigate(); // Initialize useNavigate

//   // Load stored data when component mounts
//   useEffect(() => {
//     const storedData = localStorage.getItem("userData");
//     if (storedData) {
//       setFormData(JSON.parse(storedData));
//     }
//   }, []);

//   // Handle input changes
//   const handleChange = (e) => {
//     const { name, value, type, checked, files } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]:
//         type === "checkbox" ? checked : type === "file" ? files[0] : value,
//     }));

//     if (type === "file") {
//       const file = files[0];
//       if (name === "patientPhoto") {
//         setPatientPhotoPreview(URL.createObjectURL(file));
//       } else if (name === "insurancePhoto") {
//         setInsurancePhotoPreview(URL.createObjectURL(file));
//       }
//     }
//   };

//   // Handle form submission
//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Validate required fields
//     if (!formData.agreeToTerms) {
//       alert("You must agree to the terms and conditions to sign up.");
//       return;
//     }

//     // Store user data in localStorage
//     localStorage.setItem("userData", JSON.stringify(formData));

//     // Redirect to login page
//     navigate("/login"); // Navigate to login page

//     // You can add additional form submission logic here, e.g., API call
//     console.log("Form submitted:", formData);
//   };

//   // Handle Google Sign-In success
//   const handleGoogleSuccess = (response) => {
//     const { email, name } = response.profileObj;
//     setFormData((prevData) => ({
//       ...prevData,
//       email,
//       name,
//     }));

//     // Update localStorage with Google login data
//     localStorage.setItem(
//       "userData",
//       JSON.stringify({
//         ...formData,
//         email,
//         name,
//       })
//     );
//   };

//   // Handle Google Sign-In failure
//   const handleGoogleFailure = (response) => {
//     console.error("Google Sign-In Error:", response);
//   };

//   return (
//     <div className="container d-flex justify-content-center align-items-center vh-20">
//       <div
//         className="card shadow-lg"
//         style={{ maxWidth: "800px", width: "100%" }}
//       >
//         <div className="card-body p-5">
//           <h2 className="card-title text-center mb-4">Sign Up</h2>

//           {/* Google Sign-In */}
//           <div className="d-grid gap-2 mb-4">
//             <GoogleLogin
//               clientId="YOUR_GOOGLE_CLIENT_ID" // Replace with your actual client ID
//               buttonText="Sign up with Google"
//               onSuccess={handleGoogleSuccess}
//               onError={handleGoogleFailure}
//               cookiePolicy={"single_host_origin"}
//               className="btn btn-outline-danger"
//             />
//           </div>

//           <hr className="my-4" />

//           <form onSubmit={handleSubmit}>
//             {/* Basic Information */}
//             <div className="row mb-3">
//               <div className="col-md-6">
//                 <label htmlFor="name" className="form-label">
//                   Name
//                 </label>
//                 <input
//                   type="text"
//                   className="form-control"
//                   id="name"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   required
//                 />
//               </div>
//               <div className="col-md-6">
//                 <label htmlFor="email" className="form-label">
//                   Email
//                 </label>
//                 <input
//                   type="email"
//                   className="form-control"
//                   id="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   required
//                 />
//               </div>
//             </div>
//             <div className="row mb-3">
//               <div className="col-md-6">
//                 <label htmlFor="password" className="form-label">
//                   Password
//                 </label>
//                 <input
//                   type="password"
//                   className="form-control"
//                   id="password"
//                   name="password"
//                   value={formData.password}
//                   onChange={handleChange}
//                   required
//                 />
//               </div>
//               <div className="col-md-6">
//                 <label htmlFor="birthdate" className="form-label">
//                   Birthdate
//                 </label>
//                 <input
//                   type="date"
//                   className="form-control"
//                   id="birthdate"
//                   name="birthdate"
//                   value={formData.birthdate}
//                   onChange={handleChange}
//                   required
//                 />
//               </div>
//             </div>

//             {/* Additional Information */}
//             <div className="row mb-3">
//               <div className="col-md-6">
//                 <label htmlFor="gender" className="form-labe">
//                   Gender
//                 </label>
//                 <select
//                   className="form-select"
//                   id="gender"
//                   name="gender"
//                   value={formData.gender}
//                   onChange={handleChange}
//                   required
//                 >
//                   <option value="">Select Gender</option>
//                   <option value="male">Male</option>
//                   <option value="female">Female</option>
//                   <option value="other">Other</option>
//                 </select>
//               </div>
//               <div className="col-md-6">
//                 <label htmlFor="bloodType" className="form-label">
//                   Blood Type
//                 </label>
//                 <select
//                   className="form-select"
//                   id="bloodType"
//                   name="bloodType"
//                   value={formData.bloodType}
//                   onChange={handleChange}
//                   required
//                 >
//                   <option value="">Select Blood Type</option>
//                   <option value="A+">A+</option>
//                   <option value="A-">A-</option>
//                   <option value="B+">B+</option>
//                   <option value="B-">B-</option>
//                   <option value="AB+">AB+</option>
//                   <option value="AB-">AB-</option>
//                   <option value="O+">O+</option>
//                   <option value="O-">O-</option>
//                 </select>
//               </div>
//             </div>

//             {/* Patient Photo */}
//             <div className="mb-3">
//               <label htmlFor="patientPhoto" className="form-label">
//                 Upload Patient Photo
//               </label>
//               <input
//                 type="file"
//                 className="form-control"
//                 id="patientPhoto"
//                 name="patientPhoto"
//                 onChange={handleChange}
//                 accept="image/*"
//               />
//               {patientPhotoPreview && (
//                 <div className="mt-3">
//                   <img
//                     src={patientPhotoPreview}
//                     alt="Patient"
//                     className="img-thumbnail"
//                   />
//                 </div>
//               )}
//             </div>

//             {/* Patient History */}
//             <div className="mb-3">
//               <label htmlFor="medicalHistory" className="form-label">
//                 Medical History
//               </label>
//               <textarea
//                 className="form-control"
//                 id="medicalHistory"
//                 name="medicalHistory"
//                 rows="3"
//                 value={formData.medicalHistory}
//                 onChange={handleChange}
//               />
//             </div>
//             <div className="mb-3">
//               <label htmlFor="allergies" className="form-label">
//                 Allergies
//               </label>
//               <textarea
//                 className="form-control"
//                 id="allergies"
//                 name="allergies"
//                 rows="2"
//                 value={formData.allergies}
//                 onChange={handleChange}
//               />
//             </div>
//             <div className="mb-3">
//               <label htmlFor="currentMedications" className="form-label">
//                 Current Medications
//               </label>
//               <textarea
//                 className="form-control"
//                 id="currentMedications"
//                 name="currentMedications"
//                 rows="2"
//                 value={formData.currentMedications}
//                 onChange={handleChange}
//               />
//             </div>
//             <div className="mb-3">
//               <label htmlFor="priorSurgeries" className="form-label">
//                 Prior Surgeries
//               </label>
//               <textarea
//                 className="form-control"
//                 id="priorSurgeries"
//                 name="priorSurgeries"
//                 rows="2"
//                 value={formData.priorSurgeries}
//                 onChange={handleChange}
//               />
//             </div>

//             {/* Health Insurance */}
//             <div className="mb-3 form-check">
//               <input
//                 type="checkbox"
//                 className="form-check-input"
//                 id="hasInsurance"
//                 name="hasInsurance"
//                 checked={formData.hasInsurance}
//                 onChange={handleChange}
//               />
//               <label className="form-check-label" htmlFor="hasInsurance">
//                 Do you have health insurance?
//               </label>
//             </div>
//             {formData.hasInsurance && (
//               <>
//                 <div className="mb-3">
//                   <label htmlFor="insuranceProvider" className="form-label">
//                     Insurance Provider
//                   </label>
//                   <input
//                     type="text"
//                     className="form-control"
//                     id="insuranceProvider"
//                     name="insuranceProvider"
//                     value={formData.insuranceProvider}
//                     onChange={handleChange}
//                   />
//                 </div>
//                 <div className="mb-3">
//                   <label htmlFor="insurancePhoto" className="form-label">
//                     Upload Insurance Card Photo
//                   </label>
//                   <input
//                     type="file"
//                     className="form-control"
//                     id="insurancePhoto"
//                     name="insurancePhoto"
//                     onChange={handleChange}
//                     accept="image/*"
//                   />
//                   {insurancePhotoPreview && (
//                     <div className="mt-3">
//                       <img
//                         src={insurancePhotoPreview}
//                         alt="Insurance Card"
//                         className="img-thumbnail"
//                       />
//                     </div>
//                   )}
//                 </div>
//               </>
//             )}

//             {/* Promo Code */}
//             <div className="mb-3">
//               <label htmlFor="promoCode" className="form-label">
//                 Promo Code
//               </label>
//               <input
//                 type="text"
//                 className="form-control"
//                 id="promoCode"
//                 name="promoCode"
//                 value={formData.promoCode}
//                 onChange={handleChange}
//                 placeholder="Enter promo code if you have one"
//               />
//             </div>

//             {/* Terms and Conditions */}
//             <div className="mb-3 form-check">
//               <input
//                 type="checkbox"
//                 className="form-check-input"
//                 id="agreeToTerms"
//                 name="agreeToTerms"
//                 checked={formData.agreeToTerms}
//                 onChange={handleChange}
//                 required
//               />
//               <label className="form-check-label" htmlFor="agreeToTerms">
//                 I agree to the terms and conditions
//               </label>
//             </div>

//             <button type="submit" className="btn btn-primary w-100">
//               Sign Up
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
//import axios from 'axios';
import hospitalImage from "../../assets/hospital.jpg";
// import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const Signup = () => {
  const [step, setStep] = useState(1);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [bloodtype, setBloodType] = useState("");
  const [gender, setGender] = useState("");
  const [medHistory, setMedHistory] = useState("");
  const [allergies, setAllergies] = useState("");
  const [medications, setMedications] = useState("");
  const [insurance, setInsurance] = useState("");

  const navigate = useNavigate();

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };
  const validationSchema = [
    // Validation schema for Step 1
    Yup.object().shape({
      name: Yup.string().required("Full Name is required"),
      gender: Yup.string().required("Gender is required"),
      birthdate: Yup.date().required("Birth Date is required"),
    }),
    // Validation schema for Step 2
    Yup.object().shape({
      bloodtype: Yup.string().required("Blood Type is required"),
      medHistory: Yup.string().required("Medical History is required"),
      allergies: Yup.string().required("Allergies are required"),
      medications: Yup.string().required("Current Medications are required"),
      insurance: Yup.string().required("Insurance Provider is required"),
    }),
    // Validation schema for Step 3
    Yup.object().shape({
      email: Yup.string().email("Invalid email").required("Email is required"),
      password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required"),
    }),
  ];
  const handleRegister = async (e) => {
    e.preventDefault();
    console.log("Register:", { name, email, password });
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div>
            <h2 className="text-3xl font-bold mb-6">
              Step 1: Contact Information
            </h2>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Full Name
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-700"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Gender
              </label>
              <div className="flex space-x-4">
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="gender"
                    value="Male"
                    checked={gender === "Male"}
                    onChange={(e) => setGender(e.target.value)}
                    className="form-radio h-4 w-4 text-blue-600"
                  />
                  <span className="ml-2">Male</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="gender"
                    value="Female"
                    checked={gender === "Female"}
                    onChange={(e) => setGender(e.target.value)}
                    className="form-radio h-4 w-4 text-blue-600"
                  />
                  <span className="ml-2">Female</span>
                </label>
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Birth Date
              </label>
              <input
                type="date"
                value={birthdate}
                onChange={(e) => setBirthdate(e.target.value)}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-700"
                required
              />
            </div>
            <button
              onClick={nextStep}
              className="w-full bg-blue-400 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-200"
            >
              Next
            </button>
          </div>
        );
      case 2:
        return (
          <div>
            <h2 className="text-3xl font-bold mb-6">
              Step 2: Enter Medical Information
            </h2>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Blood Type
              </label>

              <select
                value={bloodtype}
                onChange={(e) => setBloodType(e.target.value)}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-700"
              >
                required
                <option value="" disabled>
                  Select Blood Type
                </option>
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Medical History
              </label>
              <input
                type="text"
                value={medHistory}
                onChange={(e) => setMedHistory(e.target.value)}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-700"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Allergies
              </label>
              <input
                type="text"
                value={allergies}
                onChange={(e) => setAllergies(e.target.value)}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-700"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Current Medications
              </label>
              <input
                type="text"
                value={medications}
                onChange={(e) => setMedications(e.target.value)}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-700"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Insurance Provider
              </label>
              <input
                type="text"
                value={insurance}
                onChange={(e) => setInsurance(e.target.value)}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-700"
                required
              />
            </div>
            <div className="flex justify-between">
              <button
                onClick={prevStep}
                className="bg-gray-400 text-white py-2 px-4 rounded-lg hover:bg-gray-600 transition duration-200"
              >
                Back
              </button>
              <button
                onClick={nextStep}
                className="bg-blue-400 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-200"
              >
                Next
              </button>
            </div>
          </div>
        );
      case 3:
        return (
          <div>
            <h2 className="text-3xl font-bold mb-6">
              Step 3: Create an Account
            </h2>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
                placeholder="you@gmail.com"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
                placeholder="••••••••"
                required
              />
            </div>
            <div className="flex justify-between">
              <button
                onClick={prevStep}
                className="bg-gray-400 text-white py-2 px-4 rounded-lg hover:bg-gray-600 transition duration-200"
              >
                Back
              </button>
              <button
                onClick={handleRegister}
                className="bg-green-400 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition duration-200"
              >
                Register
              </button>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="flex h-screen">
      <div className="w-full lg:w-1/2 flex flex-col justify-center px-16 bg-white">
        {renderStep()}
        <div className="mt-4">
          <p className="text-sm text-gray-600">
            Already have an account?
            <a href="/login" className="text-blue-600 hover:underline">
              {" "}
              Log In
            </a>
          </p>
        </div>
      </div>
      <div className="w-full flex flex-col justify-center bg-white">
        <img
          src={hospitalImage}
          alt="Sign-up"
          className="object-cover w-full h-full"
        />
      </div>
    </div>
  );
};

export default Signup;
