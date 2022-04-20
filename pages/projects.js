import React, { useState, useEffect } from 'react'
import Styles from '../styles/Projects.module.css'
import {Badge, Col, Row} from "reactstrap";
import {ProjectDetailsCard} from "../components/ProjectDetailsCard";
import {CreateProjectForm} from "../components/CreateProjectForm";
import axios from 'axios';
import { createAPIEndpoint, ENDPOINTS } from './api/index';
import { useForm } from '../hooks/useForm';
import moment from 'moment';
import {getOrgId, getUserType} from "../helpers/tokenHelper";

const getFreshModelObject = () => ({
    name: "",
    desc: "",
    orgId: 0,
    startDate:epochDate(new Date()),
    endDate: epochDate(new Date()),
    assigneeId: 0,
})

function epoch (date) {
    return Date.parse(date)
}

const epochDate = (val) => {
    const time = moment(val).format('DD MMMM YYYY, h:mm:ss');
    const timestamp = epoch(time)/1000;
}

const Projects = () => {
    const [showForm, setShowForm] = useState(0);
    const [projects, setProjects] = useState([]);
    const [selectedProject, setSelectedProject] = useState();

    const {
		values,
		setValues,
        errors,
		setErrors,
		handleInputChange,
        handleDateChange,
		resetFormControls
	} = useForm(getFreshModelObject)

    function toggleProjectForm(e) {
        setShowForm(!showForm)
    }

    useEffect(() => {
        let orgId = getOrgId()
        let userType = getUserType()

        if (userType === 'INTERNAL') {
            createAPIEndpoint(ENDPOINTS.PROJECTS).fetchAll()
                .then(res => {
                    setProjects(res.data);
                    if (projects.length > 0) {
                        setSelectedProject(res.data[0]);
                    }
                })
                .catch(err => console.log(err));
        } else {
            createAPIEndpoint(ENDPOINTS.PROJECTS).fetchById('orgId', orgId)
                .then(res => {
                    setProjects(res.data);
                    if (projects.length > 0) {
                        setSelectedProject(res.data[0]);
                    }
                })
                .catch(err => console.log(err));
        }
    }, []);

    return (
        <div>
            <Row className={`pageHeader`}>
                <Col sm={4}>
                    <div className={`my_h1 pageHeaderTitle`}>Projects</div>
                </Col>
                <Col>
                    <div className={`pageHeaderControls`}>
                        <button
                            className={`myBtn`}
                            onClick={(e) => toggleProjectForm(e)}
                        >
                            Create Project
                        </button>
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
                                <th>Name</th>
                                {/*<th>Status</th>*/}
                                <th>Client</th>
                                <th>Start Date</th>
                                <th>End Date</th>
                                <th>Assigned To</th>
                            </tr>
                            </thead>
                            <tbody>
                            {projects.map((item,index) => {
                                return (
                                    <tr
                                        key={item.ID}
                                        onClick={() => {
                                            setSelectedProject(item);
                                        }}
                                    >
                                        <th scope="row">{item.ID}</th>
                                        <td>{item.NAME}</td>
                                        {/*<td><Badge color="warning">In Progress</Badge></td>*/}
                                        <td>{item.ORG_NAME}</td>
                                        <td>{moment.unix(item.START_DATE).format('YYYY-MM-DD')}</td>
                                        <td>{moment.unix(item.END_DATE).format('YYYY-MM-DD')}</td>
                                        <td>{item.ASSIGNEE_USER_NAME}</td>
                                    </tr>
                            )})}
                            {/* <tr>
                                <th scope="row">1</th>
                                <td>E-Commerce Web Application Development</td>
                                <td><Badge color="warning">In Progress</Badge></td>
                                <td>ABC Pvt Ltd</td>
                                <td className={`text-center`}><Badge color="success">5</Badge></td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Mobile Application Development</td>
                                <td><Badge color="warning">In Progress</Badge></td>
                                <td>ABC Pvt Ltd</td>
                                <td className={`text-center`}><Badge color="success">5</Badge></td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>CRM Design & Development</td>
                                <td><Badge color="warning">In Progress</Badge></td>
                                <td>ABC Pvt Ltd</td>
                                <td className={`text-center`}><Badge color="success">5</Badge></td>
                            </tr> */}
                            </tbody>
                        </table>
                    </div>
                </Col>
                <Col lg={4}>
                    {!showForm &&
                        <ProjectDetailsCard
                            {...selectedProject}
                        />
                    }
                    {showForm &&
                        <CreateProjectForm
					        {...{values, setValues, errors, setErrors, handleInputChange, handleDateChange, resetFormControls }}
                        />
                    }
                </Col>
            </Row>
        </div>
    )
}

export default Projects
