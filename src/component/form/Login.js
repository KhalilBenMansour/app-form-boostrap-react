import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
const Login = () => {
  return (
    <Container>
      <Row>
        <Col>
          <h1 className="text-info">Client Login</h1>
          <hr />
          <Form>
            <Form.Group>
              <Form.Label>UserName</Form.Label>
              <Form.Control
                type="text"
                name="username"
                placeholder="Username "
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="text"
                name="phone"
                placeholder="Phone Number "
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="Enter email"
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                placeholder="Enter password"
                required
              />
            </Form.Group>
            <Button className="mt-3" type="submit">
              Login
            </Button>
          </Form>
          <hr />
        </Col>
      </Row>
      <Row>
        <Col>
          <a href="#!">Forget Password?</a>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
