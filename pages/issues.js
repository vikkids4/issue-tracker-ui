import React, { useState, useEffect } from 'react'
import Styles from '../styles/Issues.module.css'
import {Badge, Col, Row} from "reactstrap";
import {CreateIssueForm} from "../components/CreateIssueForm";
import {IssueDetailsCard} from "../components/IssueDetailsCard";
import {ProjectDetailsCard} from "../components/ProjectDetailsCard";
import {CreateProjectForm} from "../components/CreateProjectForm";
import { createAPIEndpoint, ENDPOINTS } from './api';
import { useForm } from '../hooks/useForm';
import {getOrgId, getUserType} from "../helpers/tokenHelper";

const getFreshModelObject = () => ({
    title: "",
    description: "",
    typeId: 0,
    statusId: 0,
    projectId: 0,
    priority: ""
})

const Issues = () => {
    const [showForm, setShowForm] = useState(0);
    const [issues, setIssues] = useState([]);
    const [comments, setComments] = useState([]);
    const [selectedIssue, setSelectedIssue] = useState([]);

    const {
		values,
		setValues,
        errors,
		setErrors,
		handleInputChange,
        handleDateChange,
		resetFormControls
	} = useForm(getFreshModelObject)

    useEffect(() => {
        let orgId = getOrgId()
        let userType = getUserType()

        if (userType === 'CLIENT') {
            createAPIEndpoint(ENDPOINTS.ISSUES).fetchById('orgId', orgId)
                .then(res => {
                    setIssues(res.data);
                    // setSelectedIssue(res.data[0]);
                    // console.log('Selected issue');
                    // console.log(res);
                    if (issues.length > 0) {
                        setSelectedIssue(res.data[0]);
                    }
                })
                .catch(err => console.log(err));
        } else {
            createAPIEndpoint(ENDPOINTS.ISSUES).fetchAll()
                .then(res => {
                    setIssues(res.data);
                    if (issues.length > 0) {
                        setSelectedIssue(res.data[0]);
                    }
                    // setSelectedIssue(res.data[0]);
                    // console.log(res.data);
                })
                .catch(err => console.log(err));
        }
    }, []);



    function toggleProjectForm(e) {
        setShowForm(!showForm)
    }

    function loadComments() {
        createAPIEndpoint(ENDPOINTS.COMMENTS).fetchById('issueId', selectedIssue.ID)
            .then(res => {
                setComments(res.data);
                console.log(res.data);
            })
            .catch(err => console.log(err));
    }

    return (
        <div>
            <Row className={`pageHeader`}>
                <Col sm={4}>
                    <div className={`my_h1 pageHeaderTitle`}>Issues</div>
                </Col>
                <Col>
                    <div className={`pageHeaderControls`}>
                        <button
                            className={`myBtn`}
                            onClick={(e) => toggleProjectForm(e)}
                        >Create Issue</button>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col lg={7}>
                    <div className={`myCard`}>
                        <table className={`myTable`}>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Type</th>
                                    <th>Priority</th>
                                    <th>Status</th>
                                    <th>Project</th>
                                    <th>Client</th>
                                    <th>Subject</th>
                                </tr>
                            </thead>
                            <tbody>
                            {issues.map((item,index) => {
                                return (
                                <tr
                                    key={index}
                                    onClick={() => {
                                        setSelectedIssue(item);
                                        loadComments(item.ID);
                                    }}
                                >
                                    <th scope="row">{item.ID}</th>
                                    <td>
                                        <Badge color={`${item.TYPE === 'BUG' ? "danger" : ""}${item.TYPE === 'FEATURE_REQUIREMENT' ? "primary" : ""}`}>
                                            {item.TYPE}
                                        </Badge>
                                    </td>
                                    <td>
                                        <Badge color={`${item.PRIORITY === 'L1' ? "danger" : ""}${item.PRIORITY === 'L2' ? "warning" : ""}${item.PRIORITY === "L3" ? "dark" : ""}`}>
                                            {item.PRIORITY}
                                        </Badge>
                                    </td>
                                    <td>{item.STATUS}</td>
                                    <td>{item.PROJECT_NAME}</td>
                                    <td>ABC Pvt Ltd</td>
                                    <td>{item.DESCRIPTION}</td>
                                </tr>
                                )})}
                                {/* <tr>
                                    <th scope="row">1</th>
                                    <td><Badge color="danger">Bug</Badge></td>
                                    <td><Badge color="warning">L1</Badge></td>
                                    <td>Pending</td>
                                    <td>Sample Project</td>
                                    <td>ABC Pvt Ltd</td>
                                    <td>Search is not working properly</td>
                                </tr>
                                <tr>
                                    <th scope="row">1</th>
                                    <td><Badge color="danger">Bug</Badge></td>
                                    <td><Badge color="warning">L2</Badge></td>
                                    <td>Pending</td>
                                    <td>Sample Project</td>
                                    <td>ABC Pvt Ltd</td>
                                    <td>Search is not working properly</td>
                                </tr>
                                <tr>
                                    <th scope="row">1</th>
                                    <td><Badge color="danger">Bug</Badge></td>
                                    <td><Badge color="warning">L3</Badge></td>
                                    <td>Pending</td>
                                    <td>Sample Project</td>
                                    <td>ABC Pvt Ltd</td>
                                    <td>Search is not working properly</td>
                                </tr>
                                <tr>
                                    <th scope="row">1</th>
                                    <td><Badge color="danger">Bug</Badge></td>
                                    <td><Badge color="warning">L1</Badge></td>
                                    <td>Pending</td>
                                    <td>Sample Project</td>
                                    <td>ABC Pvt Ltd</td>
                                    <td>Search is not working properly</td>
                                </tr>
                                <tr>
                                    <th scope="row">1</th>
                                    <td><Badge color="danger">Bug</Badge></td>
                                    <td><Badge color="warning">L3</Badge></td>
                                    <td>Pending</td>
                                    <td>Sample Project</td>
                                    <td>ABC Pvt Ltd</td>
                                    <td>Search is not working properly</td>
                                </tr> */}
                            </tbody>
                        </table>
                    </div>
                </Col>
                <Col lg={5}>
                    {!showForm &&
                        <IssueDetailsCard
                            {...{ selectedIssue, comments}}
                        />
                    }
                    {showForm &&
                        <CreateIssueForm
                            {...{values, setValues, errors, setErrors, handleInputChange, handleDateChange, resetFormControls }}
                        />
                    }
                </Col>
            </Row>
        </div>
    )
}

export default Issues
