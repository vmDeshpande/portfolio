import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import jobify from "../../Assets/Projects/jobify.png";
import ecom from "../../Assets/Projects/e-comchatbot.png";
import egram from "../../Assets/Projects/digital egram.png";
import engironment from "../../Assets/Projects/engironment.png";
import harmfulurl from "../../Assets/Projects/harmfulurl.png";
import hospital from "../../Assets/Projects/hospital.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={harmfulurl}
              isBlog={false}
              title="Harmful URL Detector"
              description="URL Scanner is a simple web application that checks the safety of URLs using the VirusTotal API. It stores the results in a MongoDB database to avoid redundant checks for the same URL."
              ghLink="https://github.com/vmDeshpande/HarmfulURLDetector"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={engironment}
              isBlog={false}
              title="Environmental Data Analyst "
              description="This project is a weather application that provides real-time weather information based on user input. It also includes a feedback system where users can submit their feedback, which is then stored in a MongoDB database."
              ghLink="https://github.com/vmDeshpande/ENVIRONMENT_DATA_ANALYSIS"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={jobify}
              isBlog={false}
              title="Jobify"
              description="This project is a Job Application System that allows companies to post job listings and receive applications from potential candidates."
              ghLink="https://github.com/vmDeshpande/JOBIFY"      
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ecom}
              isBlog={false}
              title="ECommerce Chatbot"
              description="The ECommerce Chatbot is designed to enhance online shopping experiences, offering users the ability to query products, get recommendations, and resolve common issues through an intuitive chat interface. Built with HTML, CSS, JavaScript, Node.js, and MongoDB, this project aims to demonstrate how chatbots can improve customer service and engagement in an eCommerce setting."
              ghLink="https://github.com/vmDeshpande/ECommerce-Chatbot"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hospital}
              isBlog={false}
              title="Hospital Management System"
              description="A simple Hospital Management System implemented using HTML, CSS, JavaScript (Node.js with Express), and MongoDB."
              ghLink="https://github.com/vmDeshpande/Hospital-management-system"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={egram}
              isBlog={false}
              title="Digital E Gram Panchayat"
              description="The major goal of this project is to improve the delivery of citizen services in the village by computerizing applications for gram panchayat services. Gram panchayat is a decentralized institution that manages applications and provides information about gram panchayat services. The suggested system will allow users to submit applications for various services and track their progress. The suggested system E-Services for Gram Panchayath develops a web application with the goal of providing government information about services or schemes, and public users can apply for services using an online application. Admin and staff will manage the application for approval and creation of the scheme."
              ghLink="https://github.com/vmDeshpande/Digital-E-Gram-Panchayat"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
