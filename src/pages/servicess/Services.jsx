import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

const Services = () => {
  return (
    <Container className="services-container">
      <h1 className="text-center my-5">Our Key Features</h1>
      <p className="text-center mb-5">
        We Serve In Different Areas For Our Patients
      </p>
      <Row className="mb-4">
        <Col md={6} lg={3} className="mb-4">
          <Card className="h-100">
            <Card.Body>
              <Card.Title>Hospital Locator</Card.Title>
              <Card.Text>
                Find nearby hospitals quickly and easily using our interactive
                map and advanced search filters. Whether you're looking for a
                specific specialization, rating, or insurance compatibility, our
                locator helps you find the best fit for your needs.
              </Card.Text>
              <Button variant="primary" href="#">
                Learn More
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} lg={3} className="mb-4">
          <Card className="h-100">
            <Card.Body>
              <Card.Title>Appointment Booking</Card.Title>
              <Card.Text>
                Book appointments with top-rated doctors at your convenience.
                Our platform allows you to view real-time availability, choose
                preferred dates, and receive instant confirmation. Manage all
                your bookings in one place, making healthcare more accessible.
              </Card.Text>
              <Button variant="primary" href="#">
                Learn More
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} lg={3} className="mb-4">
          <Card className="h-100">
            <Card.Body>
              <Card.Title>Telemedicine Services</Card.Title>
              <Card.Text>
                Access healthcare from the comfort of your home with our secure
                telemedicine services. Schedule video consultations, chat with
                healthcare providers, and get prescriptions delivered directly
                to your door. It's healthcare on your terms.
              </Card.Text>
              <Button variant="primary" href="#">
                Learn More
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} lg={3} className="mb-4">
          <Card className="h-100">
            <Card.Body>
              <Card.Title>Patient Reviews</Card.Title>
              <Card.Text>
                Make informed decisions with the help of our comprehensive
                patient review system. Read genuine feedback from other
                patients, share your own experiences, and help improve the
                quality of care by choosing the best healthcare providers.
              </Card.Text>
              <Button variant="primary" href="#">
                Learn More
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="mb-4">
        <Col md={6} lg={3} className="mb-4">
          <Card className="h-100">
            <Card.Body>
              <Card.Title>Our Doctors</Card.Title>
              <Card.Text>
                Connect with top-rated doctors from various specialties. View
                detailed profiles, check availability, and book appointments
                with ease. Our platform ensures you find the right doctor to
                meet your healthcare needs.
              </Card.Text>
              <Button variant="primary" href="#">
                Learn More
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} lg={3} className="mb-4">
          <Card className="h-100">
            <Card.Body>
              <Card.Title>Emergency Services</Card.Title>
              <Card.Text>
                Get immediate assistance with our emergency services. Our
                network of hospitals and doctors is ready to provide urgent care
                whenever you need it. Your health and safety are our top
                priority.
              </Card.Text>
              <Button variant="primary" href="#">
                Learn More
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} lg={3} className="mb-4">
          <Card className="h-100">
            <Card.Body>
              <Card.Title>Health Tips</Card.Title>
              <Card.Text>
                Stay informed with our latest health tips and articles. Our
                experts share valuable insights on various health topics to help
                you lead a healthier life.
              </Card.Text>
              <Button variant="primary" href="#">
                Learn More
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} lg={3} className="mb-4">
          <Card className="h-100">
            <Card.Body>
              <Card.Title>Insurance Compatibility</Card.Title>
              <Card.Text>
                Find healthcare providers and hospitals that accept your
                insurance. Our platform helps you navigate insurance options and
                choose the best care that fits your coverage.
              </Card.Text>
              <Button variant="primary" href="#">
                Learn More
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Services;
