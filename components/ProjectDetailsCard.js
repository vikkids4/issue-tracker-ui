import React, { useEffect } from 'react'
// import Styles from '../styles/Issues.module.css'
import Styles from '../styles/Projects.module.css'
import {Badge, Col, FormGroup, Input, Row, Table, Button, ModalHeader, ModalBody, ModalFooter, Modal} from "reactstrap";
import userIcon from '../img/default-user-logo.jpg';
import CreateProjectModal from "../components/CreateProjectModal";
import moment from 'moment';

export const ProjectDetailsCard = (props) => {

    const project = props;

    const nDate = (date) => {
        let a = new Date(date*1000);
        const b = moment(a).format('YYYY-MM-DD');
        return b;
    }

    return (
        <div className={`myCard p25`}>
            <div  className={`my_h1`}>{project.NAME}</div>
            <div className={Styles.projectMeta}>
                <div className={Styles.projectMetaItem}><Badge color="warning">Status: Pending</Badge></div>
                <div className={Styles.projectMetaItem}><Badge color="secondary">{nDate(project.CREATED_AT)}</Badge></div>
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
                            John Doe
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    )
}
