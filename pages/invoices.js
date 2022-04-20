import React, { useState, useEffect } from 'react'
import Styles from '../styles/Invoices.module.css'
import {Badge, Col, FormGroup, Input, Row, Table, Button, ModalHeader, ModalBody, ModalFooter, Modal} from "reactstrap";
import userIcon from '../img/default-user-logo.jpg';
import {useForm} from "../hooks/useForm";
import {createAPIEndpoint, ENDPOINTS} from "./api";
import {getUserType} from "../helpers/tokenHelper";

const Invoices = () => {
    const [invoices, setInvoices] = useState([]);
    const [selectedInvoice, setSelectedInvoice] = useState();

    let userType = getUserType()
    console.log('User Type: ' + userType)

    // const {
    //     values,
    //     setValues,
    //     errors,
    //     setErrors,
    //     handleInputChange,
    //     handleDateChange,
    //     resetFormControls
    // } = useForm(getFreshModelObject)

    useEffect(() => {
        createAPIEndpoint(ENDPOINTS.INVOICES).fetchAll()
            .then(res => {
                setInvoices(res.data);
                setSelectedInvoice(res.data[0])
            })
            .catch(err => console.log(err));
        console.log(invoices.length)
    }, []);

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
                                {invoices.map((item,index) => {
                                    return (
                                        <tr
                                            key={item.ID}
                                            onClick={() => {
                                                setSelectedInvoice(item);
                                            }}
                                        >
                                            <th scope="row">{item.ID}</th>
                                            <td>{item.ID}</td>
                                            <td>{item.PROJECT}</td>
                                            <td>{item.ORGANIZATION}</td>
                                            <td>{item.TOTAL_COST}</td>
                                            <td><Badge color="warning">{item.PAYMENT_STATUS}</Badge></td>
                                        </tr>
                                )})}
                            </tbody>
                        </table>
                    </div>
                </Col>
                <Col lg={4}>
                    {selectedInvoice &&
                        <div className={`myCard p25`}>
                            <div className={`my_h1`}>Invoice #{selectedInvoice.ID}</div>


                            <Row>
                                <Col><div className={`my_h2`}>Issue Details</div></Col>
                                <Col><div ><td><Badge color="warning">{selectedInvoice.PAYMENT_STATUS}</Badge></td></div></Col>
                            </Row>
                            <Row>
                                <Col sm={4}>Priority</Col>
                                <Col sm={4}>{selectedInvoice.PRIORITY}</Col>
                            </Row>
                            <Row>
                                <Col sm={4}>Hours Spent</Col>
                                <Col sm={4}>{selectedInvoice.MAN_HOURS} Hours</Col>
                            </Row>
                            <Row>
                                <Col sm={4}>Total Payable</Col>
                                <Col sm={4}>USD {selectedInvoice.TOTAL_COST}</Col>
                            </Row>
                            {
                                userType === 'CLIENT' &&
                                <Row>
                                    <Button className={Styles.paymentButton}>Pay Now</Button>
                                </Row>
                            }

                        </div>
                    }
                </Col>
            </Row>
        </div>
    )
}

export default Invoices
