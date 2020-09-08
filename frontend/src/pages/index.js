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
import { Cardbox } from "../components/Cardbox/Cardbox";
import Navbar from "../components/Navbar";
import { Header } from "../components/Header/Header";
import Tableavg from "../components/Table/Table";
import {
  chartExample5,
  chartExample6,
  chartExample7,
  chartExample8,
  chartExample9,
  chartExample10,
} from "../components/variables/charts";

const Index = () => (
  <>
    <Header />
    <Container fluid>
      <Row>
        <Col xs={3}>
          <Cardbox chart={chartExample5} />
        </Col>
        <Col xs={3}>
          <Cardbox chart={chartExample5} />
        </Col>
        <Col xs={3}>
          <Cardbox chart={chartExample5} />
        </Col>
        <Col xs={3}>
          <Cardbox chart={chartExample5} />
        </Col>
      </Row>
      <Row>
        <Col xs={3}>
          <Tableavg></Tableavg>
        </Col>
      </Row>
    </Container>
    <DarkModeSwitch />
    <Footer></Footer>
  </>
);

export default Index;
