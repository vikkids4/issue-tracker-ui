import React from 'react'
import Styles from '../styles/Invoices.module.css'
import {Badge, Col, FormGroup, Input, Row, Table, Button, ModalHeader, ModalBody, ModalFooter, Modal} from "reactstrap";
import userIcon from '../img/default-user-logo.jpg';

const Invoices = () => {
    return (
        <div>
            <Row className={`pageHeader`}>
                <Col sm={4}>
                    <div className={`my_h1 pageHeaderTitle`}>Invoices</div>
                </Col>
                <Col>
                    <div className={`pageHeaderControls`}>
                        {/*<button*/}
                        {/*    className={`myBtn`}*/}
                        {/*    onClick={() => function noRefCheck(){}}*/}
                        {/*>*/}
                        {/*    Create Project*/}
                        {/*</button>*/}
                    </div>
                </Col>
            </Row>
            <Row>
                <Col lg={8}>
                    <div className={`myCard`}>
                        <table className={`myTable`}>
                            <thead>
                            <tr>
                                <th>#</th>
                                <th>Issue</th>
                                <th>Project</th>
                                <th>Client</th>
                                <th>Value</th>
                                <th>Payment Status</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Search function not working properly</td>
                                <td>E-Commerce Web Application Development</td>
                                <td>ABC Pvt Ltd</td>
                                <td>LKR 17,500</td>
                                <td><Badge color="warning">Pending</Badge></td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </Col>
                <Col lg={4}>
                    <div className={`myCard p25`}>
                        <div  className={`my_h1`}>Invoice #1</div>
                        <div className={`my_h2`}>Issue Details</div>
                        <div className={}></div>
                        <Row>
                            <Col sm={4}>Priority</Col>
                            <Col sm={4}>Level 1</Col>
                        </Row>
                        <Row>
                            <Col sm={4}>Hours Spent</Col>
                            <Col sm={4}>13 Hours</Col>
                        </Row>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default Invoices
