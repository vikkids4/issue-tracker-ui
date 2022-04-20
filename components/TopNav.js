import React from 'react'
import Styles from '../styles/TopNav.module.css'
import {Col, Container, Row} from "reactstrap"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell } from '@fortawesome/free-solid-svg-icons'
import defaultUserLogo from '../img/default-user-logo.jpg';
import cookie from 'react-cookies'
import Router from 'next/router'
import {getUname} from "../helpers/tokenHelper.js";

const TopNav = (props) => {
    function logout() {
        cookie.remove('user', { path: '/' })
        Router.push('/')
    }

    let uname = getUname()

    return (
        <div className={`${Styles.navbar} primary-bg`}>
            <Row>
                {props.showLogo &&
                    <Col className={`p0`}>
                        <div className={`${Styles.logoWrapper} secondary-bg`}>Issue Tracker</div>
                    </Col>
                }
                <Col>
                    <div className={Styles.menuItem} onClick={logout}>Logout</div>
                    <div className={Styles.menuItem}>
                        <div className={Styles.userLogo}>
                            <img src={defaultUserLogo.src} alt="user_logo" />
                        </div>
                    </div>
                    <div className={Styles.menuItem}>Welcome {uname}</div>
                    {/*<div className={Styles.menuItem}>*/}
                    {/*    <FontAwesomeIcon icon={faBell} />*/}
                    {/*</div>*/}
                </Col>
            </Row>
        </div>
    )
}

export default TopNav
