import React, { useState, useEffect } from 'react'
import Styles from '../styles/Invoices.module.css'
import {
    Badge,
    Col,
    FormGroup,
    Input,
    Row,
    Table,
    Button,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Modal,
    Form, Label
} from "reactstrap";
import userIcon from '../img/default-user-logo.jpg';
import {useForm} from "../hooks/useForm";
import {createAPIEndpoint, ENDPOINTS} from "./api";
import {getUserType} from "../helpers/tokenHelper";
import moment from "moment";

const Organizations = () => {
    const [orgs, setOrgs] = useState([]);
    const [selectedOrg, setSelectedOrg] = useState();

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

    function fetchAllOrgs() {
        createAPIEndpoint(ENDPOINTS.ORGANIZATIONS).fetchAll()
            .then(res => {
                setOrgs(res.data);
                setSelectedOrg(res.data[0])
            })
            .catch(err => console.log(err));
    }

    useEffect(() => {
        fetchAllOrgs()
        // console.log(invoices.length)
    }, []);

    const getFreshModelObject = () => ({
        name: "",
        email: "",
        phoneNumber: "",
        billingAddress: "",
        country: ""
    })

    const {
        values,
        setValues,
        errors,
        setErrors,
        handleInputChange,
        handleDateChange,
        resetFormControls
    } = useForm(getFreshModelObject)

    const nDate = (date) => {
        let a = new Date(date*1000);
        const b = moment(a).format('YYYY-MM-DD');
        return b;
    }

    const submitOrg = e => {
        e.preventDefault();
        console.log(values);
        createAPIEndpoint(ENDPOINTS.ORGANIZATIONS).create(values)
            .then(res => {
                resetFormControls();
                fetchAllOrgs()
            })
            .catch(err => console.log(err));
    };

    return (
        <div>
            <Row className={`pageHeader`}>
                <Col sm={4}>
                    <div className={`my_h1 pageHeaderTitle`}>Organizations</div>
                </Col>
                {/*<Col>*/}
                {/*    <div className={`pageHeaderControls`}>*/}
                {/*        <button className={`myBtn`}>*/}
                {/*            Create Organization*/}
                {/*        </button>*/}
                {/*    </div>*/}
                {/*</Col>*/}
            </Row>
            <Row>
                <Col lg={8}>
                    <div className={`myCard`}>
                        <table className={`myTable`}>
                            <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Phone Number</th>
                                <th>Billing Address</th>
                                <th>Country</th>
                            </tr>
                            </thead>
                            <tbody>
                            {orgs.map((item,index) => {
                                return (
                                    <tr
                                        key={item.ID}
                                        onClick={() => {
                                            setSelectedOrg(item);
                                        }}
                                    >
                                        <th scope="row">{item.ID}</th>
                                        <td>{item.NAME}</td>
                                        <td>{item.EMAIL}</td>
                                        <td>{item.PHONE_NUMBER}</td>
                                        <td>{item.BILLING_ADDRESS}</td>
                                        <td>{item.COUNTRY}</td>
                                    </tr>
                                )})}
                            </tbody>
                        </table>
                    </div>
                </Col>
                <Col lg={4}>
                    <div className={`myCard p25`}>
                        <div  className={`my_h1`}>Create an Organization</div>
                        <Form
                            // onSubmit={submitProject}
                        >
                            <FormGroup>
                                <Label>Name</Label>
                                <Input
                                    id="name"
                                    name="name"
                                    value={values.name}
                                    placeholder="Organization Name"
                                    type="text"
                                    onChange={handleInputChange}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label>Email</Label>
                                <Input
                                    id="email"
                                    name="email"
                                    value={values.email}
                                    placeholder="Email"
                                    type="text"
                                    onChange={handleInputChange}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label>Phone Number</Label>
                                <Input
                                    id="phoneNumber"
                                    name="phoneNumber"
                                    value={values.phoneNumber}
                                    placeholder="Phone Number"
                                    type="text"
                                    onChange={handleInputChange}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label>Billing Address</Label>
                                <Input
                                    id="billingAddress"
                                    name="billingAddress"
                                    value={values.billingAddress}
                                    placeholder="Billing Address"
                                    type="text"
                                    onChange={handleInputChange}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label>Country</Label>
                                <Input
                                    id="country"
                                    name="country"
                                    value={values.country}
                                    placeholder="Country"
                                    type="text"
                                    onChange={handleInputChange}
                                />
                            </FormGroup>
                        </Form>
                        <div className={`pageHeaderControls`}>
                            <button
                                className={`myBtn`}
                                onClick={submitOrg}
                            >
                                Create
                            </button>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default Organizations
