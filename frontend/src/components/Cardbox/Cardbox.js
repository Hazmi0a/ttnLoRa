import React, { useState, useEffect } from "react";
import { Line, Bar, Pie } from "react-chartjs-2";

import "./Cardbox.module.css";

import {
  FormControl,
  Button,
  Card,
  InputGroup,
  Row,
  Col,
} from "react-bootstrap";

export const Cardbox = ({ chartTitle, chart }) => {
  const [passInput, setPassInput] = useState("");

  useEffect(() => {
    const { passInput } = "";

    setPassInput(passInput);
  }, [passInput]);

  const buttonActionPost = (e, url) => {};

  const buttonAction = (e, url) => {};

  return (
    <div>
      <Card className="card-chart">
        <Card.Body>
          <Card.Title tag="h2">{chartTitle}</Card.Title>
          <div className="chart-area">
            <Line data={chart.data} options={chart.options} />
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

Cardbox.defaultProps = {
  chartTitle: "Chart",
};
