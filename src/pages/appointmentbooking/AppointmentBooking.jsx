import React from "react";
import hero1 from "../../assets/home-mm.png";
import MainSecComp from "../../components/mainSecComp/MainSecComp";
import "./appointmentbooking.css";
export default function AppointmentBooking() {
  return (
    <>
      <MainSecComp hero={hero1} heading={"<p>Book with Ease.</p>"} />

      <div class="container">
        <form class="form-section">
          <h2 className="mb-5 text-4xl text-da font-semibold">
            Appointment Booking
          </h2>
          <div class="form-row">
            <div class="col px-2">
              <label for="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="David John"
              />
            </div>
            <div class="col px-2">
              <label for="phone">Phone Number</label>
              <input
                type="text"
                id="phone"
                name="phone"
                placeholder="(123) 456 - 7890"
              />
            </div>
          </div>

          <div className="col px-2">
            <label for="medical-record">Medical Record Number</label>
            <input
              type="text"
              id="medical-record"
              name="medical-record"
              placeholder="123456-7890-0987"
            />
          </div>
          <div class="form-row">
            <div class="col px-2">
              <label for="reason">Reason for Visit</label>
              <select id="reason" name="reason">
                <option value="routine">Routine Checkup</option>
                <option value="consultation">Consultation</option>
                <option value="emergency">Emergency</option>
              </select>
            </div>
            <div class="col px-2">
              <label for="department">Department</label>
              <select id="department" name="department">
                <option value="cardiology">Cardiology</option>
                <option value="neurology">Neurology</option>
                <option value="pediatrics">Pediatrics</option>
                <option value="orthopedics">Orthopedics</option>
              </select>
            </div>
          </div>

          <div class="form-row mb-3">
            <div class="col px-2">
              <label for="date">Preferred Date</label>
              <input type="date" id="date" name="date" />
            </div>
            <div class="col px-2">
              <label for="time">Preferred Time</label>
              <input type="time" id="time" name="time" />
            </div>
          </div>

          <button class="ourbtn w-full" type="submit">
            Submit
          </button>
        </form>

        <div class="contact-section">
          <h3>Contact Info</h3>
          <img src={require('../../assets/home-m3.avif')} alt="Doctor Contact Info" />
          <div class="contact-details">
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
