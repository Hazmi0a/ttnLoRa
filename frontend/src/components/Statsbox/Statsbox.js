import React, { useState, useEffect } from "react";
import Link from "next/link";
import { BsFillCollectionFill } from "react-icons/bs";
import { IconContext } from "react-icons";
import classNames from "classnames";

import styles from "./Statsbox.module.css";

import { Card, Row, Col } from "react-bootstrap";

export const Statbox = ({ title, stat }) => {
  const [passInput, setPassInput] = useState("");

  useEffect(() => {
    const { passInput } = "";

    setPassInput(passInput);
  }, [passInput]);

  const buttonActionPost = (e, url) => {};

  const buttonAction = (e, url) => {};
  const {
    card_stats,

    numbers,
    overlay,
    card_category,
    react_icon,
  } = styles;
  return (
    <div>
      <Link href={"/stat/" + title}>
        <Card className={card_stats}>
          <Card.Body>
            <Row>
              <div className={overlay}></div>
              <Col xs="4">
                <div className={react_icon}>
                  <BsFillCollectionFill size="2.5em" />
                </div>
              </Col>
              <Col xs="7">
                <div className={numbers}>
                  <p className={card_category}>{title}</p>
                  <Card.Title tag="h3">{stat}</Card.Title>
                </div>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Link>
    </div>
  );
};

Statbox.defaultProps = {
  title: "Sensors",
  stat: "2000",
};
