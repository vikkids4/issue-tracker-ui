import React, { useState } from 'react'
import Styles from '../styles/Issues.module.css'
import {Badge, Col, Row} from "reactstrap";
import {CreateIssueForm} from "../components/CreateIssueForm";
import {IssueDetailsCard} from "../components/IssueDetailsCard";
import {ProjectDetailsCard} from "../components/ProjectDetailsCard";
import {CreateProjectForm} from "../components/CreateProjectForm";

const Issues = () => {
    const [showForm, setShowForm] = useState(0);

    function toggleProjectForm(e) {
        setShowForm(!showForm)
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
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </Col>
                <Col lg={5}>
                    {!showForm &&
                        <IssueDetailsCard />
                    }
                    {showForm &&
                        <CreateIssueForm />
                    }
                </Col>
            </Row>
        </div>
    )
}

export default Issues
