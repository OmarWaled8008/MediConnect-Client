import React, { useState } from "react";
import pic from "../../assets/circlescatterhaikei.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "react-bootstrap";
import './userprofile.css'; // Make sure to create and import the CSS file
import hero2 from "../../assets/hh.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboardList, faCalendarCheck, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { BallTriangle } from "react-loader-spinner";



// export default function UserProfile() {
//   // Get the token from Redux store
//   const token = useSelector((state) => state.auth.token);

const exampleUserData = {
  name: "John Doe",
  createdAt: "1990-01-01T00:00:00Z",
  gender: "Male",
  email: "john.doe@example.com",
  phone: "123-456-7890",
  address: "123 Main St, Springfield",
  blood_type: "O+",
  medical_history: ["Hypertension", "Diabetes"],
  allergies: ["Peanuts", "Shellfish"],
  profileImage: "https://via.placeholder.com/150",
};

const exampleBookings = [
  {
    id: 1,
    facilityName: "General Hospital",
    date: "2023-01-15T10:00:00Z",
    status: "Completed",
    patientName: "John Doe",
    phoneNumber: "(123) 456-7890",
    medicalRecordNumber: "123456-7890-0987",
    reasonForVisit: "General Checkup",
    department: "General Medicine",
    preferredDate: "15-01-2023",
    preferredTime: "10:00 AM",
  },
  {
    id: 2,
    facilityName: "City Clinic",
    date: "2024-10-20T14:30:00Z",
    status: "Scheduled",
    patientName: "John Doe",
    phoneNumber: "(123) 456-7890",
    medicalRecordNumber: "123456-7890-0987",
    reasonForVisit: "Dental Checkup",
    department: "Dentistry",
    preferredDate: "20-10-2024",
    preferredTime: "02:30 PM",
  },
  {
    id: 3,
    facilityName: "Health Center",
    date: "2024-11-10T09:00:00Z",
    status: "Scheduled",
    patientName: "John Doe",
    phoneNumber: "(123) 456-7890",
    medicalRecordNumber: "123456-7890-0987",
    reasonForVisit: "Routine Checkup",
    department: "General Medicine",
    preferredDate: "10-11-2024",
    preferredTime: "09:00 AM",
  },
  // Add more bookings here
];

