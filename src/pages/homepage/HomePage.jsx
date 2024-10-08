import React, { useEffect } from "react";
import hero1 from "../../assets/home-m.png";
import homeCss from "./homepage.module.css";
import { Link } from "react-router-dom";
import "../../assets/blob-scene-haikei.svg";
import "../../assets/polygon-scatter-haikei.svg";
import MainSecComp from "../../components/mainSecComp/MainSecComp";
import { AppleCardsCarouselDemo } from "../../components/appleCardscarouseldemo/AppleCardsCarouselDemo";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
export default function HomePage() {
  useEffect(() => {
    window.addEventListener("scroll", counter);
    return () => {
      window.removeEventListener("scroll", counter);
    };
  }, []);
  function counter() {
    const windowScroll = window.scrollY;
    const counterSec = document.getElementById("countersec");
    const counterSecTop = counterSec.offsetTop;
    if (windowScroll > counterSecTop - 300) {
      const counters = document.querySelectorAll(".counter");
      counters.forEach((counter, idx) => {
        const target = Number(counter.dataset.target);
        let currValue = numbers[idx].num;
        const intervalVar = setInterval(() => {
          if (currValue < target) {
            counter.innerText = ++currValue + numbers[idx].st;
          } else {
            clearInterval(intervalVar);
          }
        }, 10);
      });
    }
  }
  const facilities = [
    {
      icon: "fas fa-hospital",
      title: "Hospitals",
      description: "Comprehensive medical care.",
    },
    {
      icon: "fas fa-user-md",
      title: "Doctors",
      description: "Expert healthcare providers.",
    },
    {
      icon: "fas fa-clinic-medical",
      title: "Clinics",
      description: "Convenient outpatient services.",
    },
    {
      icon: "fas fa-vials",
      title: "Laboratories",
      description: "Accurate diagnostic tests.",
    },
  ];

  const features = [
    {
      icon: "fas fa-map-marked-alt",
      title: "Hospital Locator",
      desc: "Find nearby hospitals quickly and easily using our interactive map and advanced search filters. Whether you're looking for a specific specialization, rating, or insurance compatibility, our locator helps you find the best fit for your needs.",
      deg: "rotate-3",
    },
    {
      icon: "fas fa-calendar-check",
      title: "Appointment Booking",
      desc: "Book appointments with top-rated doctors at your convenience. Our platform allows you to view real-time availability, choose preferred dates, and receive instant confirmation. Manage all your bookings in one place, making healthcare more accessible.",
      deg: "-rotate-3 ",
    },
    {
      icon: "fas fa-phone-volume",
      title: "Telemedicine Services",
      desc: "Access healthcare from the comfort of your home with our secure telemedicine services. Schedule video consultations, chat with healthcare providers, and get prescriptions delivered directly to your door. It's healthcare on your terms.",
      deg: "rotate-3",
    },
    {
      icon: "fas fa-hospital-user",
      title: "Patient Reviews",
      desc: "Make informed decisions with the help of our comprehensive patient review system. Read genuine feedback from other patients, share your own experiences, and help improve the quality of care by choosing the best healthcare providers.",
      deg: "-rotate-3",
    },
  ];
  const numbers = [
    {
      num: "0",
      title: "Hospitals",
      bg: "bg-c1",
      toNum: "150",
      st: "+",
      icon: "fas fa-hospital",
    },
    {
      num: "0",
      title: "Doctors",
      bg: "bg-c2",
      toNum: "200",
      st: "+",
      icon: "fas fa-user-md",
    },
    {
      num: "0",
      title: "Patients",
      bg: "bg-c3",
      toNum: "300",
      st: "+",
      icon: "fas fa-users",
    },
    {
      num: "0",
      title: "Others",
      bg: "bg-c4",
      toNum: "88",
      st: "%",
      icon: "fas fa-user-friends",
    },
  ];

  const coreValues = [
    {
      title: "Accessibility",
      description:
        "We ensure that healthcare information is easy to access for all users, regardless of their background or location.",
      icon: "fas fa-universal-access", // Font Awesome icon for accessibility
    },
    {
      title: "Reliability",
      description:
        "We provide accurate, up-to-date data about hospitals, services, and doctors to ensure our users can make informed decisions.",
      icon: "fas fa-check-circle", // Font Awesome icon for reliability
    },
    {
      title: "Privacy and Security",
      description:
        "Your data is important to us. We prioritize the privacy and security of our users, ensuring all information is handled confidentially and securely.",
      icon: "fas fa-shield-alt", // Font Awesome icon for privacy and security
    },
    {
      title: "Efficiency",
      description:
        "We streamline healthcare access by simplifying the process of finding services and booking appointments, saving time for patients and providers.",
      icon: "fas fa-clock", // Font Awesome icon for efficiency
    },
    {
      title: "Compassion",
      description:
        "We place patients' well-being at the heart of everything we do, offering guidance and support through our platform.",
      icon: "fas fa-heart", // Font Awesome icon for compassion
    },
  ];

  return (
    <>
      <MainSecComp
        hero={hero1}
        heading={`<p>Find Care Fast,</p><p>Discover Hospitals, Book Instantly.</p>`}
      />

      <section className="py-10">
        <h2 className="text-center mb-5 text-4xl text-da font-semibold mt-5">
          Our Values
        </h2>

        <div className="max-w-[75rem] mx-auto  row justify-center">
          {coreValues.map((value, index) => (
            <div key={index} className="col-lg-4 col-md-6 col-12 p-3">
              <div
                className={`${homeCss.valuecard} text-light text-center rounded-xl p-3 h-[280px] w-3/4 mx-auto`}
              >
                <div
                  className={`${homeCss.valuelogo} mx-auto flex justify-center rounded-2xl mb-3 py-1 items-center`}
                >
                  <i
                    className={
                      value.icon +
                      " text-lg bg-pr text-light rounded-full p-2  block mr-3"
                    }
                  ></i>
                  <h3 className="text-xl ">{value.title}</h3>
                </div>
                <p className=" text-da">{value.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="pt-16">
        <div className="max-w-[75rem] mx-auto p-5 row">
          <div className="mb-5 col-md-5 col-12 p-0">
            <div className="relative">
              <i class="fa-solid fa-shield-virus bg-white text-gr block absolute top-[-6%] right-[-5%]  text-5xl p-2 rounded-full"></i>
              <img
                src={require("../../assets/home-m2.jpg")}
                alt="About Us"
                className="w-full rounded-lg"
              />
            </div>
          </div>
          <div className="mb-5 col-md-7 col-12 flex flex-col justify-center p-0">
            <div className="pl-10">
              <div className="mb-8">
                <h2 className="text-4xl font-semibold">About Us</h2>
                <h4 className="text-pr">MediConnect</h4>
              </div>
              <div className="pl-8">
                <Link
                  className="block w-3/4 mb-3 text-lg hover:text-pr transition-all"
                  to=""
                >
                  <i class="fa-solid fa-arrow-right"></i> MediConnect is a
                  trusted platform committed to enhancing your healthcare
                  experience with innovative solutions.
                </Link>
                <p className="font-light mb-8">
                  MediConnect simplifies healthcare access by connecting
                  patients with hospitals, clinics, and doctors. We provide
                  real-time updates, easy appointment booking, and personalized
                  recommendations through innovative technology.
                  <strong className="font-semibold">
                    Your health is our priority.
                  </strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 mb-16">
        <div
          className={`${homeCss.secfac} max-w-[75rem] mx-auto py-16 px-3 static md:relative`}
        >
          <h2 className="text-4xl text-center mb-3">Facilities</h2>
          <div className="row m-0 w-[100%] lg:w-[90%] static lg:absolute left-0 lg:left-[50%] lg:translate-x-[-50%] lg:bottom-[-35%]">
            {facilities.map((facility, index) => (
              <div key={index} className="col-lg-3 pb-2 h-[190px]">
                <div
                  className={`${homeCss.dep} shadow-md rounded-xl h-full flex flex-col justify-evenly items-center`}
                >
                  <i
                    className={`${facility.icon} block w-fit text-5xl p-2`}
                  ></i>
                  <div className="text-center">
                    <h4 className="text-lg font-medium">{facility.title}</h4>
                    <p>{facility.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <h2 className="text-center mb-5 text-4xl text-da font-semibold mt-5">
          Our Key Features
        </h2>
        <p className="text-center text-da  text-xl mb-5 mx-auto max-w-3xl">
          We Serve In Different
          <span className="font-bold ml-1 text-pr">
            {" "}
            Areas For Our Patients
          </span>
        </p>
        <div className={`${homeCss.featuers} max-w-[75rem] mx-auto row`}>
          {features.map((feature, index) => {
            return (
              <div key={index} className="col-xl-3 col-lg-3 col-md-6 col-12">
                <div
                  className={`${feature.deg} hover:rotate-0 transition-all rounded-2xl h-[420px] p-3 flex flex-col justify-around items-center text-center`}
                >
                  <i class={`${feature.icon} block text-pr text-7xl`}></i>
                  <h3 className="font-medium text-lg text-da">
                    {feature.title}
                  </h3>
                  <p>{feature.desc}</p>
                  <Link to="/userprofile" className="ourbtn">
                    Learn More
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>
      <section className="py-16">
        <div className="max-w-[75rem] mx-auto row">
          <div className="col-lg-6 col-12">
            <AppleCardsCarouselDemo />
          </div>
          <div className="py-10 col-lg-6 col-12 flex flex-col justify-center items-center">
            <img src={require("../../assets/home-mm.avif")} alt="" />
          </div>
        </div>
      </section>
      <section id="countersec" className="py-16">
        <div
          className={`${homeCss.secde} max-w-[75rem] mx-auto row flex justify-between items-center`}
        >
          {numbers.map((number, index) => {
            return (
              <div key={index} className="col-lg-3 col-md-6 col-12">
                <div
                  className={`flex justify-center items-center space-x-5 mb-2 h-[150px] rounded-md text-center`}
                >
                  <div>
                    <h2
                      data-target={number.toNum}
                      className="counter text-da text-5xl font-bold"
                    >
                      {number.num} {number.st}
                    </h2>
                    <p className="text-da">{number.title}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
      
    </>
  );
}
