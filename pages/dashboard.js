import React from 'react'
import Styles from '../styles/Dashboard.module.css'
import {Badge, Col, FormGroup, Input, Row, Table, Button} from "reactstrap";
import userIcon from "../img/default-user-logo.jpg";

const Projects = () => {
    return (
        <div>
            <Row className={`pageHeader`}>
                <Col sm={4}>
                    <div className={`my_h1 pageHeaderTitle`}>Dashboard</div>
                </Col>
                <Col>
                    <div className={`pageHeaderControls`}>
                        {/*<button className={`myBtn`}>Create Project</button>*/}
                    </div>
                </Col>
            </Row>
            <Row>
                <Col sm={3}>
                    <div className={`myCard ${Styles.statsWrapper}`}>
                        <div className={Styles.statsValue}>11</div>
                        <div className={Styles.statsName}>Ongoing Projects</div>
                    </div>
                </Col>
                <Col sm={3}>
                    <div className={`myCard ${Styles.statsWrapper}`}>
                        <div className={Styles.statsValue}>18</div>
                        <div className={Styles.statsName}>Clients</div>
                    </div>
                </Col>
                <Col sm={3}>
                    <div className={`myCard ${Styles.statsWrapper}`}>
                        <div className={Styles.statsValue}>9</div>
                        <div className={Styles.statsName}>Active Issues</div>
                    </div>
                </Col>
                <Col sm={3}>
                    <div className={`myCard ${Styles.statsWrapper}`}>
                        <div className={Styles.statsValue}>127h</div>
                        <div className={Styles.statsName}>Hours Spent</div>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col sm={4}>
                    <div className={`myCard p20`}>
                        <div className={`my_h2`}>Latest Comments</div>
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
                            <div className={Styles.commentsBodyItem}>
                                <div className={Styles.commentsBodyItemUser}>
                                    <img src={userIcon.src} alt="" />
                                    Ashwanth Patel
                                </div>
                                <div className={Styles.commentsBodyItemDateTime}>12-01-2022 at 14:52</div>
                                <div className={Styles.commentsBodyItemText}>
                                    Hi Kavison, the issue is still reproducible. Kindly check and let me know.
                                </div>
                            </div>
                            <div className={Styles.commentsBodyItem}>
                                <div className={Styles.commentsBodyItemUser}>
                                    <img src={userIcon.src} alt="" />
                                    Richard Benson
                                </div>
                                <div className={Styles.commentsBodyItemDateTime}>12-01-2022 at 14:52</div>
                                <div className={Styles.commentsBodyItemText}>
                                    Hi Hareesh, the issue is resolved now!
                                </div>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default Projects
