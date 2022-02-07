import React from 'react'
// import Styles from '../styles/Issues.module.css'
import Styles from '../styles/Projects.module.css'
import {Badge, Col, FormGroup, Input, Row, Table, Button, ModalHeader, ModalBody, ModalFooter, Modal} from "reactstrap";
import userIcon from '../img/default-user-logo.jpg';
import CreateProjectModal from "../Components/CreateProjectModal";

const Projects = () => {
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
                            onClick={() => function noRefCheck(){}}
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
                    <div className={`myCard p25`}>
                        <div  className={`my_h1`}>E-Commerce Web Application Development</div>
                        <div className={Styles.projectMeta}>
                            <div className={Styles.projectMetaItem}><Badge color="warning">Status: Pending</Badge></div>
                            <div className={Styles.projectMetaItem}><Badge color="secondary">Created on: 13-01-2022</Badge></div>
                            <div className={Styles.projectMetaItem}><Badge color="danger">Active Issues: 5</Badge></div>
                        </div>
                        <div className={`my_h2`}>Description</div>
                        <div className={Styles.descBody}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. </div>
                        <div className={Styles.peopleBody}>
                            <Row>
                                <Col>
                                    <div className={`my_h3`}>Created By</div>
                                    <div className={Styles.peopleBodyItem}>
                                        <img src={userIcon.src} alt="" />
                                        Vigneshan Seshamany
                                    </div>
                                </Col>
                                <Col>
                                    <div className={`my_h3`}>Assignee</div>
                                    <div className={Styles.peopleBodyItem}>
                                        <img src={userIcon.src} alt="" />
                                        Kavison Sugumaran
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </Col>
            </Row>

            <CreateProjectModal/>
        </div>
    )
}

export default Projects
