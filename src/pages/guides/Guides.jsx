import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./Guides.css";
import pic from "../../assets/circlescatterhaikei.svg";

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
    <div className="min-h-screen flex items-center justify-center py-10 relative">
    <div className="absolute top-0 left-0 w-full h-auto justify-center">
      <img
        src={pic}
        alt="Background Design"
        className="w-full object-cover h-64"
      />

      <div className="absolute inset-0 flex flex-col items-center justify-center text-da mt-2">
        <h1 className="text-5xl font-bold">Guides</h1>
        <p className="text-lg mt-1">Helpful resources to empower your healthcare journey.</p>
      </div>
    </div>

 <div className="w-full max-w-4xl bg-white p-10 rounded-lg shadow-md z-10 relative mt-40">
      <Container className="guides-container mt-3"> {/* Added mt-3 for margin-top */}
        <Row>
          {guideData.map((guide, index) => (
            <Col md={6} lg={4} className="mb-4" key={index}>
              <Card className="h-100 shadow border-0">
                <Card.Body>
                  <Card.Title className="text-uppercase fw-bold">{guide.title}</Card.Title>
                  <Card.Text className="mb-4">{guide.description}</Card.Text>
                  <Card.Link href={guide.link} className="btn btn-primary">Read More</Card.Link>
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

export default Guides;
