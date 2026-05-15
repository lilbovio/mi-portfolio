import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Juan Pablo Bovio Vallejo </span>
            from <span className="purple"> Jalisco, Mexico.</span>
            <br />
            I am currently pursuing an Engineering degree in Computer Science at UdeG.
            <br />
            I'm proud to say I completed a technical high school program in Software Design where
            I acquired a lot of the knowledge I have today!
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Series
            </li>
            <li className="about-activity">
              <ImPointRight /> Doing Sports
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "If you can imagine it, you can program it!"{" "}
          </p>
          <footer className="blockquote-footer">Alejandro Taboada</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
