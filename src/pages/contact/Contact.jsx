import React from "react";
import pic from "../../assets/circlescatterhaikei.svg";
// import contactPic from "../../assets/contact2.jpg";
export default function Contact() {
  return (
    <div className="min-h-screen flex items-center justify-center py-10 relative">
      <div className="absolute top-0 left-0 w-full h-auto justify-center">
        <img
          src={pic}
          alt="Background Design"
          className="w-full object-cover h-64"
        />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-da mt-2">
          <h1 className="text-5xl font-bold">Contact Us</h1>
          <p className="text-lg mt-1">We are here to assist you.</p>
        </div>
      </div>
      {/* <img src={contactPic} alt="contact Design" className="w-1/4 object-right h-64" /> */}

      <div className="w-full max-w-4xl bg-white p-10 rounded-lg shadow-md z-10 relative mt-40">
        <form className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="flex flex-col">
            <label className="mb-2 text-gray-700 font-medium">Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-pr"
              required
            />
          </div>
          <div className="flex flex-col">
            <label className="mb-2 text-gray-700 font-medium">
              Phone Number
            </label>
            <input
              type="tel"
              placeholder="Enter phone number"
              className="border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-pr"
              required
            />
          </div>
          <div className="flex flex-col">
            <label className="mb-2 text-gray-700 font-medium">
              Email Adress
            </label>
            <input
              type="email"
              placeholder="Enter phone number"
              className="border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-pr"
              required
            />
          </div>
          <div className="flex flex-col">
            <label
              className="block mb-1 font-bold text-gray-600"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              id="message"
              className="w-full border border-gray-300 p-3 rounded-lg outline-none focus:ring-2 focus:ring-pr"
              placeholder="Type your message here"
              rows="4"
              required
            ></textarea>
          </div>
        </form>

        <div className="mt-6">
          <button className="ourbtn w-full">Submit</button>
        </div>
      </div>
    </div>
  );
}
