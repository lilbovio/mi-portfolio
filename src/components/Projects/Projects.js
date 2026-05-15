import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import catbot from "../../Assets/Projects/catbot.png";
import MyChangarro from "../../Assets/Projects/MyChangarro.png";
import Apprender from "../../Assets/Projects/Apprender.png";
import OnboardIQ from "../../Assets/Projects/OnboardIQ.png";

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
              imgPath={MyChangarro}
              isBlog={false}
              title="MiChangarro"
              description="Web application initially developed as a school project, but after being presented at various technology fairs, we took on the task of improving it and implementing new technologies. MiChangarro aims to make small and emerging businesses known to people near them to connect more with their own community."
              ghLink="https://github.com/lilbovio/mychangarro"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Apprender}
              isBlog={false}
              title="Apprender"
              description="Web application developed specifically for elementary school children from first to sixth grade to reinforce their knowledge in mathematics and English with a simple and intuitive interface, in addition to implementing a gamification system to motivate children to continue learning."
              ghLink="https://github.com/lilbovio/ApPrender"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={OnboardIQ}
              isBlog={false}
              title="OnboardIQ"
              description="OnboardIQ is a platform developed to solve HPE's internal problem of onboarding and training new people entering the development team. Pain points were reviewed and the solution was built from scratch."
              ghLink="https://github.com/lilbovio/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={catbot}
              isBlog={false}
              title="Multifunctional Discord Bot"
              description="Catbot was entirely a project created for fun and out of necessity for me and my friends. We didn't want our gaming and chatting server to have 20 bots for different functions, so the idea of creating Cat-Bot came about, improving the use of so many bots by making it just one. Seeing that the idea and the bot were improving, I decided to go public, letting the bot grow to reach more than 100+ servers where it is currently used!"
              ghLink="https://github.com/lilbovio/catbot2/"
            // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
