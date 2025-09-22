import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              DEJAME <span className="purple"> DARTE MI BREVE </span> INTRODUCCION
            </h1>
            <p className="home-about-body">
              Empece a programar desde que tenia 12 años, de ahi en adelante creo que 
              la vida me ha dado oportunidades de seguir mejorando! 🚀🚀
              <br />
              <br />Soy bueno programando en lenguajes basicos como
              <i>
                <b className="purple"> C++, Javascript, Java y Python </b>
              </i>
              <br />
              <br />
              Mi rama de interes actualmente es&nbsp;
              <i>
                <b className="purple">Tecnologias web siendo fullstack </b> y algunas
                areas relacionadas a{" "}
                <b className="purple">
                  Ciberseguridad.
                </b>
              </i>
              <br />
              <br />
              Siempre que me es posible desarrollo proyectos personales de gusto propio
              con <b className="purple">Node.js</b> y
              <i>
                <b className="purple">
                  {" "}
                  Librerias de Javascript y Frameworks
                </b>
              </i>
              &nbsp; como
              <i>
                <b className="purple"> React.js y Next.js</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>AGREGAME !</h1>
            <p>
              Sientete libre de <span className="purple">conectar </span>conmigo
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/lilbovio"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/juan-pablo-bovio-vallejo-/763924353"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/lilpuzziv3rt/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
