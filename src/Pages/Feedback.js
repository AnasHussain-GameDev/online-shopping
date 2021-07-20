import React from "react";
import { Form } from "react-bootstrap";

const Feedback = () => {
  return (
    <div className="container align-center pb-4 rounded-3 bg-dark text-secondary">
      <h1 className=" m-3 text-center">FeedBack</h1>
      <Form className="m-4 ">
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            className="mx"
            type="email"
            placeholder="name@example.com"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>FeedBack</Form.Label>
          <Form.Control className="p-4" as="textarea" rows={2} />
        </Form.Group>
      </Form>
    </div>
  );
};

export default Feedback;
