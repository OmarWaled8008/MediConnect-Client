import React from "react";
import pic from "../../assets/circlescatterhaikei.svg";

function TermsOfService() {
  return (
    <div className="min-h-screen flex items-center justify-center py-10 relative">
      <div className="absolute top-0 left-0 w-full h-auto justify-center">
        <img
          src={pic}
          alt="Background Design"
          className="w-full object-cover h-64"
        />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-da mt-2">
          <h1 className="text-5xl font-bold">Terms of Service</h1>
          <p className="text-lg mt-1">We are here to assist you.</p>
        </div>
      </div>
      {/* <img src={contactPic} alt="contact Design" className="w-1/4 object-right h-64" /> */}

      <div className="w-full max-w-4xl bg-white p-10 rounded-lg shadow-md z-10 relative mt-40">
        <h1 className="text-4xl font-bold mt-8 mb-6 text-pr text-center">
          Terms of Service
        </h1>
        <p className="mb-6 text-lg leading-relaxed text-gray-700">
          Welcome to MediConnect. By accessing or using our services, you agree
          to be bound by these terms. If you do not agree with any part of these
          terms, you must not use our services.
        </p>

        <h2 className="text-2xl mt-8 font-bold mb-4 text-pr">
          1. Introduction
        </h2>
        <p className="mb-6 text-lg leading-relaxed text-gray-700">
          MediConnect provides a platform that connects patients with healthcare
          providers. Our mission is to facilitate access to healthcare services
          for everyone.
        </p>

        <h2 className="text-2xl font-bold mb-4 text-pr">
          2. User Responsibilities
        </h2>
        <p className="mb-6 text-lg leading-relaxed text-gray-700">
          You agree to use MediConnect in accordance with applicable laws and
          regulations. You are responsible for maintaining the confidentiality
          of your account information.
        </p>

        <h2 className="text-2xl font-bold mb-4 text-pr">
          3. Services Provided
        </h2>
        <p className="mb-6 text-lg leading-relaxed text-gray-700">
          MediConnect offers various services including hospital locator,
          appointment booking, telemedicine services, and patient reviews.
        </p>

        <h2 className="text-2xl font-bold mb-4 text-pr">
          4. Limitation of Liability
        </h2>
        <p className="mb-6 text-lg leading-relaxed text-gray-700">
          MediConnect is not liable for any direct, indirect, incidental, or
          consequential damages arising from your use of the platform.
        </p>

        <h2 className="text-2xl font-bold mb-4 text-pr">5. Changes to Terms</h2>
        <p className="mb-6 text-lg leading-relaxed text-gray-700">
          We may update these terms from time to time. You will be notified of
          any changes, and continued use of our services indicates your
          acceptance of the new terms.
        </p>

        <h2 className="text-2xl font-bold mb-4 text-pr">6. Contact Us</h2>
        <p className="mb-6 text-lg leading-relaxed text-gray-700">
          For any questions regarding these terms, please contact us through our
          contact page. We are here to help you!
        </p>
      </div>
    </div>
  );
}

export default TermsOfService;
