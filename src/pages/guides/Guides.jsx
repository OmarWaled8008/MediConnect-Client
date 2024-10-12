import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./Guides.css";

const Guides = () => {
  const guideData = [
    {
      title: "How to Choose the Right Hospital",
      description:
        "Learn key factors to consider when selecting a hospital, including location, specialization, and patient reviews.",
      link: "#",
    },
    {
      title: "Understanding Telemedicine",
      description:
        "Discover how telemedicine works, its benefits, and how to schedule virtual consultations with healthcare providers.",
      link: "#",
    },
    {
      title: "Navigating Health Insurance",
      description:
        "Get tips on understanding your health insurance plan, including coverage details and claim submission.",
      link: "#",
    },
    {
      title: "Preparing for Your Doctor's Appointment",
      description:
        "Find out how to prepare for your appointment to make the most of your visit and ensure you receive the best care.",
      link: "#",
    },
    {
      title: "Managing Chronic Conditions",
      description:
        "Explore strategies for effectively managing chronic conditions through lifestyle changes and regular check-ups.",
      link: "#",
    },
    {
      title: "Staying Healthy: Preventative Care Tips",
      description:
        "Learn about preventative care and how regular screenings can help maintain your health.",
      link: "#",
    },
  ];

  return (
    <Container className="guides-container">
      <h1 className="text-center my-5">Guides</h1>
      <p className="text-center mb-5">
        Helpful resources to empower your healthcare journey.
      </p>
      <Row>
        {guideData.map((guide, index) => (
          <Col md={6} lg={4} className="mb-4" key={index}>
            <Card className="h-100">
              <Card.Body>
                <Card.Title>{guide.title}</Card.Title>
                <Card.Text>{guide.description}</Card.Text>
                <Card.Link href={guide.link}>Read More</Card.Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Guides;
