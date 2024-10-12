import React from "react";
import { Link } from "react-router-dom";
import footerCSS from "./footer.module.css";

export default function Footer() {
  return (
    <footer className="bd-footer">
      <div
        className={` ${footerCSS.container} p-5 text-light max-w-[90rem] mx-auto bg-da`}
      >
        <div className="row justify-between items-center">
          <div className="col-lg-3 col-sm-12 mb-3">
            <Link
              to="/home"
              className={` text-transparent bg-clip-text text-4xl font-medium tracking-wide`}
              style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.3)" }}
            >
              <h1 className="text-3xl font-semibold">
                <span className="text-white">Medi</span>
                <span className="text-pr">Connect</span>
              </h1>
            </Link>
            <ul
              className={`
               list-unstyled text-sm font-extralight mt-3`}
            >
              <li className="mb-2">
                Designed and built with all the care in the world for your
                mental wellness.
              </li>
              <li className="mb-2">
                All content is licensed under{" "}
                <a
                  className="hover:text-pr hover:underline transition"
                  href="https://creativecommons.org/licenses/by/3.0/"
                  target="_blank"
                  rel="license noopener"
                >
                  CC BY 3.0
                </a>
                .
              </li>
              <li className="mb-2">Currently v1.0.0.</li>
            </ul>
          </div>
          <div className="col-lg-8 col-sm-12 row justify-between">
            <div className="col-6 col-lg-3 mb-3">
              <h5 className="text-lg font-medium mb-2 text-pr">Quick Links</h5>
              <ul className="list-unstyled text-sm font-normal">
                <li className="mb-2">
                  <Link
                    className="hover:text-pr hover:underline transition"
                    to="/"
                  >
                    Home
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    className="hover:text-pr hover:underline transition"
                    to="/about"
                  >
                    About Us
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    className="hover:text-pr hover:underline transition"
                    to="/services"
                  >
                    Services
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    className="hover:text-pr hover:underline transition"
                    to="/contactus"
                  >
                    Contact Us
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    className="hover:text-pr hover:underline transition"
                    to="/blog"
                  >
                    Blog
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-6 col-lg-3 mb-3">
              <h5 className="text-lg font-medium mb-2 text-pr">Resources</h5>
              <ul className="list-unstyled text-sm font-normal">
                <li className="mb-2">
                  <Link
                    className="hover:text-pr hover:underline transition"
                    to="/guides"
                  >
                    Guides
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    className="hover:text-pr hover:underline transition"
                    to="/faqs"
                  >
                    FAQ
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    className="hover:text-pr hover:underline transition"
                    to="/terms"
                  >
                    Terms of Service
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    className="hover:text-pr hover:underline transition"
                    to="/privacy"
                  >
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>

            <div className="col-6 col-lg-3 mb-3">
              <h5 className="text-lg font-medium mb-2 text-pr">Connect</h5>
              <ul className="list-unstyled text-sm font-normal flex space-x-3">
                <li>
                  <Link
                    className="hover:text-pr hover:underline transition"
                    to="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                  >
                    <i className="fab fa-facebook text-p text-xl"></i>
                  </Link>
                </li>
                <li>
                  <Link
                    className="hover:text-pr hover:underline transition"
                    to="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Twitter"
                  >
                    <i className="fab fa-twitter text-p text-xl"></i>
                  </Link>
                </li>
                <li>
                  <Link
                    className="hover:text-pr hover:underline transition"
                    to="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                  >
                    <i className="fab fa-instagram text-p text-xl"></i>
                  </Link>
                </li>
                <li>
                  <Link
                    className="hover:text-pr hover:underline transition"
                    to="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                  >
                    <i className="fab fa-linkedin text-p text-xl"></i>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
