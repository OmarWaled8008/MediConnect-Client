import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./aboutus.css"; // Make sure to create this CSS file for custom styles
import pic from "../../assets/circlescatterhaikei.svg";

const AboutUs = () => {
  const sections = [
    {
      title: "Our Mission",
      text: "At MediConnect, we are dedicated to revolutionizing healthcare access. Our mission is to make finding and managing healthcare seamless, putting your wellness at the forefront of everything we do.",
      variant: "primary",
    },
    {
      title: "Our Vision",
      text: "We envision a world where everyone can access quality healthcare easily. By combining advanced technology with compassionate care, we strive to enhance the healthcare experience for all individuals.",
      variant: "success",
    },
    {
      title: "Our Services",
      text: (
        <ul className="list-unstyled">
          <li><strong>Hospital Locator:</strong> Quickly find hospitals tailored to your specific needs.</li>
          <li><strong>Appointment Booking:</strong> Effortlessly schedule appointments and receive instant confirmations.</li>
          <li><strong>Telemedicine Services:</strong> Enjoy virtual consultations and have prescriptions delivered.</li>
          <li><strong>Patient Reviews:</strong> Read reviews that guide others in their healthcare decisions.</li>
        </ul>
      ),
      variant: "info",
    },
    {
      title: "Get in Touch",
      text: (
        <>
          <p>
            We value your feedback. For inquiries, please contact us through our{" "}
            <a href="#contact" className="text-primary">Contact Page</a>.
          </p>
          <p>
            <strong>Join Us on This Journey</strong>
            <br />
            Together, we can improve healthcare accessibility and effectiveness.
          </p>
        </>
      ),
      variant: "secondary",
    },
    {
      title: "Become a Sponsor",
      text: (
        <>
          <p>
            We invite organizations to support our mission of improving healthcare access. Sponsoring MediConnect aligns your brand with a platform dedicated to wellness.
          </p>
          <p>As a sponsor, you can benefit from:</p>
          <ul className="list-unstyled">
            <li><strong>Increased Visibility:</strong> Gain exposure through our website.</li>
            <li><strong>Brand Alignment:</strong> Associate your brand with a trusted healthcare resource.</li>
            <li><strong>Community Impact:</strong> Enhance healthcare services and patient experiences.</li>
          </ul>
          <p>
            For more information, please{" "}
            <a href="#contact" className="text-primary">contact us</a>. We look forward to partnering with you.
          </p>
        </>
      ),
      variant: "danger",
    },
    {
      title: "Our Future",
      text: (
        <>
          <p>
            We’re just getting started! At MediConnect, we aim to expand our platform to include more services.
          </p>
          <ul className="list-unstyled">
            <li><strong>Additional Branches:</strong> New locations for localized support.</li>
            <li><strong>Enhanced Features:</strong> Cutting-edge technologies for better user experience.</li>
            <li><strong>Partnerships:</strong> Collaborating with more healthcare providers.</li>
            <li><strong>Community Engagement:</strong> Hosting events to connect with users.</li>
          </ul>
          <p>
            Stay tuned for updates as we grow and evolve, aiming to impact the healthcare landscape positively.
          </p>
        </>
      ),
      variant: "dark",
    },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center py-10 relative">
      <div className="absolute top-0 left-0 w-full h-auto justify-center">
        <img
          src={pic}
          alt="Background Design"
          className="w-full object-cover h-64"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-da mt-2">
          <h1 className="text-5xl font-bold">About Us</h1>
          <p className="text-lg mt-1">Your trusted partner in healthcare.</p>
        </div>
      </div>
      <div className="w-full max-w-4xl bg-white p-10 rounded-lg shadow-md z-10 relative mt-40">
        <Container className="guides-container mt-3">
          <Row>
            {sections.map((section, index) => (
              <Col md={6} lg={4} className="mb-4" key={index}>
                <Card className={`h-100 shadow border-0 custom-card text-white bg-${section.variant}`}>
                  <Card.Body>
                    <Card.Title className="text-uppercase fw-bold">{section.title}</Card.Title>
                    <Card.Text>
                      {typeof section.text === "string" ? section.text : section.text}
                    </Card.Text>
                    <Button variant="light" href="#">
                      Learn More
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default AboutUs;
