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
                {/*<div className={Styles.projectMetaItem}><Badge color="warning">Status: Pending</Badge></div>*/}
                <div className={Styles.projectMetaItem}><Badge color="secondary">{nDate(project.START_DATE) + ' to ' + nDate(project.END_DATE)}</Badge></div>
                {/*<div className={Styles.projectMetaItem}><Badge color="danger">Active Issues: 5</Badge></div>*/}
            </div>
            <div className={`my_h2`}>Description</div>
            <div className={Styles.descBody}>{project.DESC}</div>
            <div className={Styles.peopleBody}>
                <Row>
                    {/*<Col>*/}
                    {/*    <div className={`my_h3`}>Created By</div>*/}
                    {/*    <div className={Styles.peopleBodyItem}>*/}
                    {/*        <img src={userIcon.src} alt="" />*/}
                    {/*        Vigneshan Seshamany*/}
                    {/*    </div>*/}
                    {/*</Col>*/}
                    <Col>
                        <div className={`my_h3`}>Assignee</div>
                        <div className={Styles.peopleBodyItem}>
                            <img src={userIcon.src} alt="" />
                            {project.ASSIGNEE_USER_NAME}
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    )
}
