import React, { useState, useEffect } from "react";
import { BsFillCollectionFill } from "react-icons/bs";
import { IconContext } from "react-icons";
import classNames from "classnames";

import styles from "./Statsbox.module.css";

import { Card, Row, Col } from "react-bootstrap";

export const Statbox = () => {
  const [passInput, setPassInput] = useState("");

  useEffect(() => {
    const { passInput } = "";

    setPassInput(passInput);
  }, [passInput]);

  const buttonActionPost = (e, url) => {};

  const buttonAction = (e, url) => {};
  const {
    card_stats,
    info_icon,
    text_center,
    icon_warning,
    numbers,
    card_category,
    react_icon,
  } = styles;
  return (
    <div>
      <Card className={card_stats}>
        <Card.Body>
          <Row>
            <Col xs="5">
              <div>
                <BsFillCollectionFill size="1.7em" className={react_icon} />
              </div>
            </Col>
            <Col xs="7">
              <div className={numbers}>
                <p className={card_category}>Sensors</p>
                <Card.Title tag="h3">2000</Card.Title>
              </div>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </div>
  );
};

Statbox.defaultProps = {
  chartTitle: "Chart",
};
