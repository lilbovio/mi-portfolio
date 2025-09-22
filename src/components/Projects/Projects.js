import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import catbot from "../../Assets/Projects/catbot.png";
import MyChangarro from "../../Assets/Projects/MyChangarro.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Mis recientes <strong className="purple"> trabajos </strong>
        </h1>
        <p style={{ color: "white" }}>
          Aqui estan algunos de los proyectos con los que he trabajado ultimamente.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={MyChangarro}
              isBlog={false}
              title="MiChangarro"
              description="Aplicacion web desarrollada inicialmente como proyecto escolar pero que la idea al ser presentada en varias ferias de tecnologias se dio a la tarea de mejorar e ir implementando nuevs tecnologias, MIChangarro busca dar a conocer a negocios pequeños y emergentes a las personas cerca de ellos para poder conectar mas con tu propia comunidad"
              ghLink="https://github.com/lilbovio/mychangarro"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={catbot}
              isBlog={false}
              title="Discord bot multifunciones"
              description="Catbot fue totalmente un proyecto creado por diversion y por necesidad mia y de mis amigos, no queriamos que nuestro servidor para jugar y charlar tuviera 20 bots para funciones distintas asi que fue la idea de creacion de Cat-Bot, mejorar el uso de tantos bots
              haciendolo solo uno, al ver que la idea y el bot mejoraban decidi irme publico dejando que el bot creciera hasta llegar a mas de 100+ servidores donde se usa actualmente!"
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
