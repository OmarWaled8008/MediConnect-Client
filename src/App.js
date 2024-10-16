import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "react-vertical-timeline-component/style.min.css";
import "./App.css";
import LayOut from "./components/LayOut";
import HomePage from "./pages/homepage/HomePage";
import AboutUs from "./pages/aboutus/AboutUs";
import UserProfile from "./pages/userprofile/UserProfile";
// import Signup from "./pages/signup/Signup";
import PatientReviews from "./pages/patientreviews/PatientReviews";
// import Login from "./pages/login/Login";
import Support from "./pages/support/Support";
import HospitalLocator from "./pages/hospitallocator/HospitalLocator";
import HospitalDetails from "./pages/hospitaldetails/HospitalDetails";
import Hospitals from "./pages/hospitaldetails/Hospitals";
import AppointmentBooking from "./pages/appointmentbooking/AppointmentBooking";
import Telemedicine from "./pages/telemedicine/Telemedicine";
import Blog from "./pages/blog/Blog";
import Services from "./pages/servicess/Services";
import Notfound from "./pages/404/Notfound.module";
import Contact from "./pages/contact/Contact";
import Privacy from "./pages/privacy/Privacy";
import Faq from "./pages/faq/Faq";
import Guides from "./pages/guides/Guides";
import TermsOfService from "./pages/termsofservice/TermsOfService";
import store from "./store/store";
import { Provider } from "react-redux";
import RegisterLS from "./pages/registerLS/RegisterLS";
// import ChatBox from "./components/chatbox/ChatBox.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// Create the router
const router = createBrowserRouter([
  {
    path: "/",
    element: <LayOut />,
    children: [
      { path: "", element: <HomePage /> },
      { path: "home", element: <HomePage /> },
      { path: "userprofile", element: <UserProfile /> },
      { path: "patientreviews", element: <PatientReviews /> },
      { path: "hospitallocator", element: <HospitalLocator /> },
      {
        path: "hospitaldetails",
        element: <HospitalDetails />,
      },
      { path: "hospitals", element: <Hospitals /> },
      { path: "appointmentbooking", element: <AppointmentBooking /> },
      { path: "telemedicine", element: <Telemedicine /> },
      { path: "support", element: <Support /> },
      { path: "about", element: <AboutUs /> },
      { path: "blog", element: <Blog /> },
      { path: "services", element: <Services /> },
      { path: "contact", element: <Contact /> },
      { path: "privacy", element: <Privacy /> },
      { path: "faq", element: <Faq /> },
      { path: "guides", element: <Guides /> },
      { path: "terms", element: <TermsOfService /> },
      // { path: "chatbox", element: <ChatBox /> }, // Uncomment if needed
    ],
  },
  {
    path: "/register",
    element: <RegisterLS />,
  },
  { path: "*", element: <Notfound /> },
]);

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </QueryClientProvider>
  );
}

export default App;
