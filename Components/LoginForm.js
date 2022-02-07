import React from 'react'
import Styles from '../styles/LoginForm.module.css'
import {Col, FormGroup, Input, Row} from "reactstrap";
import loginIllustration from '../img/login-illustration.svg'
import {faBell} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGoogle} from "@fortawesome/free-brands-svg-icons";

const LoginForm = () => {
    return (
        <Row className={Styles.layout}>
            <Col sm={{offset:3, size: 6}}>
                <div className={`${Styles.formWrapper} myCard`}>
                    <Row>
                        <Col sm={6} className={`${Styles.leftPanel} p0`}>
                            <div className={Styles.logo}>Issue Tracker</div>
                            <div className={Styles.illustrationWrapper}>
                                <img src={loginIllustration.src}/>
                            </div>
                        </Col>
                        <Col sm={6} className={`${Styles.rightPanel} secondary-bg`}>
                            <div className={Styles.loginHeading}>
                                User Login
                            </div>
                            <div className={Styles.formBody}>
                                <FormGroup>
                                    <div className={Styles.formLabel}>Username</div>
                                    <div className={Styles.formInput}>
                                        <Input/>
                                    </div>
                                </FormGroup>
                                <FormGroup>
                                    <div className={Styles.formLabel}>Password</div>
                                    <div className={Styles.formInput}>
                                        <Input type="password"/>
                                    </div>
                                </FormGroup>
                                <div className={Styles.formButton}>
                                    <button className={`myBtn`}>Login</button>
                                </div>
                                <div className={Styles.breakTxt} >or</div>
                                <div className={Styles.formButton}>
                                    <button className={`myBtn ${Styles.googleBtn}`}>
                                        <FontAwesomeIcon icon={faGoogle} />
                                        &nbsp;&nbsp;&nbsp; Sign in with Google
                                    </button>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Col>
        </Row>
    )
}

export default LoginForm
