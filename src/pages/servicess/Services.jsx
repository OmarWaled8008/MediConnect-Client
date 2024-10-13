import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import './Services.css';
import pic from "../../assets/circlescatterhaikei.svg";

const Services = () => {
  return (
    <div className="min-h-screen flex items-center justify-center py-10 relative">
      <div className="absolute top-0 left-0 w-full h-auto justify-center">
        <img
          src={pic}
          alt="Background Design"
          className="w-full object-cover h-64"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-da mt-2">
          <h1 className="text-5xl font-bold">Our Key Features</h1>
          <p className="text-lg mt-1">We Serve In Different Areas For Our Patients.</p>
        </div>
      </div>

      <div className="w-full max-w-4xl bg-white p-10 rounded-lg shadow-md z-10 relative mt-40">
        <Container className="guides-container mt-3">
          <Row>
            {["Hospital Locator", "Appointment Booking", "Telemedicine Services", "Patient Reviews", "Our Doctors", "Emergency Services"].map((title, index) => (
              <Col md={6} lg={4} className="mb-4" key={index}>
                <Card className="h-100 shadow border-0 custom-card">
                  <Card.Body>
                    <Card.Title className="text-uppercase fw-bold">{title}</Card.Title>
                    <Card.Text>
                      {index === 0 && "Find nearby hospitals quickly and easily using our interactive map and advanced search filters."}
                      {index === 1 && "Book appointments with top-rated doctors at your convenience."}
                      {index === 2 && "Access healthcare from the comfort of your home with our secure telemedicine services."}
                      {index === 3 && "Make informed decisions with the help of our comprehensive patient review system."}
                      {index === 4 && "Connect with top-rated doctors from various specialties."}
                      {index === 5 && "Get immediate assistance with our emergency services."}
                    </Card.Text>
                    <Button variant="primary" href="#">
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

export default Services;
