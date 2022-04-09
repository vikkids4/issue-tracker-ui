import React from 'react'
import Styles from '../styles/Issues.module.css'
import {Badge, Col, FormGroup, Input, Row} from "reactstrap";
import userIcon from '../img/default-user-logo.jpg';

export const IssueDetailsCard = () => {
    return (
        <div className={`myCard p25`}>
            <div  className={`my_h1`}>Search is not working</div>
            <div className={Styles.issueMeta}>
                <div className={Styles.issueMetaItem}><Badge color="danger">Type: Bug</Badge></div>
                <div className={Styles.issueMetaItem}><Badge color="primary">Client: ABC Pvt Ltd</Badge></div>
                <div className={Styles.issueMetaItem}><Badge color="warning">Status: Pending</Badge></div>
                <div className={Styles.issueMetaItem}><Badge color="secondary">Created on: 13-01-2022</Badge></div>
            </div>
            <div className={`my_h2`}>Description</div>
            <div className={Styles.descBody}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. </div>
            {/*<div className={Styles.peopleHeading}>People</div>*/}
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
            <div className={`my_h3`}>Attachments</div>
            <div className={Styles.attachmentBody}>
                <div className={Styles.attachmentItem}></div>
                <div className={Styles.attachmentItem}></div>
                <div className={Styles.attachmentItem}></div>
            </div>
            <div className={`my_h3`}>Comments</div>
            <div className={Styles.commentsBody}>
                <div className={Styles.commentsBodyItem}>
                    <div className={Styles.commentsBodyItemUser}>
                        <img src={userIcon.src} alt="" />
                        Vigneshan Seshamany
                    </div>
                    <div className={Styles.commentsBodyItemDateTime}>12-01-2022 at 14:52</div>
                    <div className={Styles.commentsBodyItemText}>
                        Hi Richard, thanks for letting us know.  We are working on the fix now and will get back to you asap.
                    </div>
                </div>
                <div className={Styles.commentsBodyItem}>
                    <div className={Styles.commentsBodyItemUser}>
                        <img src={userIcon.src} alt="" />
                        Richard Benson
                    </div>
                    <div className={Styles.commentsBodyItemDateTime}>12-01-2022 at 14:52</div>
                    <div className={Styles.commentsBodyItemText}>
                        Hi Vigneshan, any updates on this issue?.
                    </div>
                </div>

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
