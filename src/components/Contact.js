import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

const Contact = () => {
  const [formData, setFormData] = useState({
    email: "",
    fullname: "",
    inquiry: ""
  });

  const { email, fullname, inquiry } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log(formData);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formEmail">
        <Form.Label>Email:</Form.Label>
        <Form.Control
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          placeholder="Enter email"
          required
        />
      </Form.Group>
      <Form.Group controlId="formFullname">
        <Form.Label>Full Name:</Form.Label>
        <Form.Control
          type="text"
          name="fullname"
          value={fullname}
          onChange={handleChange}
          placeholder="Enter your full name"
          required
        />
      </Form.Group>
      <Form.Group controlId="formInquiry">
        <Form.Label>Inquiry:</Form.Label>
        <Form.Control
          as="textarea"
          name="inquiry"
          value={inquiry}
          onChange={handleChange}
          placeholder="Enter your inquiry"
          rows={3}
          required
        />
      </Form.Group>
      <Button variant="warning" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default Contact;
