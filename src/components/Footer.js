import React from "react";
import { Container } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-3">
      <Container>
        <p className="text-center">
          Copyright &copy; 2023
          <br />
          Cenando Mateo
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
