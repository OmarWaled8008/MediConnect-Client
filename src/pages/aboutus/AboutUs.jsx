import React from "react";
import pic from "../../assets/circlescatterhaikei.svg";
import { FaHospital, FaCalendarCheck, FaLaptopMedical, FaUserAlt, FaHandsHelping, FaSeedling, FaHeart } from "react-icons/fa";

const AboutUs = () => {
  const sections = [
    {
      icon: <FaHandsHelping className="text-4xl text-pr mb-3" />,
      title: "Our Mission",
      text: "At MediConnect, we are dedicated to revolutionizing healthcare access. Our mission is to make finding and managing healthcare seamless, putting your wellness at the forefront of everything we do.",
    },
    {
      icon: <FaSeedling className="text-4xl text-pr mb-3" />,
      title: "Our Vision",
      text: "We envision a world where everyone can access quality healthcare easily. By combining advanced technology with compassionate care, we strive to enhance the healthcare experience for all individuals.",
    },
    {
      icon: <FaHospital className="text-4xl text-pr mb-3" />,
      title: "Our Services",
      text: (
        <ul className="list-disc pl-5">
          <li><strong>Hospital Locator:</strong> Quickly find hospitals tailored to your specific needs.</li>
          <li><strong>Appointment Booking:</strong> Effortlessly schedule appointments and receive instant confirmations.</li>
        </ul>
      ),
    },
    {
      icon: <FaUserAlt className="text-4xl text-pr mb-3" />,
      title: "Get in Touch",
      text: (
        <>
          <p>We value your feedback. For inquiries, please contact us through our contact us.
          </p>
          <p><strong>Join Us on This Journey</strong> Together, we can improve healthcare accessibility and effectiveness.</p>
        </>
      ),
    },
    {
      icon: <FaLaptopMedical className="text-4xl text-pr mb-3" />,
      title: "Our Future",
      text: (
        <>
          <p>We’re just getting started! At MediConnect, we aim to expand our platform to include more services.</p>
          <ul className="list-disc pl-5">
            <li><strong>Partnerships:</strong> Collaborating with more healthcare providers.</li>
            <li><strong>Provide analysis:</strong> Assist patients to understand their health better.</li>
          </ul>
          <p>Stay tuned for updates as we grow and evolve, aiming to positively impact the healthcare landscape.</p>
        </>
      ),
    },
    {
      icon: <FaHeart className="text-4xl text-pr mb-3" />,
      title: "Our Values",
      text: "At MediConnect, we prioritize empathy, integrity, and innovation. We believe in fostering trust and transparency while using cutting-edge technology to provide accessible healthcare solutions for all.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-10 relative">
      {/* Background Image */}
      <div className="absolute top-0 left-0 w-full h-64 overflow-hidden">
        <img src={pic} alt="Background Design" className="w-full object-cover h-full" />
      </div>

      {/* Title */}
      <div className="relative z-10 mt-24 text-center">
        <h1 className="text-5xl font-bold text-da">About Us</h1>
        <p className="text-lg mt-2 text-da">Your trusted partner in healthcare.</p>
      </div>

      {/* Cards Section */}
      <div className="relative z-0 mt-20 w-full max-w-7xl px-6">
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-center">
          {sections.map((section, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 text-center transform transition-transform duration-300 hover:scale-105"
            >
              {section.icon}
              <h2 className="text-xl font-semibold mb-3">{section.title}</h2>
              <div className="text-gray-700">
                {typeof section.text === "string" ? section.text : section.text}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
