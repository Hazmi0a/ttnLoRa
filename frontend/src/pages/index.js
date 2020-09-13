import React from "react";
import {
  Link as ChakraLink,
  Text,
  Code,
  Icon,
  List,
  ListIcon,
  ListItem,
  Box,
  Grid,
} from "@chakra-ui/core";
import { Container, Row, Col } from "react-bootstrap";
import { Line, Bar, Pie } from "react-chartjs-2";

import { Hero } from "../components/Hero";
// import { Container } from "../components/Container";
import { Main } from "../components/Main";
import { DarkModeSwitch } from "../components/DarkModeSwitch";
import { CTA } from "../components/CTA";
import { Footer } from "../components/Footer";
import { Chartbox } from "../components/Chartbox/Chartbox";
import Navbar from "../components/Navbar";
import { Header } from "../components/Header/Header";
import { Tableavg } from "../components/Table/Table";
import { Statbox } from "../components/Statsbox/Statsbox";
import makeData from "../components/Table/makeData";
import {
  chartExample5,
  chartExample6,
  chartExample7,
  chartExample8,
  chartExample9,
  chartExample10,
} from "../components/variables/charts";

const data = makeData(20);
const Index = () => (
  <>
    <Header />
    <Container fluid>
      <Row>
        <Col>
          <Chartbox chart={chartExample5} />
        </Col>
        <Col>
          <Chartbox chart={chartExample5} />
        </Col>
        <Col>
          <Chartbox chart={chartExample5} />
        </Col>
        <Col>
          <Chartbox chart={chartExample5} />
        </Col>
      </Row>
      <br />
      <Row>
        <Col lg={3}>
          <Statbox />
        </Col>
        <Col lg={3}>
          <Statbox title="Warnings" stat="36" />
        </Col>
        <Col lg={3}>
          <Statbox title="Offline" stat="5" />
        </Col>
        <Col lg={3}>
          <Statbox title="Data Size" stat="150GB" />
        </Col>
      </Row>
      <br />
      <Row>
        <Col>
          <Tableavg data={data} />
        </Col>
        <Col>
          <Tableavg data={data} />
        </Col>
      </Row>
    </Container>
    <DarkModeSwitch />
    <Footer></Footer>
  </>
);

export default Index;
