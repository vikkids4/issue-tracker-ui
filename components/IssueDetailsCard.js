import React, {useEffect} from 'react'
import Styles from '../styles/Issues.module.css'
import {Badge, Col, FormGroup, Input, Row} from "reactstrap";
import userIcon from '../img/default-user-logo.jpg';
import moment from 'moment';
import {createAPIEndpoint, ENDPOINTS} from "../pages/api";
import cookie from "react-cookies";
import {getUserType} from "../helpers/tokenHelper";


export const IssueDetailsCard = (props) => {

    const {selectedIssue,comments} = props;

    let userType = getUserType()

    useEffect(() => {
        console.log(selectedIssue, comments);
    })

    const nDate = (date) => {
        let a = new Date(date*1000);
        const b = moment(a).format('YYYY-MM-DD');
        return b;
    }

    function handleChangeIssueStatus (e) {
        console.log(e.target.value)
        if (e.target.value !== '0') {
            let iv = {
                issueId: selectedIssue.ID,
                statusId: e.target.value
            }
            createAPIEndpoint(ENDPOINTS.ISSUESTATUS_UPDATE).update(iv)
                .then(res => {
                })
                .catch(err => {
                    console.log(err)
                });
        }

    }

    return (
        <div className={`myCard p25`}>
            <div  className={`my_h1`}>{selectedIssue.TITLE}</div>
            {userType === 'INTERNAL' &&
                <Input
                    id="priority"
                    name="priority"
                    type="select"
                    onChange={(e) => {handleChangeIssueStatus(e)}}
                    // value={values.priority}
                    style={{float:'right', width: '200px', position: 'relative', top: -50}}
                >
                    <option value='0' defaultChecked={true}>Change Status</option>
                    <option key='CREATED' value='1'>CREATED</option>
                    <option key='IN REVIEW' value='2'>IN REVIEW</option>
                    <option key='PROGRESS' value='3'>IN PROGRESS</option>
                    <option key='CLOSED' value='4'>CLOSED</option>
                </Input>
            }

            <div className={Styles.issueMeta}>
                <div className={Styles.issueMetaItem}><Badge color="danger">Type: {selectedIssue.TYPE}</Badge></div>
                <div className={Styles.issueMetaItem}><Badge color="primary">Client: {selectedIssue.PROJECT_NAME}</Badge></div>
                <div className={Styles.issueMetaItem}><Badge color="warning">Status: {selectedIssue.STATUS}</Badge></div>
                <div className={Styles.issueMetaItem}><Badge color="secondary">Created on: {nDate(selectedIssue.CREATED_AT)}</Badge></div>
            </div>
            <div className={`my_h2`}>Description</div>
            <div className={Styles.descBody}>{selectedIssue.DESCRIPTION}</div>
            {/*<div className={Styles.peopleHeading}>People</div>*/}
            <div className={Styles.peopleBody}>
                <Row>
                    <Col>
                        <div className={`my_h3`}>Created By</div>
                        <div className={Styles.peopleBodyItem}>
                            <img src={userIcon.src} alt="" />
                            {selectedIssue.CREATED_BY_USER_NAME}
                        </div>
                    </Col>
                    {/*<Col>*/}
                    {/*    <div className={`my_h3`}>Assignee</div>*/}
                    {/*    <div className={Styles.peopleBodyItem}>*/}
                    {/*        <img src={userIcon.src} alt="" />*/}
                    {/*        Kavison Sugumaran*/}
                    {/*    </div>*/}
                    {/*</Col>*/}
                </Row>
            </div>
            {/*<div className={`my_h3`}>Attachments</div>*/}
            {/*<div className={Styles.attachmentBody}>*/}
            {/*    <div className={Styles.attachmentItem}></div>*/}
            {/*    <div className={Styles.attachmentItem}></div>*/}
            {/*    <div className={Styles.attachmentItem}></div>*/}
            {/*</div>*/}
            <div className={`my_h3`}>Comments</div>

            <div className={Styles.commentsBody}>
                {comments.map((item,index) => {
                    return (
                        <div className={Styles.commentsBodyItem}>
                            <div className={Styles.commentsBodyItemUser}>
                                <img src={userIcon.src} alt="" />
                                {item.USER_FULL_NAME}
                            </div>
                            <div className={Styles.commentsBodyItemDateTime}>{nDate(item.CREATED_AT)}</div>
                            <div className={Styles.commentsBodyItemText}>
                                {item.COMMENT}
                            </div>
                        </div>
                    )})}

                {/*<div className={Styles.commentsBodyItem}>*/}
                {/*    <div className={Styles.commentsBodyItemUser}>*/}
                {/*        <img src={userIcon.src} alt="" />*/}
                {/*        Richard Benson*/}
                {/*    </div>*/}
                {/*    <div className={Styles.commentsBodyItemDateTime}>12-01-2022 at 14:52</div>*/}
                {/*    <div className={Styles.commentsBodyItemText}>*/}
                {/*        Hi Vigneshan, any updates on this issue?.*/}
                {/*    </div>*/}
                {/*</div>*/}

                <div className={Styles.commentsBodyInput}>
                    <FormGroup>
                        <Input
                            id="exampleText"
                            name="text"
                            type="textarea"
                            placeholder="Type your comment here..."
                        />
                    </FormGroup>
                    <button className={`myBtn`}>Comment</button>
                </div>
            </div>
        </div>
    )
}
