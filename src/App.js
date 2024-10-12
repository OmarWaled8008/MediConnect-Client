import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Notfound from "./pages/404/Notfound.module";
import HomePage from "./pages/homepage/HomePage";
import LayOut from "./components/LayOut";
import HospitalDetails from "./pages/hospitaldetails/HospitalDetails";
import AppointmentBooking from "./pages/appointmentbooking/AppointmentBooking";
import Support from "./pages/support/Support";
import HospitalLocator from "./pages/hospitallocator/HospitalLocator";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import Contact from "./pages/contact/Contact";
import Guides from "./pages/guides/Guides";
import Privacy from "./pages/privacy/Privacy";
import TermsOfService from "./pages/termsofservice/TermsOfService";
import Faqs from "./pages/faqs/Faqs";
import Services from "./pages/servicess/Services";

const router = createBrowserRouter([
  {
    path: "",
    element: <LayOut />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "home", element: <HomePage /> },
      { path: "locator", element: <HospitalLocator /> },
      { path: "details", element: <HospitalDetails /> },
      { path: "booking", element: <AppointmentBooking /> },
      { path: "support", element: <Support /> },
      { path: "contactus", element: <Contact /> },
      { path: "guides", element: <Guides /> },
      { path: "privacy", element: <Privacy /> },
      { path: "terms", element: <TermsOfService /> },
      { path: "faqs", element: <Faqs /> },
      { path: "services", element: <Services /> },
    ],
  },
  { path: "login", element: <Login /> },
  { path: "signup", element: <Signup /> },
  { path: "*", element: <Notfound /> },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
