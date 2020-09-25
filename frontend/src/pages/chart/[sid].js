import { useRouter } from "next/router";

import { Container, Row, Col } from "react-bootstrap";
import { Chartbox } from "../../components/Chartbox/Chartbox";
import { chartExample6 } from "../../components/variables/charts";
import { SensorTable } from "../../components/SensorTable/SensorTable";

import makeData from "../../components/SensorTable/makeData";
const data = makeData(20);
const Chart = () => {
  const router = useRouter();
  const { sid } = router.query;

  return (
    <Container fluid>
      <Row>
        <Col>
          <Chartbox chartTitle={sid} chart={chartExample6}></Chartbox>{" "}
        </Col>
      </Row>
      <br />
      <Row>
        <Col>
          <SensorTable data={data} />
        </Col>
      </Row>
    </Container>
  );
};

Chart.defaultProps = {
  sid: '123"',
};

export default Chart;
