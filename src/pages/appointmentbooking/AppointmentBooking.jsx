import React, { useEffect, useState } from "react";
import hero1 from "../../assets/home-mm.png";
import MainSecComp from "../../components/mainSecComp/MainSecComp";
import "./appointmentbooking.css";
import { useSelector } from "react-redux";
import { jwtDecode } from "jwt-decode"; // Fixed import to avoid destructuring
import { useParams } from "react-router-dom";
import axios from "axios";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup"; // For form validation

export default function AppointmentBooking() {
  const token = useSelector((state) => state.auth.token); // Access the token from Redux
  const { userId } = jwtDecode(token); // Decode the token to get userId
  const { id } = useParams(); // Get the facility ID from the URL params
  const [facilityData, setFacilityData] = useState(null); // Store facility details
  const [errorMessage, setErrorMessage] = useState(""); // Store error message for display

  useEffect(() => {
    facilityDetails();
  }, []);

  async function facilityDetails() {
    // Fetch the facility details using the facility id
    try {
      const response = await axios.get(
        `http://localhost:8000/api/data/facility/${id}`
      );
      setFacilityData(response.data); // Store the fetched data
    } catch (error) {
      console.error("Error fetching facility details:", error);
      setErrorMessage("Failed to load facility details.");
    }
  }

  // Validation schema for the form fields
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    phone: Yup.string().required("Phone number is required"),
    medicalRecord: Yup.string().required("Medical Record Number is required"),
    reason: Yup.string().required("Reason for visit is required"),
    department: Yup.string().required("Department is required"),
    date: Yup.date().required("Preferred date is required"),
    time: Yup.string().required("Preferred time is required"),
  });

  return (
    <>
      <MainSecComp hero={hero1} heading={"<p>Book with Ease.</p>"} />

      <div className="container">
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <Formik
          enableReinitialize
          initialValues={{
            name: "", // Patient's name should be left empty for the patient to fill
            phone: "", // Populate with facility data
            medicalRecord: "", // This can be filled by the user
            reason: "",
            department: "",
            date: "",
            time: "",
          }}
          validationSchema={validationSchema}
          onSubmit={(values, { setSubmitting }) => {
            setSubmitting(true);

            // Log the values and facility ID for debugging
            console.log("Form values:", values);
            console.log("Facility ID being sent:", id);

            axios
              .post(
                `http://localhost:8000/api/appointments/book`,
                {
                  ...values,
                  patient: userId,
                  facilityId: id, // Updated this to `facilityId`
                },
                { headers: { Authorization: `Bearer ${token}` } }
              )
              .then((response) => {
                console.log("Appointment booked successfully!", response.data);
                setSubmitting(false);
                // Optionally, you can navigate to a different page or display a success message
              })
              .catch((error) => {
                console.error(
                  "Error booking appointment:",
                  error.response?.data || error.message
                );
                setErrorMessage(
                  "Failed to book appointment. Please try again."
                );
                setSubmitting(false);
              });
          }}
        >
          {({ isSubmitting }) => (
            <Form className="form-section">
              <h2 className="mb-5 text-4xl text-da font-semibold">
                Appointment Booking
              </h2>
              <p className="my-3 underline text-gray-400">
                {facilityData?.name}
              </p>{" "}
              {/* Display facility name here */}
              <div className="form-row">
                <div className="col px-2">
                  <label htmlFor="name">Patient Name</label>
                  <Field
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Enter your name"
                  />
                  <ErrorMessage
                    name="name"
                    component="div"
                    className="error-message"
                  />
                </div>
                <div className="col px-2">
                  <label htmlFor="phone">Phone Number</label>
                  <Field
                    type="text"
                    id="phone"
                    name="phone"
                    placeholder="(123) 456 - 7890"
                  />
                  <ErrorMessage
                    name="phone"
                    component="div"
                    className="error-message"
                  />
                </div>
              </div>
              <div className="col px-2">
                <label htmlFor="medicalRecord">Medical Record Number</label>
                <Field
                  type="text"
                  id="medicalRecord"
                  name="medicalRecord"
                  placeholder="123456-7890-0987"
                />
                <ErrorMessage
                  name="medicalRecord"
                  component="div"
                  className="error-message"
                />
              </div>
              <div className="form-row">
                <div className="col px-2">
                  <label htmlFor="reason">Reason for Visit</label>
                  <Field as="select" id="reason" name="reason">
                    <option value="">Select reason</option>
                    <option value="routine">Routine Checkup</option>
                    <option value="consultation">Consultation</option>
                    <option value="emergency">Emergency</option>
                  </Field>
                  <ErrorMessage
                    name="reason"
                    component="div"
                    className="error-message"
                  />
                </div>
                <div className="col px-2">
                  <label htmlFor="department">Department</label>
                  <Field as="select" id="department" name="department">
                    <option value="">Select department</option>
                    <option value="cardiology">Cardiology</option>
                    <option value="neurology">Neurology</option>
                    <option value="pediatrics">Pediatrics</option>
                    <option value="orthopedics">Orthopedics</option>
                  </Field>
                  <ErrorMessage
                    name="department"
                    component="div"
                    className="error-message"
                  />
                </div>
              </div>
              <div className="form-row mb-3">
                <div className="col px-2">
                  <label htmlFor="date">Preferred Date</label>
                  <Field type="date" id="date" name="date" />
                  <ErrorMessage
                    name="date"
                    component="div"
                    className="error-message"
                  />
                </div>
                <div className="col px-2">
                  <label htmlFor="time">Preferred Time</label>
                  <Field type="time" id="time" name="time" />
                  <ErrorMessage
                    name="time"
                    component="div"
                    className="error-message"
                  />
                </div>
              </div>
              <button
                className="ourbtn w-full"
                type="submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Submit"}
              </button>
            </Form>
          )}
        </Formik>

        <div className="contact-section">
          <h3>Contact Info</h3>
          <img
            src={require("../../assets/home-m3.avif")}
            alt="Doctor Contact Info"
          />
          <div className="contact-details">
            <p>
              <strong>Phone:</strong> XXX-XXXX-XXXX
            </p>
            <p>
              <strong>Email Us:</strong> help@mediconnect.com
            </p>
            <p>
              <strong>Our Location:</strong> 100 Anywhere St, Any City, 12345
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
