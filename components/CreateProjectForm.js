import React, { useState, useEffect } from 'react'
import {Form, FormGroup, Input, Label} from "reactstrap";
import moment from 'moment';
import { createAPIEndpoint, ENDPOINTS } from '../pages/api';

const organization = [
    {id:0, name:'Select'},
    {id:1, name:'Google'},
    {id:2, name:'Tesla'},
    {id:3, name:'Abc'},
  ]

export const CreateProjectForm = (props) => {
    const {values, setValues,  errors, setErrors, handleInputChange, handleDateChange, resetFormControls} = props;

    const [usersList, setUsersList] = useState([]);
    const [orgs, setOrgs] = useState([]);

    useEffect(() => {
        createAPIEndpoint(ENDPOINTS.INTERNALUSRES).fetchAll()
        .then(res => {
          let usersList = res.data.map(item => ({
            id : item.ID,
            name: item.FIRST_NAME
          }))
          usersList = [{id:0, name: 'Select'}].concat(usersList);
          setUsersList(usersList);
        })
        .catch(err => console.log(err))

        createAPIEndpoint(ENDPOINTS.ORGANIZATIONS).fetchAll()
            .then(res => {
                setOrgs(res.data);
            })
            .catch(err => console.log(err))
    },[])

    useEffect(() => {
        console.log(values);
    })


    const submitProject = e => {
        e.preventDefault();
        console.log(values);
        createAPIEndpoint(ENDPOINTS.PROJECTS).create(values)
        .then(res => {
            resetFormControls();
        })
        .catch(err => console.log(err));
    };

    const nDate = (date) => {
        let a = new Date(date*1000);
        const b = moment(a).format('YYYY-MM-DD');
        return b;
    }

    return (
        <div className={`myCard p25`}>
            <div  className={`my_h1`}>Create a project</div>
            <Form onSubmit={submitProject}>
                <FormGroup>
                    <Label>Title</Label>
                    <Input
                        id="name"
                        name="name"
                        value={values.name}
                        placeholder="Project Name"
                        type="text"
                        onChange={handleInputChange}
                    />
                </FormGroup>
                <FormGroup>
                    <Label>Project Description</Label>
                    <Input
                        id="desc"
                        name="desc"
                        value={values.desc}
                        placeholder="Project Description"
                        type="textarea"
                        onChange={handleInputChange}
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
                <FormGroup>
                    <Label for="startDate">
                        Start Date
                    </Label>
                    <Input
                        id="startDate"
                        name="startDate"
                        placeholder="Start Date"
                        type="date"
                        onChange={handleDateChange}
                        value={nDate(values.startDate)}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="endDate">
                        End Date
                    </Label>
                    <Input
                        id="endDate"
                        name="endDate"
                        placeholder="End Date"
                        type="date"
                        onChange={handleDateChange}
                        value={nDate(values.endDate)}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="assignee">
                        Assigned to
                    </Label>
                    <Input
                        id="assignee"
                        name="assigneeId"
                        type="select"
                        onChange={handleInputChange}
                        value={values.assigneeId}
                    >
                        {usersList.map(user => (
                           <option
                            key={user.id}
                            value={user.id}
                            >
                                {user.name}
                            </option>
                        ))
                        }
                    </Input>
                </FormGroup>
            </Form>
            <div className={`pageHeaderControls`}>
                <button
                    className={`myBtn`}
                    onClick={submitProject}
                >
                    Create
                </button>
            </div>
        </div>
    )
}
