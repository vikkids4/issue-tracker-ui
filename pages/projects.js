import React, { useState } from 'react'
import Styles from '../styles/Projects.module.css'
import {Badge, Col, Row} from "reactstrap";
import {ProjectDetailsCard} from "../components/ProjectDetailsCard";
import {CreateProjectForm} from "../components/CreateProjectForm";

const Projects = () => {
    const [showForm, setShowForm] = useState(0);

    function toggleProjectForm(e) {
        setShowForm(!showForm)
    }

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
                <Col lg={7}>
                    <div className={`myCard`}>
                        <table className={`myTable`}>
                            <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Status</th>
                                <th>Client</th>
                                <th>Active Issues</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
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
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </Col>
                <Col lg={5}>
                    {!showForm &&
                        <ProjectDetailsCard />
                    }
                    {showForm &&
                        <CreateProjectForm />
                    }
                </Col>
            </Row>
        </div>
    )
}

export default Projects
