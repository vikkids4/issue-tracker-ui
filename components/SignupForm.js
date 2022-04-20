import React, { useState, useEffect } from 'react'
import {Form, FormGroup, Input, Label} from "reactstrap";
import moment from 'moment';
import { createAPIEndpoint, ENDPOINTS } from '../pages/api';
import {ErrorMessage} from "./ErrorMessage";

const organization = [
    {id:0, name:'Select'},
    {id:1, name:'Google'},
    {id:2, name:'Tesla'},
    {id:3, name:'Abc'},
]

export const SignupForm = (props) => {
    const {values, setValues,  errors, setErrors, handleInputChange, handleDateChange, resetFormControls} = props;

    const [orgs, setOrgs] = useState([]);

    useEffect(() => {
        createAPIEndpoint(ENDPOINTS.ORGANIZATIONS).fetchAll()
            .then(res => {
                setOrgs(res.data);
            })
            .catch(err => console.log(err));
    }, []);

    const signup = e => {
        e.preventDefault();
        console.log(values);
        values['userType'] = 'CLIENT'
        values['orgId'] = values.orgId
        createAPIEndpoint(ENDPOINTS.SIGNUP).create(values)
            .then(res => {
                resetFormControls();
            })
            .catch(err => console.log(err));
    };

    return (
        <div className={`myCard p25`}>
            <div  className={`my_h1`}>Register</div>
            <Form onSubmit={signup}>
                <FormGroup>
                    <Label>First Name</Label>
                    <Input
                        id="firstName"
                        name="firstName"
                        value={values.firstName}
                        placeholder="First Name"
                        type="text"
                        onChange={handleInputChange}
                    />
                </FormGroup>
                <FormGroup>
                    <Label>First Name</Label>
                    <Input
                        id="lastName"
                        name="lastName"
                        value={values.lastName}
                        placeholder="Last Name"
                        type="text"
                        onChange={handleInputChange}
                    />
                </FormGroup>
                <FormGroup>
                    <Label>Username</Label>
                    <Input
                        id="username"
                        name="username"
                        value={values.username}
                        placeholder="Username"
                        type="text"
                        onChange={handleInputChange}
                    />
                </FormGroup>
                <FormGroup>
                    <Label>Password</Label>
                    <Input
                        id="password"
                        name="password"
                        value={values.password}
                        placeholder="Password"
                        type="password"
                        onChange={handleInputChange}
                    />
                </FormGroup>
                <FormGroup>
                    <Label>Password</Label>
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
                    <Input
                        id="userType"
                        name="userType"
                        value="CLIENT"
                        type="hidden"
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="org">
                        Organization
                    </Label>
                    <Input
                        id="org"
                        name="orgId"
                        type="select"
                        onChange={handleInputChange}
                        value={values.orgId}
                    >
                        {orgs.map(org => (
                            <option
                                key={org.ID}
                                value={org.ID}
                            >
                                {org.NAME}
                            </option>
                        ))
                        }
                    </Input>
                </FormGroup>
            </Form>
            <div className={`pageHeaderControls`}>
                <button
                    className={`myBtn`}
                    onClick={signup}
                >
                    Signup
                </button>
            </div>
        </div>
    )
}
