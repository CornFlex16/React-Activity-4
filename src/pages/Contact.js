import { useState } from "react";
import { Form, Button } from "react-bootstrap";

const Contact = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [inquiry, setInquiry] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // You can add code to submit the form data to a backend here
    console.log(fullName, email, inquiry);
    setFullName("");
    setEmail("");
    setInquiry("");
  };

  return (
    <div className="text-center">
      <h1>Contact Me</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="fullName">
          <Form.Label>Full Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your full name"
            value={fullName}
            onChange={(event) => setFullName(event.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="inquiry">
          <Form.Label>Inquiry</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Enter your inquiry"
            value={inquiry}
            onChange={(event) => setInquiry(event.target.value)}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Contact;
