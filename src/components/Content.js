import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

const Content = () => {
  return (
    <Container className="my-5">
      <Row>
        <Col>
          <Card>
            <Card.Img
              variant="top"
              src="https://images.pexels.com/photos/1124600/pexels-photo-1124600.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            />
            <Card.Body>
              <Card.Title>Car Title</Card.Title>
              <Card.Text>Car Description</Card.Text>
              <Button variant="primary">Learn More</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Content;
