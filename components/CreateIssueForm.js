import React, { useState, useEffect } from 'react'
import {Form, FormGroup, Input, Label} from "reactstrap";
import { createAPIEndpoint, ENDPOINTS } from '../pages/api';

export const CreateIssueForm = (props) => {
    const {values, setValues,  errors, setErrors, handleInputChange, handleDateChange, resetFormControls} = props;

    const [issueTypeList, setIssueTypeList] = useState([]);
    const [issueStatusList, setIssueStatusList] = useState([]);
    const [projectList, setProjectList] = useState([]);

    useEffect(() => {
        createAPIEndpoint(ENDPOINTS.ISSUETYPES).fetchAll()
        .then(res => {
          let issueTypeList = res.data.map(item => ({
            id : item.ID,
            type: item.TYPE
          }))
          issueTypeList = [{id:0, type: 'Select'}].concat(issueTypeList);
          setIssueTypeList(issueTypeList);
          console.log(issueTypeList)
        })
        .catch(err => console.log(err))
    },[])

    useEffect(() => {
        createAPIEndpoint(ENDPOINTS.ISSUESTATUS).fetchAll()
        .then(res => {
          let issueStatusList = res.data.map(item => ({
            id : item.ID,
            status: item.STATUS
          }))
          issueStatusList = [{id:0, status: 'Select'}].concat(issueStatusList);
          setIssueStatusList(issueStatusList);
          console.log(issueStatusList)
        })
        .catch(err => console.log(err))
    },[])

    useEffect(() => {
        createAPIEndpoint(ENDPOINTS.PROJECTS).fetchAll()
        .then(res => {
          let projectList = res.data.map(item => ({
            id : item.ID,
            name: item.NAME
          }))
          projectList = [{id:0, name: 'Select'}].concat(projectList);
          setProjectList(projectList);
          console.log(projectList)
        })
        .catch(err => console.log(err))
    },[])

    const submitOrder = e => {
        e.preventDefault();
        console.log(values);
        createAPIEndpoint(ENDPOINTS.ISSUES).create(values)
        .then(res => {
            resetFormControls();
        })
        .catch(err => console.log(err));
    };

    return (
        <div className={`myCard p25`}>
            <div  className={`my_h1`}>Create an Issue</div>
            <Form onSubmit={submitOrder}>
                <FormGroup>
                    <Label>Title</Label>
                    <Input
                        id="title"
                        name="title"
                        placeholder="Issue Title"
                        type="text"
                        value={values.title}
                        onChange={handleInputChange}
                    />
                </FormGroup>
                <FormGroup>
                    <Label>Description</Label>
                    <Input
                        id="description"
                        name="description"
                        placeholder="Description"
                        type="text"
                        value={values.description}
                        onChange={handleInputChange}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="type">
                        Type
                    </Label>
                    <Input
                        id="type"
                        name="typeId"
                        type="select"
                        onChange={handleInputChange}
                        value={values.typeId}
                    >
                        {issueTypeList.map(item => (
                            <option
                                key={item.id}
                                value={item.id}
                            >
                                {item.type}
                            </option>
                        ))

                        }
                    </Input>
                </FormGroup>
                <FormGroup>
                    <Label for="type">
                        Status
                    </Label>
                    <Input
                        id="status"
                        name="statusId"
                        type="select"
                        onChange={handleInputChange}
                        value={values.statusId}
                    >
                        {issueStatusList.map(item => (
                            <option
                                key={item.id}
                                value={item.id}
                            >
                                {item.status}
                            </option>
                        ))

                        }
                    </Input>
                </FormGroup>
                <FormGroup>
                    <Label for="project">
                        Project
                    </Label>
                    <Input
                        id="project"
                        name="projectId"
                        type="select"
                        onChange={handleInputChange}
                        value={values.projectId}
                    >
                        {projectList.map(item => (
                            <option
                                key={item.id}
                                value={item.id}
                            >
                                {item.name}
                            </option>
                        ))

                        }
                    </Input>
                </FormGroup>
            </Form>
            <div className={`pageHeaderControls`}>
                <button
                    className={`myBtn`}
                    onClick={submitOrder}
                >
                    Create
                </button>
            </div>
        </div>
    )
}
