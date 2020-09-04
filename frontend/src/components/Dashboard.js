/*!

=========================================================
* Black Dashboard PRO React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-pro-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react plugin used to create charts
import {Line, Bar} from "react-chartjs-2";
import "chartjs-plugin-streaming";
// react plugin for creating vector maps
import KeyRate from "./keyRate"
// reactstrap components
import {
    Button,
    ButtonGroup,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    CardTitle,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    UncontrolledDropdown,
    Label,
    FormGroup,
    Input,
    Progress,
    Table,
    Row,
    Col,
    UncontrolledTooltip
} from "reactstrap";

// core components
import {keyRateData, qberData} from "variables/charts.js";

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            keysMatched: 1,
            keysCreated: 1944,
            keysDetected: 1806,
            count: 0
        };
    }

    render() {
        const {keysMatched, keysCreated, keysDetected} = this.state;

        return (
            <>
                <div className="content">
                    <Row>
                        <Col xs="12">
                            <Card className="card-chart">
                                <CardHeader>
                                    <Row>
                                        <Col className="text-left" sm="6">
                                            <h5 className="card-category">QKD System</h5>
                                            <CardTitle tag="h2">QBER</CardTitle>
                                        </Col>
                                        <Col sm="6"></Col>
                                    </Row>
                                </CardHeader>
                                <CardBody>
                                    <div className="chart-area">
                                        <Line data={
                                                qberData.data
                                            }
                                            options={
                                                qberData.options
                                            }/>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col lg="3" md="6">
                            <KeyRate/>
                        </Col>
                        <Col lg="3" md="6">
                            <Card className="card-stats">
                                <CardBody>
                                    <Row>
                                        <Col xs="5">
                                            <div className="info-icon text-center icon-primary">
                                                <i className="tim-icons icon-alert-circle-exc"/>
                                            </div>
                                        </Col>
                                        <Col xs="7">
                                            <div className="numbers">
                                                <p className="card-category">QBER threshold</p>
                                                <CardTitle tag="h2">%11</CardTitle>
                                            </div>
                                        </Col>
                                    </Row>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col lg="3" md="6">
                            <Card className="card-stats">
                                <CardBody>
                                    <Row>
                                        <Col xs="5">
                                            <div className="info-icon text-center icon-success">
                                                <i className="tim-icons icon-link-72"/>
                                            </div>
                                        </Col>
                                        <Col xs="7">
                                            <div className="numbers">
                                                <p className="card-category">Key Length</p>
                                                <CardTitle tag="h3">
                                                    {
                                                    keysMatched == 0 || keysMatched == undefined ? (
                                                        <div class="spinner-border " role="status">
                                                            <span class="sr-only">Loading...</span>
                                                        </div>
                                                    ) : ("256 Bit")
                                                } </CardTitle>
                                            </div>
                                        </Col>
                                    </Row>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col lg="3" md="6">
                            <Card className="card-stats">
                                <CardBody>
                                    <Row>
                                        <Col xs="5">
                                            <div className="info-icon text-center icon-danger">
                                                <i className="tim-icons icon-molecule-40"/>
                                            </div>
                                        </Col>
                                        <Col xs="7">
                                            <div className="numbers">
                                                <p className="card-category">Created / Detected</p>
                                                <CardTitle tag="h3">1944/1806</CardTitle>
                                            </div>
                                        </Col>
                                    </Row>
                                </CardBody>
                            </Card>
                        </Col>

                        <Col lg="12">
                            <Card className="card-chart">
                                <CardHeader>
                                    <h5 className="card-category">Key Rate</h5>
                                    <CardTitle tag="h3">
                                        <i className="tim-icons icon-chart-bar-32 text-info"/>
                                        Kbit/s
                                    </CardTitle>
                                </CardHeader>
                                <CardBody>
                                    <div className="chart-area">
                                        <Line data={
                                                keyRateData.data
                                            }
                                            options={
                                                keyRateData.options
                                            }/>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </>
        );
    }
}

export default Dashboard;