export default function UserProfile() {


//  // Get the token from Redux store
//  const token = useSelector((state) => state.auth.token);

//  const { data, isLoading, error } = useQuery({
//    queryKey: ["profileData"],
//    queryFn: getProfile,
//  });

//  async function getProfile() {
//    return await axios.get("http://localhost:8000/api/patients/profile", {
//      headers: {
//        Authorization: `Bearer ${token}`,
//      },
//    });
//  }

//   if (isLoading)
//     return (
//       <div className="absolute top-0 left-0 w-full h-[100vh] bg-white z-50 flex justify-center items-center">
//         <BallTriangle
//           height={100}
//           width={100}
//           radius={5}
//           color="#317bc4"
//           ariaLabel="ball-triangle-loading"
//           wrapperStyle={{}}
//           wrapperClass=""
//           visible={true}
//         />
//       </div>
//     );
//  if (error) {
//    return (
//      <div className="h-[50vh] bg-gray-900 text-white flex justify-center items-center font-bold text-3xl">
//        Error loading profile
//      </div>
//    );
//  }



  const [isEditing, setIsEditing] = useState(false);
  const [userData, setUserData] = useState(exampleUserData);

  // const userData = data?.data?.patient || {};

  const handleEditClick = () => {
    setIsEditing(!isEditing);
  };

  
  // // Placeholder image in case no patient image is provided
  // const profileImage =
  //   userData.profileImage || "https://via.placeholder.com/150";


  const handleSave = () => {
    // Logic to save the edited data would go here
    setIsEditing(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const profileImage = userData.profileImage || "https://via.placeholder.com/150";

  const pastBookings = exampleBookings.filter((booking) => new Date(booking.date) < new Date());
  const futureBookings = exampleBookings.filter((booking) => new Date(booking.date) >= new Date());

  return (
    <div className="container">
      <div className="form-section">
        <div className="flex items-center mb-4">
          <img
            src={hero2}
            alt="Profile"
            className="w-24 h-24 rounded-full object-cover mr-4 pp"
          />
          <div className="flex-1">
            <h2 className="text-4xl font-bold text-gray-700">{userData.name || "N/A"}</h2>
            <button className="btn btn-primary mt-2" onClick={handleEditClick}>
              {isEditing ? "Cancel" : "Edit"}
            </button>
            {isEditing && (
              <button className="btn btn-success mt-2 ml-2" onClick={handleSave}>
                Save
              </button>
            )}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 text-lg">
          <div>
            <strong className="text-xl">Date Of Birth: </strong>
            {isEditing ? (
              <input
                type="date"
                name="createdAt"
                value={new Date(userData.createdAt).toISOString().substring(0, 10)}
                onChange={handleChange}
                className="form-control"
              />
            ) : (
              new Date(userData.createdAt).toLocaleDateString() || "N/A"
            )}
          </div>
          <div>
            <strong className="text-xl">Gender: </strong>
            {isEditing ? (
              <input
                type="text"
                name="gender"
                value={userData.gender}
                onChange={handleChange}
                className="form-control"
              />
            ) : (
              userData.gender || "N/A"
            )}
          </div>
          <div>
            <strong className="text-xl">Email: </strong>
            {isEditing ? (
              <input
                type="email"
                name="email"
                value={userData.email}
                onChange={handleChange}
                className="form-control"
              />
            ) : (
              userData.email || "N/A"
            )}
          </div>
          <div>
            <strong className="text-xl">Phone: </strong>
            {isEditing ? (
              <input
                type="tel"
                name="phone"
                value={userData.phone}
                onChange={handleChange}
                className="form-control"
              />
            ) : (
              userData.phone || "N/A"
            )}
          </div>
          <div>
            <strong className="text-xl">Address: </strong>
            {isEditing ? (
              <input
                type="text"
                name="address"
                value={userData.address}
                onChange={handleChange}
                className="form-control"
              />
            ) : (
              userData.address || "N/A"
            )}
          </div>
          <div>
            <strong className="text-xl">Blood Group: </strong>
            {isEditing ? (
              <input
                type="text"
                name="blood_type"
                value={userData.blood_type}
                onChange={handleChange}
                className="form-control"
              />
            ) : (
              userData.blood_type || "N/A"
            )}
          </div>
        </div>
        <h3 className="text-3xl font-semibold mt-6">Medical Information</h3>
        <div className="mt-4">
          <div className="mb-2">
            <strong className="text-xl">Medical History: </strong>
            {isEditing ? (
              <input
                type="text"
                name="medical_history"
                value={userData.medical_history.join(", ")}
                onChange={(e) => handleChange({ target: { name: "medical_history", value: e.target.value.split(", ") } })}
                className="form-control"
              />
            ) : (
              userData.medical_history.length > 0 ? userData.medical_history.join(", ") : "No medical history available"
            )}
          </div>
          <div className="mb-2">
            <strong className="text-xl">Allergies: </strong>
            {isEditing ? (
              <input
                type="text"
                name="allergies"
                value={userData.allergies.join(", ")}
                onChange={(e) => handleChange({ target: { name: "allergies", value: e.target.value.split(", ") } })}
                className="form-control"
              />
            ) : (
              userData.allergies.length > 0 ? userData.allergies.join(", ") : "No allergies"
            )}
          </div>
        </div>

        {/* Dashboard Section */}
        <div className="dashboard-section mt-6">
          <h3 className="text-3xl font-semibold">Dashboard</h3>
          <div className="row mt-4">
            <div className="col-md-4">
              <div className="card text-center">
                <div className="card-body">
                  <FontAwesomeIcon icon={faUserCircle} size="2x" />
                  <h5 className="card-title">Profile</h5>
                  <p className="card-text">View and edit your profile information.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card text-center">
                <div className="card-body">
                  <FontAwesomeIcon icon={faCalendarCheck} size="2x" />
                  <h5 className="card-title">Upcoming Appointments</h5>
                  <p className="card-text">{futureBookings.length} scheduled appointments.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card text-center">
                <div className="card-body">
                  <FontAwesomeIcon icon={faClipboardList} size="2x" />
                  <h5 className="card-title">Past Appointments</h5>
                  <p className="card-text">{pastBookings.length} completed appointments.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bookings List */}
        <h3 className="text-3xl font-semibold mt-6">Your Appointments</h3>
        <ul className="list-group">
          {exampleBookings.map((booking) => (
            <li key={booking.id} className="list-group-item">
              <div>
                <strong>{booking.facilityName}</strong> - {new Date(booking.date).toLocaleDateString()} at {booking.preferredTime}
              </div>
              <div>Status: {booking.status}</div>
            </li>
          ))}
        </ul>
      </div>
      <div className="contact-section">
        <h3 className="text-3xl font-semibold mt-6">Booking History</h3> {/* Increased font size */}
        <div className="mt-4">
          <h4 className="text-2xl font-bold">Past Bookings</h4> {/* Increased font size */}
          {pastBookings.length > 0 ? (
            <Carousel>
              {pastBookings.map((booking) => (
                <Carousel.Item key={booking.id}>
                  <div className="card past-booking-card">
                    <div className="card-body">
                      <strong>Facility:</strong> {booking.facilityName}<br />
                      <strong>Date:</strong> {new Date(booking.date).toLocaleDateString()}<br />
                      <strong>Status:</strong> {booking.status}<br />
                      <strong>Patient:</strong> {booking.patientName}<br />
                      <strong>Phone:</strong> {booking.phoneNumber}<br />
                      <strong>Reason for Visit:</strong> {booking.reasonForVisit}<br />
                      <strong>Department:</strong> {booking.department}<br />
                      <strong>Preferred Date:</strong> {booking.preferredDate}<br />
                      <strong>Preferred Time:</strong> {booking.preferredTime}<br />
                    </div>
                  </div>
                </Carousel.Item>
              ))}
            </Carousel>
          ) : (
            <p>No past bookings available.</p>
          )}
        </div>

        <div className="mt-4">
          <h4 className="text-2xl font-bold">Future Bookings</h4> {/* Increased font size */}
          {futureBookings.length > 0 ? (
            <Carousel>
              {futureBookings.map((booking) => (
                <Carousel.Item key={booking.id}>
                  <div className="card future-booking-card">
                    <div className="card-body">
                      <strong>Facility:</strong> {booking.facilityName}<br />
                      <strong>Date:</strong> {new Date(booking.date).toLocaleDateString()}<br />
                      <strong>Status:</strong> {booking.status}<br />
                      <strong>Patient:</strong> {booking.patientName}<br />
                      <strong>Phone:</strong> {booking.phoneNumber}<br />
                      <strong>Reason for Visit:</strong> {booking.reasonForVisit}<br />
                      <strong>Department:</strong> {booking.department}<br />
                      <strong>Preferred Date:</strong> {booking.preferredDate}<br />
                      <strong>Preferred Time:</strong> {booking.preferredTime}<br />
                    </div>
                  </div>
                </Carousel.Item>
              ))}
            </Carousel>
          ) : (
            <p>No future bookings available.</p>
          )}
        </div>
      </div>
    </div>
  );
}

