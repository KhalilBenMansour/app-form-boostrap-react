import React from "react";
import { Card } from "react-bootstrap";
import "./FormPage.css";
import Login from "./Login";
const FormPage = () => {
  return (
    <div className="form-page bg-info">
      <Card className="form-box">
        <Card.Body>
          <Login />
        </Card.Body>
      </Card>
    </div>
  );
};

export default FormPage;
