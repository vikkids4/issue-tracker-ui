import React, { useState, useEffect } from 'react'
import Styles from '../styles/LoginForm.module.css'
import {Col, Form, FormGroup, Input, Row} from "reactstrap";
import loginIllustration from '../img/login-illustration.svg'
import {faBell} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGoogle} from "@fortawesome/free-brands-svg-icons";
import {createAPIEndpoint, ENDPOINTS} from "../pages/api";
import cookie from 'react-cookies'
import {getUserRole, getUserType, loadToken} from "../helpers/tokenHelper";
import {SignupForm} from "./SignupForm";
import {ErrorMessage} from "./ErrorMessage";

const LoginForm = (props) => {
    const {values, setValues,  errors, setErrors, handleInputChange, handleDateChange, resetFormControls} = props;
    const [showSignupForm, setShowSignupForm] = useState(0);
    const [showError, setShowError] = useState(false);
    const [errHeader, setErrHeader] = useState([]);

    const [errMsg, setErrMsg] = useState([]);
    function showErrorMsg() {
        setShowError(true)
    }
    function hideErrorMsg() {
        setShowError(false)
    }

    const login = e => {
        e.preventDefault();
        console.log(values);
        createAPIEndpoint(ENDPOINTS.LOGIN).create(values)
            .then(res => {
                console.log(res.data.token)
                cookie.save('user', res.data.token, { path: '/' })
                resetFormControls();
            })
            .catch(err => {
                console.log(err)
                setErrHeader('Login Failed')
                setErrMsg(err.message)
                showErrorMsg()
                const id = setInterval(() => {
                    hideErrorMsg()
                    clearInterval(id)
                }, 3000);
            });
    };

    function toggleSignupForm(e) {
        setShowSignupForm(!showSignupForm)
    }

    function toggleError() {
        console.log('show error before: ' + showError )
        setShowError(!showError)
        console.log('show error after: ' + showError )
    }



    return (
        <Row className={`m0 ${Styles.layout}`}>
            <Col sm={{offset:3, size: 6}}>
                <div className={`${Styles.formWrapper} myCard`}>
                    <Row className={`m0`}>
                        <Col sm={6} className={`${Styles.leftPanel} p0`}>
                            <div className={Styles.logo}>Issue Tracker</div>
                            <div className={Styles.illustrationWrapper}>
                                <img src={loginIllustration.src}/>
                            </div>
                        </Col>
                        <Col sm={6} className={`${Styles.rightPanel} secondary-bg`}>
                            {
                                showSignupForm &&
                                    <div>
                                        <div className={Styles.formButton} style={{marginTop: '0px', marginBottom: '20px'}}>
                                            <button className={`myBtn`} onClick={toggleSignupForm}>Back to login</button>
                                        </div>
                                        <SignupForm
                                            {...{values, setValues, errors, setErrors, handleInputChange, handleDateChange, resetFormControls }}
                                        />
                                    </div>
                            }
                            {
                                !showSignupForm &&
                                    <div>
                                        <div className={Styles.loginHeading}>
                                            User Login
                                        </div>
                                        <Form onSubmit={login}>
                                            <div className={Styles.formBody}>
                                                <FormGroup>
                                                    <div className={Styles.formLabel}>Username</div>
                                                    <div className={Styles.formInput}>
                                                        <Input
                                                            name="username"
                                                            value={values.username}
                                                            onChange={handleInputChange}/>
                                                    </div>
                                                </FormGroup>
                                                <FormGroup>
                                                    <div className={Styles.formLabel}>Password</div>
                                                    <div className={Styles.formInput}>
                                                        <Input
                                                            name="password"
                                                            type="password"
                                                            value={values.password}
                                                            onChange={handleInputChange}/>
                                                    </div>
                                                </FormGroup>
                                                <div className={Styles.formButton}>
                                                    <button className={`myBtn`}>Login</button>
                                                </div>
                                                <div className={Styles.breakTxt} >or</div>
                                                <div className={Styles.formButton}>
                                                    <button className={`myBtn`} onClick={toggleSignupForm}>Signup</button>
                                                </div>
                                            </div>
                                        </Form>
                                    </div>
                            }
                        </Col>
                    </Row>
                </div>
            </Col>
            {
                showError &&
                    <ErrorMessage header={errHeader} body={'Invalid logins, Please try again.'} />
            }
        </Row>
    )
}

export default LoginForm
