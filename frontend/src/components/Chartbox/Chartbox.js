import React, { useState, useEffect } from "react";
import { Line, Bar, Pie } from "react-chartjs-2";
import Link from "next/link";
import styles from "./Chartbox.module.css";

import {
  FormControl,
  Button,
  Card,
  InputGroup,
  Row,
  Col,
} from "react-bootstrap";

export const Chartbox = ({ chartTitle, chart }) => {
  const [passInput, setPassInput] = useState("");

  useEffect(() => {
    const { passInput } = "";

    setPassInput(passInput);
  }, [passInput]);

  const buttonActionPost = (e, url) => {};

  const buttonAction = (e, url) => {};

  const { card_chart, chart_area } = styles;

  return (
    <div>
      <Link href={"/stat/" + chartTitle}>
        <Card className={card_chart}>
          <Card.Body>
            <Card.Title tag="h2">{chartTitle}</Card.Title>
            <div className={chart_area}>
              <Line data={chart.data} options={chart.options} />
            </div>
          </Card.Body>
        </Card>
      </Link>
    </div>
  );
};

Chartbox.defaultProps = {
  chartTitle: "Chart",
};
