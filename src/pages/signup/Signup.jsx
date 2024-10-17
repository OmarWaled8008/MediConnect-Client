import React, { useState } from "react";
import { useFormik } from "formik";
import picsvg from "../../assets/undraw_medical_care_movn.svg";
import { motion } from "framer-motion";
import axios from "axios";
import { setToken } from "../../store/tokenslice";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

function SignupForm({ toggleView }) {
  const [step, setStep] = useState(1);
  const navigate = useNavigate();
  const dispatchEvent = useDispatch();
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      phone: "",
      address: "",
      blood_type: "",
      medical_history: "",
      allergies: "",
      current_medication: "",
      gender: "",
      birthdate: "",
    },
    validate: (values) => {
      let errors = {};
      if (step === 1) {
        if (!values.name) {
          errors.name = "Full Name is required";
        }
        if (!values.email) {
          errors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(values.email)) {
          errors.email = "Invalid email address";
        }
        if (!values.password) {
          errors.password = "Password is required";
        } else if (values.password.length < 6) {
          errors.password = "Password must be at least 6 characters";
        }
      } else if (step === 2) {
        if (!values.phone) {
          errors.phone = "Phone number is required";
        }
        if (!values.address) {
          errors.address = "Address is required";
        }
        if (!values.blood_type) {
          errors.blood_type = "Blood Type is required";
        }
      } else if (step === 3) {
        if (!values.gender) {
          errors.gender = "Gender is required";
        }
        if (!values.birthdate) {
          errors.birthdate = "Birth Date is required";
        }
      }
      return errors;
    },
    onSubmit: (values) => {
      handleSign(values);
    },
  });
  async function handleSign(values) {
    try {
      console.log("Sending values:", values); 
      const response = await axios.post(
        "http://localhost:8000/api/patients/signup",
        values
      );
      console.log("Signup successful", response.data);
      dispatchEvent(setToken(response.data.token));
      localStorage.setItem("token", response.data.token);
      navigate("/home");
    } catch (error) {
      if (error.response) {
        console.error("Error response:", error.response.data); 
      } else {
        console.error("Signup failed");
      }
    }
  }

  const nextStep = () => {
    if (formik.isValid && formik.dirty) {
      setStep(step + 1);
    }
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-da"
              >
                Full Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-pr focus:border-pr sm:text-sm"
              />
              {formik.touched.name && formik.errors.name ? (
                <div className="text-red-500 text-sm">{formik.errors.name}</div>
              ) : null}
            </div>

            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-da"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-pr focus:border-pr sm:text-sm"
              />
              {formik.touched.email && formik.errors.email ? (
                <div className="text-red-500 text-sm">
                  {formik.errors.email}
                </div>
              ) : null}
            </div>

            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-da"
              >
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-pr focus:border-pr sm:text-sm"
              />
              {formik.touched.password && formik.errors.password ? (
                <div className="text-red-500 text-sm">
                  {formik.errors.password}
                </div>
              ) : null}
            </div>
          </>
        );
      case 2:
        return (
          <>
            <div className="mb-4">
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-da"
              >
                Phone Number
              </label>
              <input
                id="phone"
                name="phone"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.phone}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-pr focus:border-pr sm:text-sm"
              />
              {formik.touched.phone && formik.errors.phone ? (
                <div className="text-red-500 text-sm">
                  {formik.errors.phone}
                </div>
              ) : null}
            </div>

            <div className="mb-4">
              <label
                htmlFor="address"
                className="block text-sm font-medium text-da"
              >
                Address
              </label>
              <input
                id="address"
                name="address"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.address}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-pr focus:border-pr sm:text-sm"
              />
              {formik.touched.address && formik.errors.address ? (
                <div className="text-red-500 text-sm">
                  {formik.errors.address}
                </div>
              ) : null}
            </div>

            <div className="mb-4">
              <label
                htmlFor="blood_type"
                className="block text-sm font-medium text-da"
              >
                Blood Type
              </label>
              <select
                id="blood_type"
                name="blood_type"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.blood_type}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-pr focus:border-pr sm:text-sm"
              >
                <option value="" label="Select blood type" />
                <option value="A+" label="A+" />
                <option value="A-" label="A-" />
                <option value="B+" label="B+" />
                <option value="B-" label="B-" />
                <option value="AB+" label="AB+" />
                <option value="AB-" label="AB-" />
                <option value="O+" label="O+" />
                <option value="O-" label="O-" />
              </select>
              {formik.touched.blood_type && formik.errors.blood_type ? (
                <div className="text-red-500 text-sm">
                  {formik.errors.blood_type}
                </div>
              ) : null}
            </div>
          </>
        );
      case 3:
        return (
          <>
            <div className="mb-4">
              <label
                htmlFor="medical_history"
                className="block text-sm font-medium text-da"
              >
                Medical History
              </label>
              <input
                id="medical_history"
                name="medical_history"
                type="text"
                placeholder="Enter medical history (comma separated)"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.medical_history}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-pr focus:border-pr sm:text-sm"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="allergies"
                className="block text-sm font-medium text-da"
              >
                Allergies
              </label>
              <input
                id="allergies"
                name="allergies"
                type="text"
                placeholder="Enter allergies (comma separated)"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.allergies}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-pr focus:border-pr sm:text-sm"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-da">
                Gender
              </label>
              <div className="mt-1 flex space-x-4">
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="gender"
                    value="male"
                    onChange={formik.handleChange}
                    className="form-radio"
                  />
                  <span className="ml-2">Male</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    name="gender"
                    value="female"
                    onChange={formik.handleChange}
                    className="form-radio"
                  />
                  <span className="ml-2">Female</span>
                </label>
              </div>
            </div>

            <div className="mb-4">
              <label
                htmlFor="birthdate"
                className="block text-sm font-medium text-da"
              >
                Birth Date
              </label>
              <input
                id="birthdate"
                name="birthdate"
                type="date"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.birthdate}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-pr focus:border-pr sm:text-sm"
              />
            </div>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 50 }}
      className="min-h-screen flex items-center justify-center"
    >
      <div className="bg-white shadow-lg rounded-lg w-[45%] p-8 relative">
        <img
          src={picsvg}
          alt=""
          className="absolute w-[30%] -top-16 -right-16"
        />
        <form onSubmit={formik.handleSubmit} className="space-y-6">
          <h2 className="text-2xl font-semibold text-center text-da">
            MediConnect Sign Up
          </h2>
          {renderStep()}
          <div className="flex justify-between">
            {step > 1 && (
              <button type="button" onClick={prevStep} className="ourbtn2 p-3">
                Back
              </button>
            )}
            {step < 3 ? (
              <button
                type="button"
                onClick={formik.isValid && formik.dirty ? nextStep : null}
                className={`ourbtn  p-3 ${
                  (!formik.isValid || !formik.dirty) && "opacity-50"
                }`}
                disabled={!formik.isValid || !formik.dirty}
              >
                Next
              </button>
            ) : (
              <button type="submit" className="ourbtn p-3">
                Submit
              </button>
            )}
          </div>
          <div className="mt-4 text-center">
            <p className="text-sm text-da">
              Already have an account?{" "}
              <button onClick={toggleView} className="text-pr hover:underline">
                Log In
              </button>
            </p>
          </div>
        </form>
      </div>
    </motion.div>
  );
}
export default SignupForm;
