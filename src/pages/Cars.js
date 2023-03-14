import { Container, Row, Col, Image } from "react-bootstrap";

const Cars = () => {
  return (
    <Container className="my-5">
      <h1>Car Details</h1>
      <Row className="my-5">
        <Col md={6}>
          <Image
            src="https://images.pexels.com/photos/575386/pexels-photo-575386.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            fluid
          />
        </Col>
        <Col md={6}>
          <h2>2022 Chevrolet Corvette Stingray</h2>
          <p>
            The 2022 Chevrolet Corvette Stingray is a two-seater sports car that
            delivers impressive performance with its 6.2-liter V8 engine,
            producing 495 horsepower and 470 lb-ft of torque. It can accelerate
            from 0-60 mph in just 2.9 seconds and has a top speed of 194 mph.
          </p>
          <p>
            The car also features a sleek and modern design, with a low profile
            and aerodynamic curves. It has a spacious and comfortable interior
            with high-quality materials and advanced technology, such as a large
            touchscreen display and a Bose sound system.
          </p>
          <p>
            Overall, the 2022 Chevrolet Corvette Stingray is a powerful and
            stylish sports car that offers an exhilarating driving experience.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Cars;
