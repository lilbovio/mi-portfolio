import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hola a todos! Soy <span className="purple">Juan Pablo Bovio Vallejo </span>
            de <span className="purple"> Jalisco, Mexico.</span>
            <br />
            Actualmente me encuentro cursando la ingenieria en Ciencias computacionales en la UdeG.
            <br />
            Me siento orgulloso de decir que curse la preparatoria tecnica en Diseño de software donde
            adquiri demasidado del conocimiento que poseo hoy en dia!
            <br />
            <br />
            Aparte de programar, me gusta realizar otras actividades! Por ejemplo:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Jugar videojuegos
            </li>
            <li className="about-activity">
              <ImPointRight /> Ver series
            </li>
            <li className="about-activity">
              <ImPointRight /> Hacer deporte
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Si puedes imaginarlo, puedes programarlo!"{" "}
          </p>
          <footer className="blockquote-footer">Alejandro Taboada</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
